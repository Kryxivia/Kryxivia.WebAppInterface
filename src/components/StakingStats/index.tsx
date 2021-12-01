import { formatUnits } from "ethers/lib/utils";
import React, { useEffect, useState } from "react";
import { useStakingContract, useTokenContract } from "../../hooks/useContract";
import { CONTRACT_STAKING, CONTRACT_TOKEN } from "../StakeKxa";

function useTotalLocked() {
    const [amount, setAmount] = useState("");
    const tokenContract = useTokenContract(CONTRACT_TOKEN);

    useEffect(() => {
        const fetchData = async () => {
            if (tokenContract == null) {
                return;
            }
            const result = await tokenContract.balanceOf(CONTRACT_STAKING);
            setAmount(parseFloat(formatUnits(result, 18)).toFixed());
        };

        fetchData();
    }, [setAmount, tokenContract]);

    return amount;
}

/* function useTotalStakers() {
    const [amount, setAmount] = useState("");
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchData = async () => {
            if (stakingContract == null) {
                return;
            }
            const result = await stakingContract._totalLocked();
            setAmount(parseFloat(formatUnits(result, 18)).toFixed());
        };

        fetchData();
    }, [setAmount, stakingContract]);

    return amount;
} */

function useTotalStakedValue(totalLocked: string, tokenPrice: number) {
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            
            setAmount(Number(totalLocked) * tokenPrice);
        };

        fetchData();
    }, [setAmount, tokenPrice, totalLocked]);

    return amount;
}

export const StakingStats: React.FC = () => {

    const totalLocked = useTotalLocked();
    const tokenPrice = 0.015
    const totalStakedValue = useTotalStakedValue(totalLocked, tokenPrice)

    return (
        <fieldset>
            <legend>Staking informations</legend>
            <div className="ins">
                <div className="in">
                    <label htmlFor="total-kxa-user">Total of users staking KXA</label>
                    <input type="text" name="total-kxa-user" value={1987} disabled />
                </div>
                <div className="in">
                    <label htmlFor="total-kxa-staked">Total token KXA staked</label>
                    <input type="text" name="total-kxa-staked" value={totalLocked} disabled />
                </div>
                <div className="in">
                    <label htmlFor="total-kxa-staked-value">Total KXA $ staked</label>
                    <input type="number" name="total-kxa-staked-value" value={totalStakedValue} disabled />
                </div>
            </div>
        </fieldset>
    );
};
