import classes from './Header.module.css';
function Header() {
    return (
        <>
            <header className={`${classes.navBar}`}>
                <div className={`${classes.headerWrapper}`}>
                    <div className={`${classes.superHeader}`}>
                        <div className={`${classes.contentWraper}`}>
                            <div className={`${classes.navBarHeader}`}>
                                <div className={`${classes.navBarBrand}`}>

                                </div>
                                <div className={`${classes.searchContainer}`}>
                                <div className={`${classes.headerSearchWrapper}`}>
                                    <input type="text" className={`${classes.headerSearchInput}`} placeholder="Search for products, brands and more" />
                                </div>
                                </div>
                                <div className={`${classes.navBarSignForm}`}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;