/* eslint-disable @typescript-eslint/no-unused-vars */
import { AbstractConnector } from '@web3-react/abstract-connector'
import { injected } from '../connectors'

import INJECTED_ICON_URL from '../assets/img/arrow-right.svg'
import METAMASK_ICON_URL from '../assets/img/metamask.svg'

interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconURL: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconURL: INJECTED_ICON_URL,
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconURL: METAMASK_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  /* BSC: {
    connector: bscConnector,
    name: 'MetaMask',
    iconURL: INJECTED_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  }, */
}