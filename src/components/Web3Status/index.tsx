import React, { useEffect } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { ABIs, NetworkContextName, TOKENS_BY_NETWORK } from "../../constants/misc";
import { shortenAddress } from "../../utils";
import { Wallet } from "../Wallet";
import WalletService from "../../services/walletService";
import { CHAIN_INFO } from "../../constants/chain";
import { TokenBalance } from "../TokenBalance";
import { EthSWRConfig } from "ether-swr";

const Web3Status: React.FC = () => {
    const { active, error, account, library, chainId } = useWeb3React();
    const contextNetwork = useWeb3React(NetworkContextName);
    const defaultChain = Number(process.env.REACT_APP_DEFAULT_CHAIN_ID);

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
        <div className="r">
            {account && chainId && (
                <EthSWRConfig value={{ web3Provider: library, ABIs: new Map(ABIs(chainId)) }}>
                    <div className="bt" style={{ marginRight: "1rem" }}>
                        {TOKENS_BY_NETWORK[chainId].map((token) => (
                            <TokenBalance key={token.address} {...token} />
                        ))}
                    </div>
                    <div className="bt bt-has">{shortenAddress(account)}</div>
                </EthSWRConfig>
            )}
            {error && <div className="bt">{error instanceof UnsupportedChainIdError ? `${CHAIN_INFO[defaultChain].label}` : Error}</div>}
            {(contextNetwork.active || active) && !account && <Wallet />}
        </div>
    );
};

export default Web3Status;
