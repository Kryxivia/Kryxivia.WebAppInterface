import { useEffect, useState } from "react";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { ReactComponent as MetamaskIcon } from "../../assets/img/metamask.svg";
import { WalletPendingView } from "../WalletPendingView";
import { injected } from "../../connectors";

const WALLET_VIEWS = {
    OPTIONS: "options",
    OPTIONS_SECONDARY: "options_secondary",
    ACCOUNT: "account",
    PENDING: "pending",
};

export const Wallet: React.FC = () => {
    const { activate, error } = useWeb3React();

    const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

    const [pendingError, setPendingError] = useState<boolean>();

    useEffect(() => {
        setPendingError(false);
        setWalletView(WALLET_VIEWS.ACCOUNT);
    }, []);

    const tryActivation = async () => {
        setWalletView(WALLET_VIEWS.PENDING);

        injected &&
            activate(injected, undefined, true).catch((error) => {
                if (error instanceof UnsupportedChainIdError) {
                    activate(injected);
                } else {
                    setPendingError(true);
                }
            });
    };

    function getContent() {
        if (error) {
            return (
                <div>
                    <h2>{error instanceof UnsupportedChainIdError ? <>Wrong Network</> : <>Error connecting</>}</h2>
                    <div>
                        {error instanceof UnsupportedChainIdError ? (
                            <h5>Please connect to the appropriate Ethereum network.</h5>
                        ) : (
                            <h5>Error connecting. Try refreshing the page.</h5>
                        )}
                    </div>
                </div>
            );
        }

        return walletView === WALLET_VIEWS.PENDING ? (
            <WalletPendingView connector={injected} error={pendingError} setPendingError={setPendingError} tryActivation={tryActivation} />
        ) : (
            <button className="bt bt-p" onClick={tryActivation}>
                <span>Connect with Metamask</span>
                <MetamaskIcon />
            </button>
        );
    }

    return <>{getContent()}</>;
};
