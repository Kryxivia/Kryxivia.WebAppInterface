import React from 'react'
import Tier1 from "../../assets/img/Tier_1.mp4";
import Tier2 from "../../assets/img/Tier_2.mp4";
import Tier3 from "../../assets/img/Tier_3.mp4";
import Tier4 from "../../assets/img/Tier_4.mp4";
import Tier5 from "../../assets/img/Tier_5.mp4";
import Tier6 from "../../assets/img/Tier_6.mp4";

export const Rewards = () => {
        return (
            <ul className="rw">
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier1} />
                            </video>
                        </div>
                    </li>
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier2} />
                            </video>
                        </div>
                    </li>
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier3} />
                            </video>
                        </div>
                    </li>
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier4} />
                            </video>
                        </div>
                    </li>
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier5} />
                            </video>
                        </div>
                    </li>
                    <li>
                        <div>
                            <video loop autoPlay muted>
                                <source src={Tier6} />
                            </video>
                        </div>
                    </li>
                </ul>
        );
}