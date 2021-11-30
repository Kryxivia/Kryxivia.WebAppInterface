import React from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";

interface WalletPendingViewProps {
    connector?: AbstractConnector;
    error?: boolean;
    setPendingError: (error: boolean) => void;
    tryActivation: (connector: AbstractConnector) => void;
}

export const WalletPendingView: React.FC<WalletPendingViewProps> = ({ connector, error = false, setPendingError, tryActivation }) => {

    return (
        <>
            <div>
                {error ? (
                        <button className="bt"
                        style={{marginLeft: '.75rem'}}
                            onClick={() => {
                                setPendingError(false);
                                connector && tryActivation(connector);
                            }}
                        >Error connecting - Try Again <span aria-hidden="true">&rarr;</span>
                        </button>
                ) : (
                    <div className="bt">
                        Initializing...
                    </div>
                )}
            </div>
        </>
    );
};
