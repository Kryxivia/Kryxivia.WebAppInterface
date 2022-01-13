import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { useStakingContract } from "../../hooks/useContract";
import { CONTRACT_STAKING } from "../StakeKxa";
import { AlphaRegister } from "../AlphaRegister";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function useGetValidatedState(account: string | undefined | null) {
    const [isValidated, setIsValidated] = useState(false);
    const stakingContract = useStakingContract(CONTRACT_STAKING);
    const { data, error } = useSWR(`${process.env.REACT_APP_MANAGER_URL}api/v1/alpha/winners`, fetcher);

    useEffect(() => {
        const fetchAccess = async () => {
            const whitelisted = data.find((x: any) => x.publicKey === account);
            // if (stakingContract == null || account === undefined || account == null) {
            //     return;
            // }
            // const result = await stakingContract.getValidatedState(account);
            setIsValidated(whitelisted !== undefined);
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
