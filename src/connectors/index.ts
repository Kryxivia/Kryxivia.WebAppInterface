import { InjectedConnector } from "@web3-react/injected-connector";
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from "../constants/chain";
import { NetworkConnector } from "./NetworkConnector";

const NETWORK_URLS: { [key in SupportedChainId]: string } = {
    [SupportedChainId.MAINNET]: process.env.REACT_APP_NETWORK_URL_MAINNET || `https://bsc-dataseed.binance.org/`,
    [SupportedChainId.TESTNET]: process.env.REACT_APP_NETWORK_URL_TESTNET || `https://data-seed-prebsc-1-s1.binance.org:8545/`,
};

export const network = new NetworkConnector({
    urls: NETWORK_URLS,
    defaultChainId: Number(process.env.REACT_APP_DEFAULT_CHAIN_ID),
});

export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
