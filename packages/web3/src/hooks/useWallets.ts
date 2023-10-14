import { useEffect, useState } from "react";
import type { WalletMetadata } from "@ant-design/web3-common";
import useProvider from "./useProvider";

export default function useWallets() {
	const [wallets, setWallets] = useState<WalletMetadata[]>([]);
	const [error, setError] = useState<Error>();
	const { provider } = useProvider();

	useEffect(() => {
		if (provider) {
			provider
				.getAvaliableWallets()
				.then((data) => {
					setWallets(data);
				})
				.catch((err) => {
					setError(err);
				});
		}
	}, [provider]);

	return {
		wallets,
		error,
	};
}
