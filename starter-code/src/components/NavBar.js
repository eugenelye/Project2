import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = () => {
    return <header className={styles.navbar}>
    <nav>
        <ul>
            <li>
                <NavLink to= '/' activeClassName={(navData) => (navData.isActive ? styles.active : "")}>Home Page</NavLink>
            </li>
            <li>
                <NavLink to = '/Stocks' className={(navData) => (navData.isActive ? styles.active : "")}>Stocks</NavLink>
            </li>
            <li>
                <NavLink to= '/Forex' activeClassName={(navData) => (navData.isActive ? styles.active : "")}>Forex</NavLink>
            </li>
            <li>
                <NavLink to= '/Cryptocurrency' activeClassName={(navData) => (navData.isActive ? styles.active : "")}>Cryptocurrency</NavLink>
            </li>
        </ul>
    </nav>
 </header>
};

export default NavBar;

{/* <ul>
<li>
    <NavLink to = '/page-one' activeClassName={styles.active}>Page One</NavLink>
</li>
<li>
    <NavLink to= '/page-two' activeClassName={styles.active}>Page Two</NavLink>
</li>
<li>
    <NavLink to= '/page-three' activeClassName={styles.active}>Page Three</NavLink>
</li>
</ul> */}