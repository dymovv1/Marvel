import styles from './header.module.scss';
import logo from '../../assets/img/logo.svg';
import { Link } from "react-router-dom";
import { path } from "../../Routes/path.js";

function Header() {
    return (
        <header className={styles['header']}>
            <div className="container">
                <div className={styles['header-body']}>
                    <div>
                        <a href="/">
                            <img className={styles['header-logo']} src={logo} alt={logo}/>
                        </a>
                    </div>

                    <div>
                        <nav className={styles['header-nav']}>
                            <ul className={styles['header-navigation']}>
                                <li className={styles['navigation-item']}>
                                    <Link to={path.home}> HOME </Link>
                                </li>
                                <li className={styles['navigation-item']}>
                                    <Link to={path.about}> ABOUT </Link>
                                </li>
                                <li className={styles['navigation-item']}>
                                    <Link to={path.characters}> CHARACTERS </Link>
                                </li>
                                <li className={styles['navigation-item']}>
                                    <Link to={path.contact}> CONTACTS </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
