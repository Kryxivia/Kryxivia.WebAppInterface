import React, { useEffect, useState } from "react";
import { utils } from "ethers";
import { ReactComponent as MetamaskIcon } from "../../assets/img/metamask.svg";
import { useWeb3React } from "@web3-react/core";
import { useStakingContract, useTokenContract } from "../../hooks/useContract";
import { formatUnits } from "@ethersproject/units";
import { useNavigate } from "react-router";
import { CHAIN_INFO } from "../../constants/chain";

export const CONTRACT_STAKING = process.env.REACT_APP_CONTRACT_STAKING_KXA || "0x57613EeE7Fb9E3B311E1Fe1BF7B42b664f65AC89";
export const CONTRACT_TOKEN = process.env.REACT_APP_CONTRACT_TOKEN_KXA || "0x2223bF1D7c19EF7C06DAB88938EC7B85952cCd89";

function useMintStakeAmount() {
    const [amount, setAmount] = useState("");
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchData = async () => {
            if (stakingContract == null) {
                return;
            }
            const result = await stakingContract.getMinimumRequiredLock();
            setAmount(parseFloat(formatUnits(result, 18)).toFixed());
        };

        fetchData();
    }, [setAmount, stakingContract]);

    return amount;
}

export const StakeKxa: React.FC = () => {
    const { account, library, chainId } = useWeb3React();

    const stakingContract = useStakingContract(CONTRACT_STAKING);
    const tokenContract = useTokenContract(CONTRACT_TOKEN);
    let navigate = useNavigate();

    //const { data: minStakeAmount } = useEtherSWR([CONTRACT_STAKING, "getMinimumRequiredLock", account]);

    const [amountToStake, setAmountToStake] = useState<string>("");
    const [stakeTx, setStakeTx] = useState<string>();
    const [error, setError] = useState<string>();
    const [pending, setPending] = useState<string>();
    const [success, setSuccess] = useState<string>();
    const minStakeAmount = useMintStakeAmount();

    const resetFeedback = () => {
        setError("");
        setPending("");
        setSuccess("");
    };

    async function stake(e: any) {
        e.preventDefault();
        resetFeedback();
        if (stakingContract == null || tokenContract == null || amountToStake === "") {
            setError("Enter an amount to stake");
            return;
        }
        const asNumber: number = parseFloat(amountToStake);
        //get value from contract
        if (asNumber <= 15000) {
            setError(`Invalid amount to stake needs to be superior than ${asNumber} KXA`);
            return;
        }

        const decimalAmount: any = utils.parseEther(amountToStake);
        try {
            /**Approve contract */
            const allowance = await tokenContract.allowance(account, process.env.REACT_APP_CONTRACT_STAKING_KXA);
            const wei = utils.parseEther("10000000");
            if (parseFloat(allowance) < parseFloat(decimalAmount)) {
                setPending("Allowance pending, please allow the use of your token balance for the contract...");
                const approveTx = await tokenContract.approve(process.env.REACT_APP_CONTRACT_STAKING_KXA, wei.toString());
                setPending("Waiting for 2 confirmations ...");
                await library.waitForTransaction(approveTx.hash, 2);
                setPending("Allowance successfully increased, waiting for deposit transaction...");
                resetFeedback();
            }

            setPending("Pending: check your wallet extension to execute the chain transaction ...");
            const result = await stakingContract.stakeKXA(decimalAmount.toString());
            setPending("Waiting for 2 confirmations...");
            const txReceipt = await library.waitForTransaction(result.hash, 2);
            if (txReceipt.status === 1) {
                resetFeedback();
                setSuccess(`Deposit successfully completed !`);
                setStakeTx(`${txReceipt.transactionHash}`)
            }
            navigate("/");
        } catch (e: any) {
            resetFeedback();
            if (e && e?.data?.message !== undefined) {
                setError(`${e.data.message}`);
            } else if (e && e.message) {
                setError(`${e.message}`);
            } else {
                setError(`Error: ${e}`);
            }
        }
    }

    return (
        <fieldset className="stk">
            <legend>Stake your KXA now !</legend>
            {!minStakeAmount ? (
                <>loading</>
            ) : (
                <div className="ins">
                    <div className="in inm">
                        <label htmlFor="stake-amount">
                            Amount to stake <small>(min {minStakeAmount} KXA)</small>
                        </label>
                        <input
                            type="number"
                            name="stake-amount"
                            min={Number(minStakeAmount)}
                            placeholder={minStakeAmount}
                            value={amountToStake}
                            onChange={(e) => {
                                setAmountToStake(e.target.value);
                            }}
                            aria-invalid={!!amountToStake}
                            aria-describedby="stake-amount"
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
            )}
            {error && (
                <p style={{ marginTop: "1rem", color: "red" }} id="stake-amount">
                    ❌ {error}
                </p>
            )}
            {pending && (
                <p style={{ marginTop: "1rem", color: "blue" }} id="stake-amount">
                    ℹ️ {pending}
                </p>
            )}
            {success && chainId && (
                <p style={{ marginTop: "1rem", color: "rgb(var(--green))" }} id="stake-amount">
                    ✅ {success + ' '}
                    <a style={{textDecoration: 'underline'}} href={`${CHAIN_INFO[chainId].explorer}tx/${stakeTx}`} target="_blank" rel="noreferrer">View on BSCScan</a>
                </p>
            )}
        </fieldset>
    );
};
