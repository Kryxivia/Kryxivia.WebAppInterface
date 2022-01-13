import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useStakingContract } from "../../hooks/useContract";
import { CONTRACT_STAKING } from "../StakeKxa";
import { AlphaRegister } from "../AlphaRegister";

function useGetValidatedState(account: string | undefined | null) {
    const [isValidated, setIsValidated] = useState(false);
    const stakingContract = useStakingContract(CONTRACT_STAKING);

    useEffect(() => {
        const fetchAccess = async () => {
            if (stakingContract == null || account === undefined || account == null) {
                return;
            }
            const result = await stakingContract.getValidatedState(account);
            setIsValidated(result);
        };

        fetchAccess();
    }, [account, setIsValidated, stakingContract]);

    return isValidated;
}

export const AlphaState = () => {
    const { account } = useWeb3React();
    const hasAccess = useGetValidatedState(account);

    return (
        <>
            {account && hasAccess && <div>
                <div className="alert success">YOU HAVE ACCESS TO ALPHA.</div>
                <AlphaRegister />
            </div>
            }
            {account && !hasAccess && <div className="alert base">YOU DO NOT HAVE ACCESS TO ALPHA.</div>}
        </>
    );
};
