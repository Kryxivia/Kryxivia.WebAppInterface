import { BigNumber } from "@ethersproject/bignumber";
import { formatEther, formatUnits } from "@ethersproject/units";
import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useStakingContract } from "../../hooks/useContract";
import { CONTRACT_STAKING } from "../StakeKxa";

function useUserStakeAmount(account: string | undefined | null) {
    const [amount, setAmount] = useState("");
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchData = async () => {
            if (stakingContract == null || account === undefined || account == null) {
                return;
            }
            const result = await stakingContract.getAddrLockAmount(account);
            setAmount(parseFloat(formatUnits(result, 18)).toFixed());
        };

        fetchData();
    }, [account, setAmount, stakingContract]);

    return amount;
}

function useGetStartBlock(account: string | undefined | null) {
    const [startBlock, setStartBlock] = useState(0);
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchBlock = async () => {
            if (stakingContract == null || account === undefined || account == null) {
                return;
            }
            const result = await stakingContract.getAddrStartBlock(account);
            const block = BigNumber.from(result);
            setStartBlock(block.toNumber());
        };

        fetchBlock();
    }, [account, setStartBlock, stakingContract]);

    return startBlock;
}

function useGetEndBlock(account: string | undefined | null) {
    const [endBlock, setEndBlock] = useState(0);
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchBlock = async () => {
            if (stakingContract == null || account === undefined || account == null) {
                return;
            }
            const result = await stakingContract.getAddrEndBlock(account);
            const block = BigNumber.from(result);
            setEndBlock(block.toNumber());
        };

        fetchBlock();
    }, [account, setEndBlock, stakingContract]);

    return endBlock;
}

function useUnlockDate(startBlock: number, endBlock: number) {
    const [unlockDate, setUnlockDate] = useState<string>();
    const [dateObj, setDateObj] = useState<Date>(new Date());

    function addDays(date: any, days: any) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    useEffect(() => {
        const fetchData = async () => {
            const end = new Date();
            const diff = endBlock - startBlock;
            const daysLeft = diff / 27000;
            const unlockDate = addDays(end, daysLeft);
            const dateOptions = { year: "numeric", month: "long", day: "numeric" };
            const result = unlockDate?.toLocaleDateString("en-US", dateOptions as any);
            setUnlockDate(result);
            setDateObj(unlockDate);
        };

        fetchData();
    }, [endBlock, setUnlockDate, startBlock]);

    return { unlockDate, dateObj };
}

function useIsUnlocked(date: Date) {
    const [isUnlocked, setIsUnlocked] = useState<boolean>();

    useEffect(() => {
        const fetchData = async () => {
            const newDate = new Date().toString();

            const today = Date.parse(newDate);
            const unlock = Date.parse(date.toString());

            console.log("today: ", today);
            console.log("Unlock: ", unlock);
            if (today > unlock) {
                setIsUnlocked(true);
            } else {
                setIsUnlocked(false);
            }
        };

        fetchData();
    }, [date]);

    return isUnlocked;
}

export const StakedKxa: React.FC = () => {
    const { account } = useWeb3React();

    const userStakedAmount = useUserStakeAmount(account);
    const startBlock = useGetStartBlock(account);
    //console.log(startBlock)
    const endBlock = useGetEndBlock(account);
    //console.log(endBlock)
    const { unlockDate, dateObj } = useUnlockDate(startBlock, endBlock);

    const isUnlocked = useIsUnlocked(dateObj);
    console.log("Is unlocked: ", isUnlocked);

    async function claim(e: any) {
        e.preventDefault();
        console.log("ok");
    }

    return (
        <fieldset className="stk-g">
            <legend>Your KXA staked</legend>
            <div className="ins">
                <div className="in inm">
                    <label htmlFor="staked">Your total KXA staked</label>
                    <input type="text" name="staked" value={userStakedAmount} disabled />
                </div>
                <div className="in inx">
                    <div className="btm">
                        <button className="bt bt-nh" onClick={(e) => claim(e)} disabled={!isUnlocked}>
                            <span>
                                {!isUnlocked ? (
                                    <>
                                        <small>Unlock date</small>
                                        <strong>{unlockDate}</strong>
                                    </>
                                ) : (
                                    <strong>Claim</strong>
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
