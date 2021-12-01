import React from "react";

export const StakingStats: React.FC = () => {
    return (
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
    );
};
