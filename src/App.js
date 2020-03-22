import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { Grid, Container, Button } from '@material-ui/core';
import Header from './components/Header'
import Labs from './components/Labs'
import DeathMap from './components/DeathMap'
import MadorSatus from './components/MadorStatus'
import countryISOMapping from 'country-iso-2-to-3'
import useWindowSize from './hooks/useWindowSize'
import { useScrollPosition } from './hooks/useScrollPosition';


export default function App() {
  const [isCured, setIsCured] = useState(false)
  const [pieces, setPieces] = useState(0)
  const [coronaApi, setCoronaApi] = useState([])
  const [confettiHeight, setConfettiHeghit] = useState(window.innerHeight);


  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      .then(res => res.json())
      .then((data) => {
        // const getCountryISO3 = countryISOMapping;
        // return getCountryISO3(code)
        coronaApi = [data]
      })
      .catch(console.log)
  })

  useEffect(() => {
    const updateConfettiHeight = () => setConfettiHeghit(document.body.scrollHeight)
    window.addEventListener('resize', updateConfettiHeight());
    return () => { window.removeEventListener('resize', updateConfettiHeight()); }

  })



  return (
    <>
      <Header />
      <hr />
      <Labs />
      <hr />
      <DeathMap data={coronaApi.map(() => [["locations"]["country_code"], ["locations"]["latest"]])} />
      <hr />
      <MadorSatus />
      <hr />
      <Button variant="contained" color="primary" onClick={() => pieces === 300 ? setPieces(0): setPieces(300)}>נמצא חיסון!</Button>
      <Confetti height={confettiHeight} numberOfPieces={pieces} />
    </>
  );
}

