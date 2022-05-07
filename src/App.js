
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ClimateCard from './components/ClimateCard';
import sky from './video/sky.mp4'

function App() {

const [climatedata, setclimatedata] = useState({})

  useEffect(()=>{

    function success(pos) {
      var crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=cfbabd5a23db066ab174c9347f775332`)
      .then(res => setclimatedata(res.data))
  
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    
    navigator.geolocation.getCurrentPosition(success, error);

  },[])

  console.log(climatedata);
  return (
    <div className="App">
     
      <video autoPlay muted loop>

        <source src={sky} type='video/mp4'/>
      </video>
     <ClimateCard city = {climatedata.name} cdata={climatedata}/> 

    </div>
  );
}

export default App;
