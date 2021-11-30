import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Web3ReactProvider } from "@web3-react/core";
import Web3ReactManager from "./components/Web3ReactManager";
import getLibrary from "./utils/getLibrary";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ethereum?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        web3?: any;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ReactManager>
                <App />
            </Web3ReactManager>
        </Web3ReactProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
