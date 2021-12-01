import { useMemo } from "react";
import KxaToken from "../abis/KxaTokenContract.json";
import KxaStaking from "../abis/KxaStakingContract.json";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";


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
        return new Contract(address, ABI, library.getSigner(account))
      } catch (error) {
        console.error('Failed To Get Contract', error)
  
        return null
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [address, ABI, library, account]) as T
  }

export function useTokenContract(ContractAddress: any) {
    return useContract(ContractAddress, KxaToken.abi);
}

export function useStakingContract(ContractAddress: any) {
    return useContract(ContractAddress, KxaStaking.abi);
}
