import { useWeb3React } from "@web3-react/core";
import React, {useEffect, useState} from "react";
import RegisterAlphaService from "../../services/registerAlphaService";
import WalletService from "../../services/walletService";

export const AlphaRegister: React.FC = () => {
    const [contactDiscord, setContactDiscord] = useState<string>('');
    const [contactTelegram, setContactTelegram] = useState<string>('');
    const [contactEmail, setContactEmail] = useState<string>('');

    const [registerMessage, setRegisterMessage] = useState<string>();

    const { account } = useWeb3React();

    useEffect(() => {
        const fetchRegistration = async () => {
            const result = await RegisterAlphaService.get(account);
            if (result.discord) { setContactDiscord(result.discord); }
            if (result.telegram) { setContactTelegram(result.telegram); }
            if (result.email) { setContactEmail(result.email); }
        };

        fetchRegistration();
    }, [account, setContactDiscord, setContactTelegram, setContactEmail]);

    async function register(e: any) {
        e.preventDefault();

        let isLoggedIn = WalletService.verifySessionIntegrity(account || "");
        if (isLoggedIn) {
            const result = await RegisterAlphaService.register(contactDiscord, contactTelegram, contactEmail, account);
            if (result) {
                setRegisterMessage("Registered Successfully!");
            } else {
                setRegisterMessage(result as any);
            }
        } else {
            setRegisterMessage("Sign the message presented by your wallet to login.");
        }
    }

    return (
        <>
            <div className="app-c">
                <form className="fm">
                    <fieldset className="stk">
                        <legend>Register for Alpha now !</legend>
                        <div className="copy-block">
                            Congratulations, you’re whitelisted to receive NFT rewards and you’ll also get to be one of the first testers of the game.
                            We need to collect some information so we can invite you into our private Alpha user channels.
                        </div>
                        <div className="ins">
                            <div className="in inm">
                                <label htmlFor="contact-discord">
                                    Discord Username
                                </label>
                                <input
                                    type="text"
                                    name="contact-discord"
                                    value={contactDiscord}
                                    onChange={(e) => {
                                        setContactDiscord(e.target.value);
                                    }}
                                    aria-describedby="contact-discord"
                                />
                            </div>
                            <div className="in inm">
                                <label htmlFor="contact-telegram">
                                    Telegram Username
                                </label>
                                <input
                                    type="text"
                                    name="contact-telegram"
                                    value={contactTelegram}
                                    onChange={(e) => {
                                        setContactTelegram(e.target.value);
                                    }}
                                    aria-describedby="contact-telegram"
                                />
                            </div>
                            <div className="in inm">
                                <label htmlFor="contact-email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="contact-email"
                                    value={contactEmail}
                                    onChange={(e) => {
                                        setContactEmail(e.target.value);
                                    }}
                                    aria-describedby="contact-email"
                                />
                            </div>
                            <div className="in inx">
                                <div className="btm">
                                    <button className="bt bt-p" onClick={(e) => register(e)}>
                                        <span>Register</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        { registerMessage &&
                        <div className="copy-block" style={{paddingTop: 20}}>
                            <div className="alert base">{ registerMessage }</div>
                        </div>
                        }
                    </fieldset>
                </form>
            </div>
        </>
    );
};
