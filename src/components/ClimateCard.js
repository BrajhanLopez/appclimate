import React from 'react';

const ClimateCard = ({ city, cdata }) => {
let icon = cdata.weather?.[0].icon
let temp = (Number(cdata.main?.temp) - 273.15).toFixed(2)
    return (
        <div className='climatecard'>
            <h1 className='title-info'>Wheather App</h1>
            <h2 className='title-info'>{city} , {cdata.sys?.country}</h2>

            <div className='container-data'>


                <div className='container-icon'>
                    <img className='icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icono' />
                    <h3 className='temmp'>{temp}C°</h3>
                </div>

                <div className='container-info'>
                <h3 className='title-info'>"{cdata.weather?.[0].description}"</h3>
                <h3> <span className='title-info'>Wind speed:</span> {cdata.wind?.speed} m/s</h3>
                <h3> <span  className='title-info'>Clouds:</span>   {cdata.clouds?.all}%</h3>
                <h3><span  className='title-info'>Pressure:</span>  {cdata.clouds?.all} mb</h3>

                </div>
               
            </div>
        <div>
           
        </div>
        
        <button className="button"><span>Degrees</span></button>
        </div>
    );
};

export default ClimateCard;