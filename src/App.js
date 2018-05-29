import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addName, increment } from './actions/action'
// import 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { PersistGate } from 'redux-persist/integration/react';
const style = {
  margin: 12
}
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      count: 0
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  handleChangeEmail(e) {
     this.setState({
        email: e.target.value
      })
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  saveInfo() {
    console.log("Saving info");
    this.props.addName({ email: this.state.email, password: this.state.password})
    this.setState({
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="center">
          Enter emai and password
          <div className="center">
         <TextField  className="text-block" hintText="Enter email ..."  value={this.state.email} onChange={this.handleChangeEmail} />
         <TextField className="text-block" hintText="Enter password ..."  value={this.state.password} onChange={this.handleChangePassword} />
          <RaisedButton label="Save Info" primary={true} style={style} onClick={this.saveInfo} />
          </div>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    password: state.password,
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addName, increment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
