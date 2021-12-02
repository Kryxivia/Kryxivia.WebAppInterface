import React from "react";
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
            </main>
            <img src={IllusTop} className="top-h" alt="Kryxivia" />
            <img src={IllusTopR} className="top-h-r" alt="Kryxivia" />
        </>
    );
};

export default Layout;
