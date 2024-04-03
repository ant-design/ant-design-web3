import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import * as allIconDefs from '@ant-design/web3-icons';
import pkg from 'lodash';

const __dirname = new URL(import.meta.url).pathname;
const { template } = pkg;

const writeFile = promisify(fs.writeFile);

interface IconDefinition {
  [key: string]: any;
}
interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string;
  svgBase64: string | null;
}

function camelToKebab(camelCaseString: string) {
  return camelCaseString
    .replace(/([a-z\d])([A-Z][a-z\d])|([A-Z]+(?![a-z\d]))/g, '$1$3-$2')
    .toLowerCase();
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
    Object.keys(allIconDefs).map((svgIdentifier) => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[svgIdentifier];
      const svgPathToKebab = camelToKebab(svgIdentifier);
      const realSvgPath = detectRealPath(
        path.resolve(__dirname, `../../src/svgs/${svgPathToKebab}.svg`),
      );

      let svgBase64: string | null = null;

      if (realSvgPath) {
        try {
          svgBase64 = svg2base64(realSvgPath);
        } catch (e) {}
      }
      return fn({ svgIdentifier, svgBase64, svgPathToKebab, ...iconDef });
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

import SVGComponent from '../svgs/<%= svgPathToKebab %>.svg';

<% if (svgBase64) { %> /**![<%= svgIdentifier %>](<%= svgBase64 %>) */ <% } %>
export const <%= svgIdentifier %> = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-<%= svgPathToKebab %>');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

<%= svgIdentifier %>.displayName = '<%= svgIdentifier %>';

`.trim(),
  );

  await walk(async (item) => {
    // generate icon file
    const svgPathToKebab = camelToKebab(item.svgIdentifier);

    try {
      await writeFile(
        path.resolve(__dirname, `../../src/components/${svgPathToKebab}.tsx`),
        render(item),
      );
    } catch (error) {}
  });

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .sort()
    .map((svgIdentifier) => `export * from './components/${camelToKebab(svgIdentifier)}';`)
    .join('\n');

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../../src/index.ts'),
    `
  // GENERATE BY ./scripts/generate.ts
  // DON NOT EDIT IT MANUALLY

  ${entryText}
      `.trim(),
  );
}

generateIcons();
