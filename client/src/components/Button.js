import React, { Component } from 'react'
import { AddItem } from '../actions/action'  
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 

class Button extends Component {

    state = {
        user: {
            name: '',
            username: '',
            email: '',
            phone: '',
            avatar: ''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const { user } = this.state;
        this.props.AddItem(user); 

        const userClear = {
            name: '',
            username: '',
            email: '',
            phone: '',
            avatar: ''
        }

        this.setState(userClear)
    }
  
    handleName = (evt) =>{
        const { user } = this.state;
        user.name = evt.target.value;
        this.setState({ user });
    }

    handleUsername = (evt) =>{
        const { user } = this.state;
        user.username = evt.target.value;
        this.setState({ user });
    }

    handleEmail = (evt) =>{
        const { user } = this.state;
        user.email = evt.target.value;
        this.setState({ user });
    }

    handlePhone = (evt) =>{
        const { user } = this.state;
        user.phone = evt.target.value;
        this.setState({ user });
    }

    handleAvatar = (evt) =>{
        const { user } = this.state 
        user.avatar = evt.target.value
        this.setState({ user })
    }

    render() {
        return (
            <div className="cadastro__content">
                <h2 className="header__cadastro">Cadastre um novo usuário</h2>

                <div className="formCadastro">
                    <form  className="form__users" onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.name} onChange={this.handleName} name="name" placeholder="Insira o nome" required/>
                        <input type="text" value={this.state.username} onChange={this.handleUsername} name="username" placeholder="Insira o usuário" required/>
                        <input type="email" value={this.state.email} onChange={this.handleEmail} name="email" placeholder="Insira o e-mail" required/>
                        <input type="text" value={this.state.phone} onChange={this.handlePhone} name="phone" placeholder="Insira o telefone" required/>
                        <input type="url" value={this.state.avatar} onChange={this.handleAvatar} name="avatar" placeholder="Insira a URL da imagem" required/>
                        <button type="submit" className="add__user">Adicionar usuário</button>
                    </form>
                </div>
            </div>
        );
    }

}


const mapStateToProps = state => ({isAdd:state.adicionaItem})
const mapDispatchToProps = dispatch => bindActionCreators({AddItem}, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(Button)
 