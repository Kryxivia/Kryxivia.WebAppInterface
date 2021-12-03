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
  readonly id: number
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
    id: 56,
    explorer: 'https://bscscan.com/',
    label: 'Binance Smart Chain Mainnet',
    rpcUrls: ['https://bsc-dataseed.binance.org/', 'https://bsc-dataseed1.defibit.io/'],
    nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
  },
  [SupportedChainId.TESTNET]: {
    id: 97,
    explorer: 'https://testnet.bscscan.com/',
    label: 'Binance Smart Chain Testnet',
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/', 'https://data-seed-prebsc-2-s1.binance.org:8545/'],
    nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
  },
}