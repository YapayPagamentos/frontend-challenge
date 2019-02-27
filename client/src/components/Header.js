import React, { Component } from 'react'
import logo from '../assets/img/logo.svg'

class Header extends Component {
    render() {
        return (
            <div className="header__content">
                <h1>
                    <a href="https://www.yapay.com.br">
                        { <img src={logo} alt="Yapay"/> }
                    </a>
                </h1>
            </div>
        );
    }

}

export default Header
