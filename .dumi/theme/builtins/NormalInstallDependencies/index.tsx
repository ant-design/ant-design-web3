import InstallDependencies from '../InstallDependencies';

interface NormalInstallProps {
  packageNames: string;
  save: 'true' | 'false' | 'dev' | 'peer' | 'optional';
}

const NormalInstallDependencies: React.FC<NormalInstallProps> = (props) => {
  const { packageNames, save } = props;
  let realSave: boolean = false;
  if (save === 'true') {
    realSave = true;
  } else if (save !== 'false') {
    realSave = true;
  }
  const saveArg = realSave
    ? `${save === 'true' ? '--save' : `--save${save === 'dev' ? '-dev' : `-${save}`}`} `
    : '';
  const npm = `npm install ${packageNames} ${saveArg}`;
  const yarn = `yarn add ${packageNames}`;
  const pnpm = `pnpm add ${packageNames} ${saveArg}`;
  return <InstallDependencies npm={npm} yarn={yarn} pnpm={pnpm} />;
};

export default NormalInstallDependencies;
