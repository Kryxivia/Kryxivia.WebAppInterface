import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Rewards } from "../components/Rewards";
import { CHAIN_INFO } from "../constants/chain";
import MintService from "../services/mintService";

export type Winners = Winner[];

export interface Winner {
    publicKey: string;
    id: Id;
    createdAt: string;
    updatedAt: string;
    idAsString: string;
}

export interface Id {
    timestamp: number;
    machine: number;
    pid: number;
    increment: number;
    creationTime: string;
}

export function useHasAccess(account: string | null | undefined, winners: Winners) {
    const [hasAccess, setHasAccess] = useState<boolean>(false);

    useEffect(() => {
        const checkAccess = async () => {
            if (account === undefined || account == null || winners === undefined) {
                setHasAccess(false);
                return;
            }
            winners.map((winner) => {
                if (account === winner.publicKey) {
                    setHasAccess(true);
                    return true;
                } else {
                    setHasAccess(false);
                    return false;
                }
            });
        };

        checkAccess();
    }, [account, winners]);

    return hasAccess;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Mint = () => {
    const { account, chainId } = useWeb3React();
    const [mintTx, setMintTx] = useState<string>();
    const [mintError, setMintError] = useState<string>();
    const { data, error } = useSWR(`${process.env.REACT_APP_MANAGER_URL}api/v1/alpha/winners`, fetcher);

    const hasAccess = useHasAccess(account, data);

    const resetFeedback = () => {
        setMintError("");
        setMintTx("");
    };

    async function doMint(e: any) {
        resetFeedback();
        e.preventDefault();
        const result = await MintService.claimReward();
        if (result.txHash) {
            setMintTx(result.txHash);
        } else {
            setMintError(result as any);
        }
    }

    if (error) return <>An error has occurred.</>;
    if (!data) return <>Loading...</>;
    return (
        <>
            <h1>
                Get my <strong>NFT Rewards</strong> of Kryxivia Fireworks!
            </h1>
            <div className="intro">
                <p>1000 rare and limited Kryxivia Fireworks to be used in-game.</p>
            </div>
            <div className="p">
                <p>
                Kryxivia Fireworks are in-game items that you can use in the Kryxivia world, they produce amazing animations in the City that everyone will surely notice, the castable spell is reusable. This is an Alpha limited NFT.<br/><br/>
                Once you are whitelisted for the alpha access, come here and mint your Kryxivia Firework for free, if they are not all minted yet!
                <br/>By claiming your rewards, you will have a random chance to have one of the below level of Purity on your Kryxivia Firework.
                <br/>
                Six differents Kryxivia Fireworks exist:<br/><br/>
                <ul>
                    <li>• Kryxivia Fireworks - 20% - Only 350 to be looted</li>
                    <li>• Kryxivia Fireworks - 40% - Only 250 to be looted</li>
                    <li>• Kryxivia Fireworks - 60% - Only 200 to be looted</li>
                    <li>• Kryxivia Fireworks - 80% - Only 150 to be looted</li>
                    <li>• Kryxivia Fireworks - 90% - Only 40 to be looted</li>
                    <li>• Kryxivia Fireworks - 100%- Only 10 to be looted</li>
                </ul>

                </p>
            </div>
            <h2>Discover Alpha NFT Rewards on Kryxivia !</h2>
            <Rewards />
            <h2>Let's go to my first Kryxivia NFT</h2>
            <div className={!hasAccess ? "" : "btmi"}>
                {!account && <p className="p">Connect your wallet to mint</p>}
                {account && !hasAccess && (
                    <button className={!hasAccess ? "bt" : "bt bt-p"} onClick={(e) => doMint(e)} disabled={!hasAccess}>
                        <span>No rewards to claim</span>
                    </button>
                )}
                {account && hasAccess && (
                    <button className={!hasAccess ? "bt" : "bt bt-p"} onClick={(e) => doMint(e)} disabled={!hasAccess}>
                        <span>Mint my NFT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                            <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                        </svg>
                    </button>
                )}
            </div>
            {mintError && (
                <div className="notif danger">
                    <span>{mintError}</span>
                </div>
            )}
            {mintTx && chainId && (
                <div className="notif success">
                    Minted successfully ! {" "}
                    <a style={{ textDecoration: "underline" }} href={`${CHAIN_INFO[chainId].explorer}tx/${mintTx}`} target="_blank" rel="noreferrer">
                        View on BSCScan
                    </a>
                </div>
            )}
        </>
    );
};
