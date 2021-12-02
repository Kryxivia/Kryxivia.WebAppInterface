import React from "react";
import Kxa from "../../assets/img/kxa.png";
import Lock from "../../assets/img/lock.png";
import IllusTop from "../../assets/img/top-h.png";
import IllusTopR from "../../assets/img/top-h-r.png";
import { Header } from "../../components/Header";
import { Outlet } from "react-router";
import { AlphaState } from "../AlphaState";
import { useWeb3React } from "@web3-react/core";

const Layout = () => {
    const { account } = useWeb3React();
    return (
        <>
            <Header />
            <main id="m">
                <div id="app">
                {account && <AlphaState />}
                    <div className="app-c">
                        <Outlet />
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
};

export default Layout;
