import React from 'react'
import Web3Status from '../Web3Status';
import Logo from "../../assets/img/logo-kryxivia.png";
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          className={match ? "bt bt-act" : "bt"}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export const Header: React.FC = () => {

        return (
            <header id="h">
                <div className="l">
                    <Link to="/" className="lg" title="Kryxivia">
                        <img src={Logo} alt="Kryxivia" />
                    </Link>
                    <nav id="n">
                        <ul>
                            <li>
                                <CustomLink to="/">
                                    <span>Staking</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M437.333 192h-32v-42.667C405.333 66.99 338.344 0 256 0S106.667 66.99 106.667 149.333V192h-32C68.771 192 64 196.771 64 202.667v266.667C64 492.865 83.135 512 106.667 512h298.667C428.865 512 448 492.865 448 469.333V202.667c0-5.896-4.771-10.667-10.667-10.667zM287.938 414.823c.333 3.01-.635 6.031-2.656 8.292a10.67 10.67 0 0 1-7.948 3.552h-42.667a10.67 10.67 0 0 1-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51c-10.927-7.948-17.458-20.521-17.458-34.313 0-23.531 19.135-42.667 42.667-42.667s42.667 19.135 42.667 42.667c0 13.792-6.531 26.365-17.458 34.313l6.728 60.51zM341.333 192H170.667v-42.667C170.667 102.281 208.948 64 256 64s85.333 38.281 85.333 85.333V192z" />
                                    </svg>
                                </CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/mint">
                                    <span>Mint</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 296.473 296.473">
                                        <path d="M292.676 114.759l-1.827-7.104a147.15 147.15 0 0 0-6.026-17.118l-2.968-6.566-1.6-3.219C255.7 32.811 205.8 0 148.237 0h-.001-.001C90.673 0 40.772 32.811 16.218 80.751l-1.6 3.219c-1.561 3.24-3.008 6.546-4.335 9.912a146.99 146.99 0 0 0-4.659 13.772c-.666 2.346-1.275 4.714-1.827 7.104C1.314 125.517.001 136.723.001 148.236s1.313 22.719 3.796 33.478c.552 2.391 1.161 4.759 1.827 7.104 1.332 4.689 2.89 9.285 4.659 13.773 1.327 3.366 2.774 6.672 4.335 9.912l1.6 3.219c24.555 47.94 74.455 80.751 132.018 80.751h.001.001c57.563 0 107.463-32.81 132.018-80.751l1.6-3.219c1.041-2.16 2.03-4.35 2.968-6.566 2.345-5.542 4.361-11.256 6.026-17.118.666-2.346 1.275-4.714 1.827-7.104 2.483-10.759 3.796-21.965 3.796-33.478s-1.314-22.719-3.797-33.478zm-77.94 33.477l-66.5 87.334-66.5-87.334 66.5-87.334 66.5 87.334z" />
                                    </svg>
                                </CustomLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Web3Status />
            </header>
        );
}