import { useMutation } from '@tanstack/react-query';
import { disconnectMutationOptions } from '@wagmi/core/query';
import { useConfig, useConnectors } from 'wagmi';

export function useDisconnect(parameters: any) {
  const { mutation } = parameters;
  const config = useConfig(parameters);
  const mutationOptions = disconnectMutationOptions(config);
  const { mutate, mutateAsync, ...result } = useMutation({ ...mutation, ...mutationOptions });

  return {
    ...result,
    connectors: useConnectors({ config }),
    disconnect: mutate,
    disconnectAsync: mutateAsync as any,
  };
}
