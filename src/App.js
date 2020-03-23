import React, { useState, useEffect, Fragment } from 'react';
import Confetti from 'react-confetti';
import { Button, makeStyles } from '@material-ui/core';
import Header from './components/Header'
import LastStats from './components/LastStats'
import DeathMap from './components/DeathMap'
import MadorSatus from './components/MadorStatus'
import countryISOMapping from 'country-iso-2-to-3'

const useStyles = makeStyles({
  root: {
    background: '#1b262c',
    
  }
})
export default function App() {
  const classes = useStyles()
  const [isCured, setIsCured] = useState(false)
  const [pieces, setPieces] = useState(0)
  const [latestStats, setLatestStats] = useState({})
  const [coronaStats, setCoronaStats] = useState([])
  const [confettiHeight, setConfettiHeghit] = useState(window.innerHeight);


  function convertIso(data) {
    const getCountryISO3 = countryISOMapping;
    for (var index in data.locations) {
      var code = data.locations[index].country_code
      data.locations[index].country_code = getCountryISO3(code)
    }
    return data
  }

  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations?timelines=0')
      .then(res => res.json())
      .then((data) => {
        const coronaWorldStatus = convertIso(data)
        setLatestStats(coronaWorldStatus.latest)
        setCoronaStats(coronaWorldStatus.locations)
      })
      .catch(console.log)
  }, [])

  useEffect(() => {
    const updateConfettiHeight = () => setConfettiHeghit(document.body.scrollHeight)
    window.addEventListener('resize', updateConfettiHeight());
    return () => { window.removeEventListener('resize', updateConfettiHeight()); }
  })

  function getDeathByCountry(locations) {
    return coronaStats.map(location => ({ id: location.country_code, value: location.latest.deaths }))
  }


  return (
    <div classes={{ root: classes.root }}>
      <Header />
      <hr />
      <LastStats latest={latestStats} />
      <hr />
      <DeathMap data={getDeathByCountry()} />
      <hr />
      <MadorSatus />
      <hr />
      <Button variant="contained" color="primary" onClick={() => pieces === 300 ? setPieces(0) : setPieces(300)}>נמצא חיסון!</Button>
      <Confetti height={confettiHeight} numberOfPieces={pieces} />
    </div>
  );
}

