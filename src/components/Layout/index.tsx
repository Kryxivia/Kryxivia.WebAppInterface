import React from "react";
import IllusTop from "../../assets/img/top-h.png";
import IllusTopR from "../../assets/img/top-h-r.png";
import { Header } from "../../components/Header";
import { Outlet } from "react-router";
import { AlphaState } from "../AlphaState";
import { useWeb3React } from "@web3-react/core";
import { defaultChain } from "../Web3Status";
import { CHAIN_INFO } from "../../constants/chain";

const Layout = () => {
    const { account, chainId } = useWeb3React();
    return (
        <>
            <Header />
            <main id="m">
                <div id="app">
                    {account && chainId && defaultChain === (chainId as number) ? (
                        <AlphaState />
                    ) : (
                        <div className="alert base">Please switch to {CHAIN_INFO[defaultChain].label}</div>
                    )}
                    <div className="app-c">
                        <Outlet />
                    </div>
                    <div className="copy">Kryxivia © 2021. All rights reserved.</div>
                </div>
            </main>
            <img src={IllusTop} className="top-h" alt="Kryxivia" />
            <img src={IllusTopR} className="top-h-r" alt="Kryxivia" />
        </>
    );
};

export default Layout;
