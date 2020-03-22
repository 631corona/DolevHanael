import React, { Component, Fragment } from 'react';
import Confetti from 'react-confetti';
import { Grid, Container, Button } from '@material-ui/core';
import Header from './components/Header'
import Labs from './components/Labs'
import DeathMap from './components/DeathMap'
import MadorSatus from './components/MadorStatus'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      is_cured: false,
      pieces: 0,
      coronaApi: []
    }
  }

  componentWillMount() {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
    .then(res => res.json())
    .then((data) => {
      this.setState({ coronaApi: [data] })
    })
    .catch(console.log)
  }

  render() {
        return(
      <Fragment>
      <Confetti numberOfPieces={this.state.pieces} />
      <Header />
      <hr/>
      <Labs />
      <hr/>
      <DeathMap data={this.state.coronaApi.map(() => [["locations"]["country_code"], ["locations"]["latest"]])}/>
      <hr/>
      <MadorSatus/>
      <hr/>
      <Button variant="contained" color="primary" onClick={() => this.setState(prevState => { return { is_cured: !prevState.is_cured, pieces: (prevState.pieces === 200 ? 0 : 200) } })}>נמצא חיסון!</Button>
      </Fragment >
    );
  }

}

