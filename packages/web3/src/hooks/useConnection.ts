import useProvider from './useProvider';

export default function useConnection() {
  const { connect, disconnect } = useProvider();

  return {
    connect,
    disconnect,
  };
}
