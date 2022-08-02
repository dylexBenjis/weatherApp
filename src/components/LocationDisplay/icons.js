import React from 'react'
import { FaCloud, FaCloudMoon, FaCloudMoonRain, FaCloudSun, FaCloudSunRain, FaMoon, FaSnowflake, FaSun } from 'react-icons/fa'
import {BsCloudFog2Fill, BsCloudLightning, BsClouds, BsFillCloudDrizzleFill} from 'react-icons/bs'
import dayjs from 'dayjs'

const Icons = ({main,description, dayTime,icon,locationResult,timee}) => {

  if(icon==='--'){
    return '--'
  }
    if ( icon=== 'clear-day'){
      if    ((dayjs(parseInt(`${timee}`)).format('A')==='PM')&&((dayjs(parseInt(`${timee}`)).format('h')>=7)&&
      (dayjs(parseInt(`${timee}`)).format('h')<=9))){ return <FaMoon/>}
      else return <FaSun/>
    }

      
    if(icon==='clear-night'){
    if
    ((dayjs(parseInt(`${timee}`)).format('A')==='AM')&&
    ((dayjs(parseInt(`${timee}`)).format('h')>='6'))) { return <FaSun/>}
    else return <FaMoon/>}

    if (icon=== 'partly-cloudy-day'){
      if    ((dayjs(parseInt(`${timee}`)).format('A')==='PM')&&((dayjs(parseInt(`${timee}`)).format('h')>='7')&&
      (dayjs(parseInt(`${timee}`)).format('h')<='9'))){ return <FaCloudMoon/>}
      else return <FaCloudSun/> }
    if(icon=== 'partly-cloudy-night'){
      if
      ((dayjs(parseInt(`${timee}`)).format('A')==='AM')&&
      ((dayjs(parseInt(`${timee}`)).format('h')>='6'))) { return <FaCloudSun/>}
      else return <FaCloudMoon/> }
    

    if (icon=== 'cloudy'){ return <FaCloud/>}

    if (icon=== 'fog'){return <BsCloudFog2Fill/>}

    if ( icon === 'Snow'){return <FaSnowflake/>}

    if ( icon === 'thunder-rain'){return <BsCloudLightning/>}

    if ( icon === 'Rain, Overcast'||icon==='showers-day'||icon==='showers-night'){return <BsFillCloudDrizzleFill/>}
    
    if(icon==='rain'){
        if ((
          (
            (((dayjs(parseInt(`${timee}`)).format('h') >= 1)&&(dayjs(parseInt(`${timee}`)).format('h')<=6))||(dayjs(parseInt(`${timee}`)).format('h')==='12'))
            &&(dayjs(parseInt(`${timee}`)).format('A')==='PM')
          )
          ||(
              (dayjs(parseInt(`${timee}`)).format('A')==='AM')&&((dayjs(parseInt(`${timee}`)).format('h')>=6)&&
              (dayjs(parseInt(`${timee}`)).format('h')<=11))
            )
          )){
                return <FaCloudSunRain/>
            }
            else { return <FaCloudMoonRain/>}
        }
}

export default Icons