import { InjectedConnector } from "@web3-react/injected-connector";
import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from "../constants/chain";
import { NetworkConnector } from "./NetworkConnector";

const NETWORK_URLS: { [key in SupportedChainId]: string } = {
    [SupportedChainId.MAINNET]: `https://speedy-nodes-nyc.moralis.io/70f4bddb98c9a8670b526b2e/bsc/mainnet`,
    [SupportedChainId.TESTNET]: `https://speedy-nodes-nyc.moralis.io/70f4bddb98c9a8670b526b2e/bsc/testnet`,
};

export const network = new NetworkConnector({
    urls: NETWORK_URLS,
    defaultChainId: Number(process.env.REACT_APP_DEFAULT_CHAIN_ID),
});

export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});
