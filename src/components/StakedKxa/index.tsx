import React from "react";

export const StakedKxa: React.FC = () => {

    async function claim() {
        console.log("ok")
    }

    return (
        <fieldset className="stk-g">
            <legend>Your KXA staked</legend>
            <div className="ins">
                <div className="in inm">
                    <label htmlFor="staked">Your total KXA staked</label>
                    <input type="text" name="staked" defaultValue={150.0} disabled />
                </div>
                <div className="in inx">
                    <div className="btm">
                        <button className="bt bt-nh" onClick={claim}>
                            <span>
                                <small>Unlock date</small> <strong>December 29, 2021</strong>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
