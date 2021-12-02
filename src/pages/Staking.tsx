import React from "react";
import { StakingStats } from "../components/StakingStats";
import { StakeKxa } from "../components/StakeKxa";
import { StakedKxa } from "../components/StakedKxa";
import { useWeb3React } from "@web3-react/core";
import useSWR from "swr";
import { Rewards } from "../components/Rewards";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Staking: React.FC = () => {
    const { account } = useWeb3React();

    const { data, error } = useSWR(`${process.env.REACT_APP_MANAGER_URL}api/v1/alpha/winners`, fetcher);

    if (error) return <>An error has occurred.</>;
    if (!data) return <>Loading...</>;
    return (
        <>
            <h1>
                Stake your <strong>KXA</strong> now and <strong>receive NFT Rewards</strong> !
            </h1>
            <div className="intro">
                <p>You need to stake to be eligible on test-net alpha release and win an unique NFT in Kryxivia.</p>
            </div>
            <div className="p">
                <p>
                    By locking at least 15,000 KXA in this smart-contract for a fixed duration of <i>1 month</i>, you will have the chance of winning an unique
                    NFT in the Kryxivia world and be selected to play the closed Alpha of Kryxivia.
                    <br />
                    <br />
                    We will select participants in the Alpha time by time with multiple batch when we judge that the Kryxivia Alpha is ready to accept more
                    players, which mean that just by staking in the contract get you the potential chance to join, we are selecting randomly and based on the
                    amount of KXA you stake: the more you decide to stake, the best chance you have to be selected.
                    <br />
                    <br />
                    As part of the Alpha test-net process, we will ask alpha players to report us bugs and issues found in-game through a google form (on-chain
                    BSC or off-chain), and we will give KXA as bounty rewards for participations.
                    <br />
                    <br />{" "}
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ⚠️ You can only stake a single time until it's unlocked, so select wisely the amount of KXA you decide to stake! ⚠️
                    </span>
                </p>
            </div>
            <h2>Discover NFT Rewards on Kryxivia !</h2>
            <Rewards />
            <h2>Stake your KXA Token</h2>
            <form className="fm">
                <StakingStats />
                {account && (
                    <>
                        <StakeKxa />
                        <StakedKxa />
                    </>
                )}
            </form>
            {!account && <p className="p">Connect your wallet to stake</p>}
        </>
    );
};

export default Staking;
