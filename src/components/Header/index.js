import React from 'react';
import './style.scss';
import logoAcessaBr from '../../images/logo-acessaBR.png'
import logoEbac from '../../images/logo-ebac.png'

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <span className="header__city">
                    / Estância Velha - RS
                </span>
                <img src={logoAcessaBr} alt="Logo AcessaBR" />
            </div>
            <div className="header__logo--ebac">
                <span className="header__span">
                    Apoio:
                </span>
                <img src={logoEbac} alt="Logo EBAC" />
            </div>
        </header>
    )
}

export default Header;