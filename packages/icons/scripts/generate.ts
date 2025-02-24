import * as fs from 'node:fs';
import * as path from 'node:path';
import { promisify } from 'node:util';
import pkg from 'lodash';

const __dirname = new URL(import.meta.url).pathname;
const { template } = pkg;

const writeFile = promisify(fs.writeFile);

type IconDefinition = Record<string, any>;
interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
  svgBase64: string | null;
}

const IdentifierMap: Record<string, string> = {
  'imtoken-circle-colorful': 'ImTokenCircleColorful',
  'imtoken-colorful': 'ImTokenColorful',
  'metamask-colorful': 'MetaMaskColorful',
  'oneinch-colorful': 'OneInchColorful',
  'pancakeswap-colorful': 'PancakeSwapColorful',
  'sushiswap-colorful': 'SushiSwapColorful',
  'tokenpocket-colorful': 'TokenPocketColorful',
  'twokey-circle-colorful': 'TwoKeyCircleColorful',
  'aave-circle-colorful': 'AAVECircleColorful',
  'usdt-filled': 'USDTFilled',
  'usdt-colorful': 'USDTColorful',
  'usdt-circle-filled': 'USDTCircleFilled',
  'bsc-circle-colorful': 'BSCCircleColorful',
  'wbtc-circle-colorful': 'WBTCCircleColorful',
  'dai-circle-colorful': 'DAICircleColorful',
  'xlayer-colorful': 'XLayerColorful',
};

function getAllFilesInDirectory(dirPath: string) {
  let filesList: string[] = [];

  try {
    const directoryContent = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of directoryContent) {
      const fileNameWithExtension = entry.name;
      const fileName = path.basename(fileNameWithExtension, path.extname(fileNameWithExtension));
      if (fileName === '.DS_Store') {
        // for Mac OS
        continue;
      }
      if (entry.isDirectory()) {
        filesList = filesList.concat(getAllFilesInDirectory(fileName));
      } else {
        filesList.push(fileName);
      }
    }

    return filesList;
  } catch (err) {
    console.error('Error reading directory:', err);
    return [];
  }
}
const AllSvgFiles = getAllFilesInDirectory(path.resolve(__dirname, '../../src/svgs'));
function kebabToCamel(kebabCaseString: string) {
  if (Object.keys(IdentifierMap).some((key) => key === kebabCaseString)) {
    return IdentifierMap[kebabCaseString];
  }
  const camelCaseWithoutFirstLetterCapitalized = kebabCaseString
    .replace(/(-[a-z])/g, (match) => match.toUpperCase().slice(1))
    .replace(/^([A-Z])/, (match) => match.toLowerCase());

  return (
    camelCaseWithoutFirstLetterCapitalized.charAt(0).toUpperCase() +
    camelCaseWithoutFirstLetterCapitalized.slice(1)
  );
}

function detectRealPath(_path: string) {
  try {
    return fs.existsSync(_path) ? _path : null;
  } catch (e) {
    return null;
  }
}

function svg2base64(svgPath: string, size = 50) {
  const svg = fs.readFileSync(svgPath, 'utf-8');
  const svgWithStyle = svg.replace(/<svg/, `<svg width="${size}" height="${size}" fill="#cacaca"`);

  const base64 = Buffer.from(svgWithStyle).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    AllSvgFiles.map((svgIdentifier) => {
      const realSvgPath = detectRealPath(
        path.resolve(__dirname, `../../src/svgs/${svgIdentifier}.svg`),
      );

      let svgBase64: string | null = null;
      const svgCamelPath = kebabToCamel(svgIdentifier);

      if (realSvgPath) {
        try {
          svgBase64 = svg2base64(realSvgPath);
        } catch (e) {}
      } else {
        console.log('realSvgPath is not found:', svgIdentifier);
      }
      return fn({ svgIdentifier, svgBase64, svgCamelPath });
    }),
  );
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../../src/svgs');

  try {
    await promisify(fs.access)(iconsDir);
  } catch (err) {
    await promisify(fs.mkdir)(iconsDir);
  }

  const render = template(
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/<%= svgIdentifier %>.svg';

<% if (svgCamelPath) { %>/**![<%= svgCamelPath %>](<%= svgBase64 %>) */<% }%>
export const <%= svgCamelPath %> = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-<%= svgIdentifier %>');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

<%= svgCamelPath %>.displayName = '<%= svgCamelPath %>';
`.trimStart(),
  );

  await walk(async (item) => {
    // generate icon file
    try {
      await writeFile(
        path.resolve(__dirname, `../../src/components/${item.svgIdentifier}.tsx`),
        render(item),
      );
    } catch (error) {}
  });

  // generate icon index
  const entryText = AllSvgFiles.sort()
    .map((svgIdentifier) => `export * from './components/${svgIdentifier}';`)
    .join('\n');
  const exportPath = path.resolve(__dirname, '../../src/index.ts');
  fs.unlinkSync(exportPath);
  await promisify(fs.appendFile)(
    exportPath,
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

${entryText}
`.trimStart(),
  );
}

generateIcons();
