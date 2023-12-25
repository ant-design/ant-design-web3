export interface Locale {
  ConnectButton: {
    connect: string;
    disconnect: string;
  };
}

export type IntlType = {
  getMessage: (id: string, defaultMessage: string) => string;
};
