import { useWeb3React } from "@web3-react/core";
import { useTokenContract } from "./useContract";

export function useKxaBalance() {
    const { account } = useWeb3React();

    const tokenContract = useTokenContract(process.env.REACT_APP_CONTRACT_TOKEN_KXA);

    if (tokenContract == null) {
        return;
    }
    const balance = tokenContract.balanceOf(account);

    return balance;
}
