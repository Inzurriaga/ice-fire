import React, { Component } from 'react';
import logo from './logo.svg';
import { saveHouses, displayLoading } from "../../actions/index";
import { connect } from "react-redux";
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Loading from "../Loading/Loading"

export class App extends Component {

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch("http://localhost:3001/api/v1/houses")
    const data = await response.json()
    this.props.saveHouses(data)
    this.props.displayLoading(false)
  }
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          {
            this.props.loading ? <Loading /> : <CardContainer />
          }
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  saveHouses: houses => dispatch(saveHouses(houses)),
  displayLoading: bool => dispatch(displayLoading(bool))
})

export const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
