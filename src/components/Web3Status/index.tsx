import React, { useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { NetworkContextName } from "../../constants/misc";
import { shortenAddress } from "../../utils";
import { Wallet } from "../Wallet";
import WalletService from "../../services/walletService";
import { CHAIN_INFO } from "../../constants/chain";

const Web3Status: React.FC = () => {
    const { active, error, account, library } = useWeb3React();
    const contextNetwork = useWeb3React(NetworkContextName);
    const defaultChain = Number(process.env.REACT_APP_DEFAULT_CHAIN_ID) || 56;

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem("session") as string) || "";
        if (!!(library && account) && session === "") {
            library
                .getSigner(account)
                .signMessage(process.env.REACT_APP_SIGN_KEY)
                .then(async (signature: any) => {
                    await WalletService.authWallet(account, signature);
                })
                .catch((error: any) => {
                    console.log("Failure!" + (error && error.message ? `\n\n${error.message}` : ""));
                });
        }
    }, [account, library]);

    return (
        <>
            <div className="r">
                {account && <div className="bt">{shortenAddress(account)}</div>}
                {error && <div className="bt">{error instanceof UnsupportedChainIdError ? `${CHAIN_INFO[defaultChain].label}` : Error}</div>}
                {(contextNetwork.active || active) && !account && <Wallet />}
            </div>
        </>
    );
};

export default Web3Status;
