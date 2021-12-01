import { JsonRpcSigner, Web3Provider } from "@ethersproject/providers";
import { useMemo } from "react";
import ERC20 from "../abis/KxaTokenContract.json";
import KxaStaking from "../abis/KxaStakingContract.json";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export default function useContract<T extends Contract = Contract>(
    address: string,
    ABI: any
  ): T | null {
    const { library, account, chainId } = useWeb3React()
  
    return useMemo(() => {
      if (!address || !ABI || !library || !chainId) {
        return null
      }
  
      try {
        return new Contract(address, ABI, getProviderOrSigner(library, account as any))
      } catch (error) {
        console.error('Failed To Get Contract', error)
  
        return null
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address, ABI, library, account]) as T
  }

export function useTokenContract(ContractAddress: any) {
    return useContract(ContractAddress, ERC20.abi);
}

export function useStakingContract(ContractAddress: any) {
    return useContract(ContractAddress, KxaStaking.abi);
}
