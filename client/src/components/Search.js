import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <div className="search__box">
                <hr/>
                <h2 className="header__cadastro">Ou pesquise um usuário</h2>
                <input type="text" name="cidade" placeholder="Pesquise pelo nome" id="name-user" />
            </div>
        );
    }

}

export default Search