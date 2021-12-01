import React from "react";
import Slot from "../assets/img/rw.png"

export const Mint = () => {
    return (
        <>
            <div className="alert">YOU HAVE ACCESS TO ALPHA.</div>
            <div className="app-c">
                <h1>
                    Get my <strong>NFT Rewards</strong> of Kryxivia !
                </h1>
                <div className="intro">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="p">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iste praesentium alias dolores a accusamus harum, totam quaerat
                        dolore. Quod facilis id est expedita ipsum nobis dolor, nihil mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <h2>Let's go to my first Kryxivia NFT !</h2>
                <div className="btmi">
                    <a href="#a" className="bt bt-p">
                        <span>Mint my NFT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                            <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};
