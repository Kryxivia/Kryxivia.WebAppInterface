import React from "react";
import "./assets/css/app.css";
import Logo from "./assets/img/logo-kryxivia.png";
import Kxa from "./assets/img/kxa.png";
import Lock from "./assets/img/lock.png";
import Slot from "./assets/img/rw.png";
import IllusTop from "./assets/img/top-h.png"
import IllusTopR from "./assets/img/top-h-r.png"

function App() {
    return (
        <>
            <header id="h">
                <div className="l">
                    <a href="#a" className="lg" title="Kryxivia">
                        <img src={Logo} alt="Kryxivia" />
                    </a>
                    <nav id="n">
                        <ul>
                            <li>
                                <a href="#a" className="bt">
                                    <span>Staking</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32C68.771 192 64 196.771 64 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667c0-5.896-4.771-10.667-10.667-10.667zM287.938 414.823c.333 3.01-.635 6.031-2.656 8.292a10.67 10.67 0 0 1-7.948 3.552h-42.667a10.67 10.67 0 0 1-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#a" className="bt">
                                    <span>Mint</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                                        <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="r">
                    {/* <a href="" class="bt bt-p"><span>Connect with Metamask</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.6 318.6" stroke-linejoin="round" xmlns:v="https://vecta.io/nano"><path d="M274.1 35.5l-99.5 73.9L193 65.8z" fill="#e2761b" stroke="#e2761b"/><g fill="#e4761b" stroke="#e4761b"><path d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3z"/><path d="M33.9 207.7L50.1 263l56.7-15.6-26.5-40.6zm69.7-69.5l-15.8 23.9 56.3 2.5-2-60.5z"/><path d="M214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z"/></g><path d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z" fill="#d7c1b3" stroke="#d7c1b3"/><path d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z" fill="#233447" stroke="#233447"/><path d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z" fill="#cd6116" stroke="#cd6116"/><path d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z" fill="#e4751f" stroke="#e4751f"/><path d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z" fill="#f6851b" stroke="#f6851b"/><path d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z" fill="#c0ad9e" stroke="#c0ad9e"/><path d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z" fill="#161616" stroke="#161616"/><path d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z" fill="#763d16" stroke="#763d16"/><path d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z" fill="#f6851b" stroke="#f6851b"/></svg></a> */}
                    <div className="bt">0x84ak58...894d</div>
                    <a href="#a" className="bt">
                        Logout
                    </a>
                </div>
            </header>
            <main id="m">
                <div id="app">
                    <div className="alert">YOU HAVE ACCESS TO ALPHA.</div>
                    <div className="app-c">
                        <h1>
                            Stake your <strong>KXA</strong> now and <strong>receive NFT Rewards</strong> !
                        </h1>
                        <div className="intro">
                            <p>You need to stake to participate in alpha release and win an unique NFT !</p>
                        </div>
                        <div className="p">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iste praesentium alias dolores a accusamus harum, totam
                                quaerat dolore. Quod facilis id est expedita ipsum nobis dolor, nihil mollitia. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                        <h2>Discover NFT Rewards on Kryxivia !</h2>
                        <ul className="rw">
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={Slot} alt="" />
                                </div>
                            </li>
                        </ul>
                        <h2>Stake your KXA Token</h2>
                        <form className="fm">
                            <fieldset>
                                <legend>Staking informations</legend>
                                <div className="ins">
                                    <div className="in">
                                        <label htmlFor="total-kxa-user">Total of users staking KXA</label>
                                        <input type="text" name="total-kxa-user" defaultValue={1987} disabled />
                                    </div>
                                    <div className="in">
                                        <label htmlFor="total-kxa-staked">Total token KXA staked</label>
                                        <input type="text" name="total-kxa-staked" defaultValue={1987} disabled />
                                    </div>
                                    <div className="in">
                                        <label htmlFor="total-kxa-staked-value">Total KXA $ staked</label>
                                        <input type="text" name="total-kxa-staked-value" defaultValue="487,523.025" disabled />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="stk">
                                <legend>Stake your KXA now !</legend>
                                <div className="ins">
                                    <div className="in inm">
                                        <label htmlFor="amount">
                                            Amount to stake <small>(min 150.0 KXA)</small>
                                        </label>
                                        <input type="text" name="amount" placeholder="150.0" />
                                    </div>
                                    <div className="in inx">
                                        <div className="btm">
                                            <a href="#a" className="bt bt-p">
                                                <span>Stake now </span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.6 318.6" strokeLinejoin="round">
                                                    <path d="M274.1 35.5l-99.5 73.9L193 65.8z" fill="#e2761b" stroke="#e2761b" />
                                                    <g fill="#e4761b" stroke="#e4761b">
                                                        <path d="M44.4 35.5l98.7 74.6-17.5-44.3zm193.9 171.3l-26.5 40.6 56.7 15.6 16.3-55.3z" />
                                                        <path d="M33.9 207.7L50.1 263l56.7-15.6-26.5-40.6zm69.7-69.5l-15.8 23.9 56.3 2.5-2-60.5z" />
                                                        <path d="M214.9 138.2l-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5l33.9 16.5-4.7-39.3z" />
                                                    </g>
                                                    <path
                                                        d="M211.8 247.4l-33.9-16.5 2.7 22.1-.3 9.3zm-105 0l31.5 14.9-.2-9.3 2.5-22.1z"
                                                        fill="#d7c1b3"
                                                        stroke="#d7c1b3"
                                                    />
                                                    <path d="M138.8 193.5l-28.2-8.3 19.9-9.1zm40.9 0l8.3-17.4 20 9.1z" fill="#233447" stroke="#233447" />
                                                    <path
                                                        d="M106.8 247.4l4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7l-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1l20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
                                                        fill="#cd6116"
                                                        stroke="#cd6116"
                                                    />
                                                    <path
                                                        d="M87.8 162.1l23.6 46-.8-22.9zm120.3 23.1l-1 22.9 23.7-46zm-64-20.6l-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0l-2.7 18 1.2 45 6.7-34.1z"
                                                        fill="#e4751f"
                                                        stroke="#e4751f"
                                                    />
                                                    <path
                                                        d="M179.8 193.5l-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3l.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
                                                        fill="#f6851b"
                                                        stroke="#f6851b"
                                                    />
                                                    <path
                                                        d="M180.3 262.3l.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
                                                        fill="#c0ad9e"
                                                        stroke="#c0ad9e"
                                                    />
                                                    <path
                                                        d="M177.9 230.9l-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
                                                        fill="#161616"
                                                        stroke="#161616"
                                                    />
                                                    <path
                                                        d="M278.3 114.2l8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
                                                        fill="#763d16"
                                                        stroke="#763d16"
                                                    />
                                                    <path
                                                        d="M267.2 153.5l-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3l-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4l3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
                                                        fill="#f6851b"
                                                        stroke="#f6851b"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="stk-g">
                                <legend>Your KXA staked</legend>
                                <div className="ins">
                                    <div className="in inm">
                                        <label htmlFor="staked">Your total KXA staked</label>
                                        <input type="text" name="staked" defaultValue={150.0} disabled />
                                    </div>
                                    <div className="in inx">
                                        <div className="btm">
                                            <a href="#a" className="bt bt-nh">
                                                <span>
                                                    <small>Unlock date</small> <strong>December 29, 2021</strong>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
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
