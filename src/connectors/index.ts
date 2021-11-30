import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'

import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../constants/chain'
import getLibrary from '../utils/getLibrary'
import { NetworkConnector } from './NetworkConnector'

const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://bsc-dataseed.binance.org/`,
  [SupportedChainId.TESTNET]: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
}

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 56,
})

let networkLibrary: Web3Provider | undefined
export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? getLibrary(network.provider))
}

export const injected = new InjectedConnector({
  supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
})