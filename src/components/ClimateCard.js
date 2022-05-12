import React, { useState } from 'react';

const ClimateCard = ({ city, cdata }) => {
let icon = cdata.weather?.[0].icon
let temp = (Number(cdata.main?.temp) - 273.15).toFixed(2)
let tempf = ((temp * (9/5)) + 32).toFixed(2)
const [changetemp, setchangetemp] = useState(true)
const converter = () => {
setchangetemp(!changetemp)

}


    return (
        <div className='climatecard'>
            <h1 className='title-info'>Wheather App</h1>
            <h2 className='title-info'>{city} , {cdata.sys?.country}</h2>

            <div className='container-data'>


                <div className='container-icon'>
                    <img className='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icono' />
                    <h3 className='temmp'>{changetemp ? temp  + " C°": tempf + " F°"}</h3>
                </div>

                <div className='container-info'>
                <h3 className='title-info'>"{cdata.weather?.[0].description}"</h3>
                <h3 className='h3-info'> <i className="fa-solid fa-wind"></i><span className='title-info'>  Wind speed:</span> {cdata.wind?.speed} m/s</h3>
                <h3 className='h3-info'> <i className="fa-solid fa-cloud"></i><span  className='title-info'>  Clouds:</span>   {cdata.clouds?.all}%</h3>
                <h3 className='h3-info'> <i className="fa-solid fa-temperature-three-quarters"></i><span  className='title-info'>  Pressure:</span>  {cdata.main?.pressure} mb</h3>

                </div>
               
            </div>
        <div>
           
        </div>
        
        <button className="button" onClick={converter}><span>Degrees</span></button>
        </div>
    );
};

export default ClimateCard;