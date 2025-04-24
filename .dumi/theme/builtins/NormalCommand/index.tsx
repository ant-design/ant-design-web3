import InstallDependencies from '../InstallDependencies';

interface NormalCommandProps {
  command: string;
}

const NormalCommand: React.FC<NormalCommandProps> = (props) => {
  const { command } = props;
  const npm = `npm run ${command}`;
  const yarn = `yarn ${command}`;
  const pnpm = `pnpm ${command}`;
  const bun = `bun ${command}`;
  return <InstallDependencies npm={npm} yarn={yarn} pnpm={pnpm} bun={bun} />;
};

export default NormalCommand;
