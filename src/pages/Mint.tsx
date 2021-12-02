import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Slot from "../assets/img/rw.png";
import { Rewards } from "../components/Rewards";

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
    const { account } = useWeb3React();
    const { data, error } = useSWR(`${process.env.REACT_APP_MANAGER_URL}api/v1/alpha/winners`, fetcher);

    const hasAccess = useHasAccess(account, data);

    function mint(e: any) {
        e.preventDefault();
        console.log("mint");
    }

    if (error) return <>An error has occurred.</>;
    if (!data) return <>Loading...</>;
    console.log(hasAccess);
    return (
        <>
            {account && hasAccess && <div className="alert">YOU HAVE ACCESS TO ALPHA.</div>}
            {account && !hasAccess && <div className="alert">YOU DO NOT HAVE ACCESS TO ALPHA.</div>}
            <div className="app-c">
                <h1>
                    Get my <strong>NFT Rewards</strong> of Kryxivia !
                </h1>
                <div className="intro">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iste praesentium alias dolores a accusamus harum, totam quaerat
                        dolore. Quod facilis id est expedita ipsum nobis dolor, nihil mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <h2>Discover NFT Rewards on Kryxivia !</h2>
                <Rewards />
                <h2>Let's go to my first Kryxivia NFT !</h2>
                <div className={!hasAccess ? "" : "btmi"}>
                    {!account && <p className="p">Connect your wallet to mint</p>}
                    {account && !hasAccess && (
                        <button className={!hasAccess ? "bt" : "bt bt-p"} onClick={(e) => mint(e)} disabled={!hasAccess}>
                            <span>You're not part of the alpha</span>
                        </button>
                    )}
                    {account && hasAccess && (
                        <button className={!hasAccess ? "bt" : "bt bt-p"} onClick={(e) => mint(e)} disabled={!hasAccess}>
                            <span>Mint my NFT</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                                <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};
