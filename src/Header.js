import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Header() {
    const [state, dispatch] = useStateValue()

    const login = () => {
        if (state.user) {
            auth.signOut()
        }
    }

    console.log(state.basket)
    return (
        <div className="header">

            {/* Logo on the left*/}

            <Link to="/" className="header_logo">
                <img
                    className="header_logoImg"
                    src="https://img.icons8.com/color/452/firebase.png"
                    alt=""
                />
                <div className="header_logoText">Interiornica</div>
            </Link>

            {/*Search bar*/}

            <div className="header_search">
                <input type="text" className="header_searchbar" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*Navigation*/}
            <div className="header_nav">

                <Link to={!state.user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne">Hello, {state.user?.email}</span>
                        <span className="header_optionLineTwo">{state.user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>


                {/*Basket*/}

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />

                        <span className="header_optionLineTwo header_basketCount">
                            {state.basket?.length}
                        </span>
                    </div>
                </Link>

            </div>


        </div>
    )
}

export default Header
