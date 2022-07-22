import React, { useState } from 'react'
import { FaCloud, FaCloudMoon, FaCloudMoonRain, FaCloudSun, FaCloudSunRain, FaMoon, FaSnowflake, FaSun } from 'react-icons/fa'
import {BsCloudFog2Fill, BsCloudLightning, BsClouds, BsFillCloudDrizzleFill} from 'react-icons/bs'
import styled from 'styled-components'
import useSearch from '../Search'

const Icons=({main,description, dayTime})=>{

    if(main === '--'){
        return '--'
    }

    if (main === 'Clear'){
        if (dayTime === 'd'){
            return <FaSun/>
        }
        else{ return <FaMoon/>}
    }
    if (description=== 'few clouds'){
        if (dayTime === 'd'){
            return <FaCloudSun/>
        }
        else{ return <FaCloudMoon/>}
    }
    if (description=== 'few clouds'){
        if (dayTime === 'd'){
            return <FaCloudSun/>
        }
        else{ return <FaCloudMoon/>}
    }
    if (description=== 'scattered clouds'){
        
        return <FaCloud/>
    }
    if ( description=== 'broken clouds' || description === 'overcast clouds'){
        
        return <BsClouds/>
    }
    if (description=== 'mist' || description=== 'smoke' || description=== 'Haze' || description=== 'fog' || description=== 'sand/ dust whirls' || description=== 'sand' || description=== 'dust' || description=== 'volcanic ash' || description=== 'squalls' || description=== 'tornado'  ){
        
        return <BsCloudFog2Fill/>
    }
    if ( main === 'Snow'){
        
        return <FaSnowflake/>
    }
    if ( main === 'Thunderstorm'){
        
        return <BsCloudLightning/>
    }
    if ( main === 'Drizzle'){
        
        return <BsFillCloudDrizzleFill/>
    }
    if(main==='Rain'){
        if (description === 'freezing rain'){
            return <FaSnowflake/>
        }
        else {
            if (dayTime==='d'){
                return <FaCloudSunRain/>
            }
            else { return <FaCloudMoonRain/>}
        }
    }


}


const LocWeatherDisplay = ({cityName,temp,description,hour,
                            minute, main, date, time, dayTime}) => {



  return (
    <LocContainer>
        <A>
            <Celsius id='cel'>{temp}&#176;C</Celsius>
            <div style={{display:'flex', flexDirection:'row',gap:'25px'}}>
            <City>
                <Name > {cityName}</Name>
                <Date>{date} {time}  {main} </Date>
            </City>
            <WeatherIcon>
                <Icon ><Icons main={main} description={description} dayTime={dayTime}/></Icon>
                <Description>{description}</Description>
            </WeatherIcon>
            </div>
        </A>

    </LocContainer>
  )
}

export default LocWeatherDisplay

const LocContainer = styled.div`
    display:flex ;
    height:100% ;
    align-items: flex-end ;
    width:100% ;  
    padding: 10px 0px 10px 0px  ;
    color: white ;
    @media screen and (max-width: 800px){
        align-items: center ;
    }
`
const A =styled.div`
    display:grid ;
    width: 100% ;
    grid-template-columns: auto auto ;
    justify-content: left ;
    gap:25px ;
    @media screen and (max-width: 800px){
       grid-template-columns: auto ;
       grid-template-rows: auto auto ;
    }
`
const Celsius =styled.div`
        display:flex ;
        height:100% ;
        justify-self:left ;
        font-size:100px ;
        @media screen and (max-width: 800px){
        font-size: 45px ;
    }
`
const City =styled.div`
    display: flex ;
    flex-direction:column ;
    justify-self:left ;
    padding: 30px 0px 0px 0px;
    @media screen and (max-width: 800px){
        padding: 0px ;
    }
    
`
const Name =styled.div`
    font-size: 45px ;
    @media screen and (max-width: 800px){
        font-size: 30px ;
    }
`
const Date =styled.div`
    font-size: 16px ;
    @media screen and (max-width: 800px){
        font-size: 14px ;
    }
`
const WeatherIcon =styled.div`
    display: flex ;
    flex-direction:column ; 
    padding: 50px 0px 0px 0px;
    @media screen and (max-width: 800px){
        padding: 10px 0px 0px 0px ;
    }
`
const Icon= styled.div`
    font-size :30px;
    @media screen and (max-width: 800px){
        font-size: 22px ;
    }
`
const Description = styled.div`
    font-size: 14px ;
    font-style: italic;
    @media screen and (max-width: 800px){
        font-size: 12px ;
    }
`

