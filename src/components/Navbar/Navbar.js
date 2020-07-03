import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import StoreContext from "../../StoreContext";

const Navbar = (props) => {

    return <StoreContext.Consumer>
        {
            store =>{
                let friends = store.getState().navBarPage.friends.map(m => <Friend imgUrl={m.url} id={m.id}/>)
                return (
                    <nav className={classes.nav}>
                        <div className={`${classes.item} ${classes.active}`}>
                            <NavLink to={'/profile'} activeClassName={classes.activeLink}>Profile</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to={'/messages'} activeClassName={classes.activeLink}>Messages</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to={'/news'} activeClassName={classes.activeLink}>News</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to={'/music'} activeClassName={classes.activeLink}>Music</NavLink>
                        </div>
                        <div className={classes.item}>
                            <NavLink to={'/settings'} activeClassName={classes.activeLink}>Settings</NavLink>
                        </div>

                        <div className={`${classes.item} ${classes.listFriend}`}>
                            <div className={classes.textNavBar}>
                                <NavLink to={'/friends'} activeClassName={classes.activeLink}>Friends</NavLink>
                            </div>

                            {friends}

                        </div>


                    </nav>)
            }
        }
    </StoreContext.Consumer>

}

export default Navbar;