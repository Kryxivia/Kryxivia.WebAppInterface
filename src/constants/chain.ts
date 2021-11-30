export enum SupportedChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = [
  SupportedChainId.MAINNET,
  SupportedChainId.TESTNET,
]

export const L1_CHAIN_IDS = [
  SupportedChainId.MAINNET,
  SupportedChainId.TESTNET,
] as const

export type SupportedL1ChainId = typeof L1_CHAIN_IDS[number]

export interface L1ChainInfo {
  readonly blockWaitMsBeforeWarning?: number
  readonly explorer: string
  readonly label: string
  readonly logoUrl?: string
  readonly rpcUrls?: string[]
  readonly nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
}

export type ChainInfo = { readonly [chainId: number]: L1ChainInfo } & {
  readonly [chainId in SupportedL1ChainId]: L1ChainInfo
}

export const CHAIN_INFO: ChainInfo = {
  [SupportedChainId.MAINNET]: {
    explorer: 'https://bscscan.com/',
    label: 'Binance Smart Chain Mainnet',
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  },
  [SupportedChainId.TESTNET]: {
    explorer: 'https://testnet.bscscan.com/',
    label: 'Binance Smart Chain Testnet',
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
  },
}