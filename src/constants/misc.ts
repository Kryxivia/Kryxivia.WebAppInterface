import { SupportedChainId } from "./chain";
import ERC20 from "../abis/KxaTokenContract.json";

export const NetworkContextName = "primary";

export interface IERC20 {
    symbol: string;
    address: string;
    decimals: number;
    name: string;
}

export const TOKENS_BY_NETWORK: { [key: number]: IERC20[] } = {
    [SupportedChainId.MAINNET]: [
        {
            address: "0x2223bf1d7c19ef7c06dab88938ec7b85952ccd89",
            symbol: "KXA",
            name: "Kryxivia Coin",
            decimals: 18,
        },
    ],
    [SupportedChainId.TESTNET]: [
        {
            address: "0x2223bf1d7c19ef7c06dab88938ec7b85952ccd89",
            symbol: "KXA",
            name: "Kryxivia Coin",
            decimals: 18,
        },
    ],
};

export const ABIs = (chainId: number) => {
    const matrix = TOKENS_BY_NETWORK[chainId];

    return Object.entries(
        matrix.reduce((memo, item) => {
            return { ...memo, [item.address]: ERC20.abi };
        }, {})
    );
};
