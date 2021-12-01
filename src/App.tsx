import React from "react";
import "./assets/css/app.css";
import Logo from "./assets/img/logo-kryxivia.png";
import Kxa from "./assets/img/kxa.png";
import Lock from "./assets/img/lock.png";
import Nft1 from "./assets/img/nft_1.gif";
import IllusTop from "./assets/img/top-h.png";
import IllusTopR from "./assets/img/top-h-r.png";
import Web3Status from "./components/Web3Status";
import { StakingStats } from "./components/StakingStats";
import { StakeKxa } from "./components/StakeKxa";
import { StakedKxa } from "./components/StakedKxa";
import { useWeb3React } from "@web3-react/core";

function App() {
    const { account } = useWeb3React();

    return (
        <>
            <header id="h">
                <div className="l">
                    <a href="staking.html" className="lg" title="Kryxivia">
                        <img src={Logo} alt="Kryxivia" />
                    </a>
                    <nav id="n">
                        <ul>
                            <li>
                                <a href="staking.html" className="bt bt-act">
                                    <span>Staking</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32C68.771 192 64 196.771 64 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667c0-5.896-4.771-10.667-10.667-10.667zM287.938 414.823c.333 3.01-.635 6.031-2.656 8.292a10.67 10.67 0 0 1-7.948 3.552h-42.667a10.67 10.67 0 0 1-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="mint.html" className="bt">
                                    <span>Mint</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                                        <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Web3Status />
            </header>
            <main id="m">
                <div id="app">
                    <div className="alert">YOU HAVE ACCESS TO ALPHA.</div>
                    <div className="app-c">
                        <h1>
                            Stake your <strong>KXA</strong> now and <strong>receive NFT Rewards</strong> !
                        </h1>
                        <div className="intro">
                            <p>You need to stake to be eligible on test-net alpha release and win an unique NFT in Kryxivia.</p>
                        </div>
                        <div className="p">
                            <p>
                                By locking at least 15,000 KXA in this smart-contract for a fixed duration of <i>1 month</i>, you will have the chance of
                                winning an unique NFT in the Kryxivia world and be selected to play the closed Alpha of Kryxivia.
                                <br />
                                <br />
                                We will select participants in the Alpha time by time with multiple batch when we judge that the Kryxivia Alpha is ready to
                                accept more players, which mean that just by staking in the contract get you the potential chance to join, we are selecting
                                randomly and based on the amount of KXA you stake: the more you decide to stake, the best chance you have to be selected.
                                <br />
                                <br />
                                As part of the Alpha test-net process, we will ask alpha players to report us bugs and issues found in-game through a google
                                form (on-chain BSC or off-chain), and we will give KXA as bounty rewards for participations.
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
                        <ul className="rw">
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Nft1} alt="" />
                                </div>
                            </li>
                        </ul>
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
                    </div>
                    <div className="copy">Kryxivia.io © 2021-2022</div>
                </div>
                <div className="m-r">
                    <div>
                        <img src={Kxa} alt="KXA • Kryxivia" className="kxa" />
                        <img src={Lock} alt="Staking" className="lock" />
                    </div>
                </div>
            </main>
            <img src={IllusTop} className="top-h" alt="Kryxivia" />
            <img src={IllusTopR} className="top-h-r" alt="Kryxivia" />
        </>
    );
}

export default App;
