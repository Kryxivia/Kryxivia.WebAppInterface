import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import { AlphaRegister } from "../AlphaRegister";

interface AlphaStateProps {
    winners: {publicKey: string}[]
}

function useGetValidatedState(account: string | undefined | null, winners: {publicKey: string}[]) {
    const [isValidated, setIsValidated] = useState(false);

    useEffect(() => {
        const fetchAccess = async () => {
            if (winners === null || winners === undefined) {
                return;
            }
            const winner = winners.find((x: any) => x.publicKey.toLowerCase() === (account || "").toLowerCase());
            let whitelisted = !!winner;
            setIsValidated(whitelisted);
            return whitelisted;
        };

        fetchAccess();
    }, [account, winners, setIsValidated]);

    return isValidated;
}

export const AlphaState: React.FC<AlphaStateProps> = ({winners}) => {
    const { account } = useWeb3React();
    const hasAccess = useGetValidatedState(account, winners);

    return (
        <>
            {account && hasAccess && <div>
                <div className="alert success">YOU HAVE ALPHA ACCESS</div>
                <AlphaRegister />
            </div>
            }
            {account && !hasAccess && <div className="alert base">YOU DO NOT HAVE ALPHA ACCESS</div>}
        </>
    );
};
