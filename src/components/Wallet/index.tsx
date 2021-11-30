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
    // important that these are destructed from the account-specific web3-react context
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { active, account, connector, activate, error, library } = useWeb3React();

    const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

    const [pendingError, setPendingError] = useState<boolean>();

    // always reset to account view
    useEffect(() => {
        setPendingError(false);
        setWalletView(WALLET_VIEWS.ACCOUNT);
    }, []);

    /* const activePrevious = usePrevious(active);
    const connectorPrevious = usePrevious(connector);
    useEffect(() => {
        if ((active && !activePrevious) || (connector && connector !== connectorPrevious && !error)) {
            setWalletView(WALLET_VIEWS.ACCOUNT);
        }
    }, [setWalletView, active, error, connector, activePrevious, connectorPrevious]); */

    /* useEffect(() => {
        console.log('acc:', account)
        console.log('lib:', library)
        if (!!(library && account)) {
          library
            .getSigner(account)
            .signMessage(process.env.REACT_APP_SIGN_KEY)
            .then(async (signature: string) => {
              window.alert(signature)
              const result = await WalletService.authWallet(account, signature)
              if (result) {
                console.log(result)
              }
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .catch((error: any) => {
                console.log(error)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [account, library]) */

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
        /* if (account && walletView === WALLET_VIEWS.ACCOUNT) {
            return <div className="bt">{shortenAddress(account)}</div>
        } */

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
