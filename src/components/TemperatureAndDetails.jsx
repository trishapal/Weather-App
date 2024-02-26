import React from 'react'
import { UilArrowUp , UilArrowDown, UilTemperature ,UilTear , UilWind , UilSun , UilSunset, UilCloudDownload } from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'
function TemperatureAndDetails({weather:{
    details,icon,temp,temp_min,temp_max,sunrise,sunset,speed,humidity,feels_like, timezone, pressure
}}) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{details}</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(icon)} 
            //src='https://openweathermap.org/img/wn/01d@2x.png'
            alt=""
            className='w-20'/>
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} mr-1/>
                Real feel:
                <span className=' font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} mr-1/>
                Humidity:
                <span className=' font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} mr-1/>
                Wind :
                <span className=' font-medium ml-1'>{`${speed.toFixed()}km/h`}</span>
                </div>
                <div className='flex font-light text-sm items-center justify-center'>
                <UilCloudDownload size={18} mr-1/>
                Pressure: 
                <span className='font-medium ml-1'>{`${pressure.toFixed()}mbar`}</span>
                </div>
            </div>

        </div>
        <div  className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-30'>
            <UilSun />
            <p  className='font-light flex flex-row '>
                Rise: <span className='font-medium  ml-0'>{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset />
            <p className='font-light flex flex-row'>
                Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset,timezone,'hh:mm a')}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowUp />
            <p className='font-light flex flex-row'>
                High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilArrowDown />
            <p className='font-light flex flex-row'>
                Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
            </p>
            
            
            
            

        </div>
    </div>
  )
}

export default TemperatureAndDetails