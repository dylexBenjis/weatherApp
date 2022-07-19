import React, { useState } from 'react'
import { FaCloud, FaCloudMoon, FaCloudMoonRain, FaCloudSun, FaCloudSunRain, FaMoon, FaSnowflake, FaSun } from 'react-icons/fa'
import {BsCloudFog2Fill, BsCloudLightning, BsClouds, BsFillCloudDrizzleFill} from 'react-icons/bs'
import styled from 'styled-components'
import useSearch from '../Search'

const Icons=({main,description, dayTime})=>{

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
            <City>
                <Name > {cityName}</Name>
                <Date>{date} {time}  {main} </Date>
            </City>
            <WeatherIcon>
                <Icon ><Icons main={main} description={description} dayTime={dayTime}/></Icon>
                <Description>{description}</Description>
            </WeatherIcon>
        </A>
        <B>

        </B>
    </LocContainer>
  )
}

export default LocWeatherDisplay

const LocContainer = styled.div`
    display:grid ;
    grid-template-rows: 60% 40% ;
    height:100% ;
    width:100% ;    margin-top:22% ;
    row-gap: 20px ;
    padding: 10px 0px 10px 0px  ;
    color: white ;
`
const A =styled.div`
    display:grid ;
    width: 100% ;
    grid-template-columns: auto auto 15% ;
    justify-content: left ;
    gap:25px ;
`
const Celsius =styled.div`
        display:flex ;
        height:100% ;
        justify-self:left ;
        font-size:100px ;
`
const City =styled.div`
    display: flex ;
    flex-direction:column ;
    justify-self:left ;
    padding: 30px 0px 0px 0px;
    
`
const Name =styled.div`
    font-size: 45px ;
`
const Date =styled.div`
    font-size: 16px ;
`
const WeatherIcon =styled.div`
    display: flex ;
    flex-direction:column ; 
    padding: 50px 0px 0px 0px;
`
const Icon= styled.div`
    font-size :30px;
`
const Description = styled.div`
    font-size: 14px ;
    font-style: italic;
`

const B =styled.div`
    align-items:center ;
    background-color: green ;
    display:grid ;
    grid-template-rows: auto auto auto ;
    justify-content: left ;
    gap:10px ;
`