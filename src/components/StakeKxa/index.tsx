import React, { useState } from "react";
import { utils } from "ethers";
import { ReactComponent as MetamaskIcon } from "../../assets/img/metamask.svg";
import { useWeb3React } from "@web3-react/core";
import useContract, { useStakingContract, useTokenContract } from "../../hooks/useContract";
import KxaToken from "../../abis/KxaTokenContract.json";
import KxaStaking from "../../abis/KxaStakingContract.json";
import { useKxaBalance } from "../../hooks/useBalance";


export const StakeKxa: React.FC = () => {
    const { account } = useWeb3React();

    //const stakingContract = useStakingContract(process.env.REACT_APP_CONTRACT_STAKING_KXA);
    //const tokenContract = useTokenContract(process.env.REACT_APP_CONTRACT_TOKEN_KXA);
    const stakingContract = useContract(process.env.REACT_APP_CONTRACT_STAKING_KXA || '', KxaStaking.abi);
    const tokenContract = useContract(process.env.REACT_APP_CONTRACT_TOKEN_KXA || '', KxaToken.abi);
    //const balance = useKxaBalance();

    const [amountToStake, setAmountToStake] = useState<string>("");
    const [error, setError] = useState<string>();
    const [pending, setPending] = useState<string>();
    const [success, setSuccess] = useState<string>();

    async function stake(e: any) {
        e.preventDefault();
        if (stakingContract == null || tokenContract == null) {
            return;
        }
        const asNumber: number = parseFloat(amountToStake);
        if (asNumber <= 150) {
            setError(`Invalid amount to deposit on the staking contract: ${asNumber} KXA`);
            console.log(`Error: Invalid amount to deposit on the staking contract: ${asNumber} KXA`);
            return;
        }
        
        const decimalAmount: any = utils.parseEther(amountToStake);
        try {
            console.log(account, process.env.REACT_APP_CONTRACT_STAKING_KXA)
            /**Approve contract */
            const allowance = await tokenContract.allowance(account, process.env.REACT_APP_CONTRACT_STAKING_KXA);
            const wei = utils.parseEther("10000000");
            if (parseFloat(allowance) < parseFloat(decimalAmount)) {
                setPending("Allowance pending, please allow the use of your token balance for the contract...");
                const approveTx = await tokenContract.approve(process.env.REACT_APP_CONTRACT_STAKING_KXA, wei.toString());
                setPending("Waiting for confirmations...");
                await approveTx.wait();
                setPending("Allowance successfully increased, waiting for deposit transaction...");
            }
            /** Balance check */
            /* const currentBalanceDecimal: any = utils.parseEther(balance.toString());
            if (parseFloat(decimalAmount) > parseFloat(currentBalanceDecimal)) {
                setPending("");
                setError(`You only have ${balance} KXA in your wallet.`);
                return;
            } */

            setPending("Pending, check your wallet extension to execute the chain transaction...");
            const result = await stakingContract.stakeKXA(decimalAmount.toString());
            setPending("Waiting for confirmations...");
            const txReceipt = await result.wait();
            if (txReceipt.status === 1) {
                setSuccess(`Deposit successfully completed ! ${txReceipt.transactionHash}`);
            }
            //refreshBalanceContract();
        } catch (error) {
            if (e.data?.message) {
                setPending("");
                setError(`Error: ${e.data?.message}`);
                return;
            }
            if (e.message) {
                setPending("");
                setError(`Error: ${e.message}`);
            }
        }
    }

    return (
        <fieldset className="stk">
            <legend>Stake your KXA now !</legend>
            <div className="ins">
                <div className="in inm">
                    <label htmlFor="amount">
                        Amount to stake <small>(min 150 KXA)</small>
                    </label>
                    <input
                        type="number"
                        name="amount"
                        min={150}
                        placeholder="150"
                        value={amountToStake}
                        onChange={(e) => {
                            setAmountToStake(e.target.value);
                        }}
                    />
                </div>
                <div className="in inx">
                    <div className="btm">
                        <button className="bt bt-p" onClick={(e) => stake(e)}>
                            <span>Stake now </span>
                            <MetamaskIcon />
                        </button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
