import { AddressZero } from "@ethersproject/constants";
import { getAddress } from "@ethersproject/address";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: string): string | false {
    try {
        return getAddress(value);
    } catch {
        return false;
    }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
    if (address === "") return "";
    const parsed = isAddress(address);
    if (!parsed) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}

export function getContract(address: any, ABI: any, library: any, account: any) {
    if (!isAddress(address) || address === AddressZero) {
        throw Error(`Invalid 'address' parameter '${address}'.`);
    }
}

export function formatCurrency(num: number, min: number, max: number, currency: string) {
    const formatConfig = {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: min,
      maximumFractionDigits: max,
      currencyDisplay: 'symbol',
    }
    const curFormatter = new Intl.NumberFormat('en-US', formatConfig)
  
    return curFormatter.format(num)
  }