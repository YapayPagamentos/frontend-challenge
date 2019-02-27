import React, { Component } from 'react'
import '../style/app.scss'
import Header from '../components/Header'
import ListUsers from '../components/ListUser'
import Search from '../components/Search'
import Button from '../components/Button'
import Notification from '../notification/return'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header/>
          <Button/>
          <Search/>
          <ListUsers/> 
          <Notification/>
      </div>
    );
  }
}

export default App

