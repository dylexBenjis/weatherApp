import React, { useState } from 'react'

import styled from 'styled-components'
import useSearch from '../Search'
import dayjs from 'dayjs'
import ForecastSlider from '../forecastSlider'
import Icons from './icons'
import { FaArrowLeft } from 'react-icons/fa'





const LocWeatherDisplay = ({cityName,temp,description,hour,
                            minute, main, date, time, dayTime, locationResult, dateResult, icon}) => {

//for the day
            const day = dayjs('2022-08-01').format('dd')
console.log(day)


  return (
    <LocContainer>
        <A>
            <Celsius id='cel'>{temp}&#176;C</Celsius>
            <div style={{display:'flex', flexDirection:'row', columnGap:'15px'}}>
            <City>
                <Name > {cityName}</Name>
                <Date>{date} {dayjs(date).format('ddd')} {time} </Date>
            </City>
            <WeatherIcon>
                <Icon ><Icons main={main} description={description} dayTime={dayTime} locationResult={locationResult} icon={icon} timee={dateResult.date_time_unix}/></Icon>
                <Description >{description}</Description>
            </WeatherIcon>
            </div>
        </A>
        <B>
            <ForecastSlider locationResult={locationResult} dateResult={dateResult} cityName={cityName}temp={temp} description={description} hour = {hour} 
            minute={minute} date={date} time={time} dayTime={dayTime} />
        </B>

    </LocContainer>
  )
}

export default LocWeatherDisplay

const LocContainer = styled.div`
    display:grid;
    height:100% ; 
    grid-template-rows: 50% 50% ;
    row-gap:30px ;
    justify-content:left ;
    width:100% ; 
    color: white ;
    @media screen and (max-width:800px){
        row-gap:0px ;
    }

`
const A =styled.div`
    display:flex ;
    width: 100% ;
    height:100% ;
    flex-direction:column ;
    gap:5px ;
    justify-content: left ;
    align-self:flex-start ;
`
const Celsius =styled.div`
        display:flex ;
        justify-self:left ;
        font-size:70px ;
        @media screen and (max-width: 800px){
        font-size: 45px ;
    }
`
const City =styled.div`
    display: flex ;
    flex-direction:column ;
    justify-self:left ;

    
`
const Name =styled.div`
    font-size: 30px ;
    @media screen and (max-width: 800px){
        font-size: 22px ;
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

`
const Icon= styled.div`
    font-size :30px;
    @media screen and (max-width: 800px){
        font-size: 22px ;
    }
`
const Description = styled.div`
    font-size: 16px ;
    font-style: italic;
    @media screen and (max-width: 800px){
        font-size: 14px ;
    }
`

const B = styled.div`
    display: flex;
    justify-self:left ;
    flex-wrap:nowrap ;
    width: calc(100vw/1.1409) ;
    height:65% ;
    overflow-x:scroll ;  
    @media screen and (min-width:800px){
        width: calc(100vw/1.7) ;
        height:80% ;
        align-self: flex-end;
        &::-webkit-scrollbar{
            /* display:none ; */
            height: 17px ;
        }
        ::-webkit-scrollbar-track{
            background-color:transparent ;
            background-clip:content-box ;

        }
        &::-webkit-scrollbar-thumb{
            background-color:gray ;
            background-clip:content-box ;
            border-top: 7px solid transparent ;
            border-bottom: 7px solid transparent ;
        }
        &::-webkit-scrollbar-button:horizontal:increment{
            background-color:gray ;
            border-top-right-radius:15px ;
            border-bottom-right-radius:15px ;
            display:flex;
            border-left:2px solid gray ;
            height:20px ;
            width:20px ;
        }
        &::-webkit-scrollbar-button:horizontal:decrement{
            background-color: gray;
            border-top-left-radius:15px ;
            border-bottom-left-radius:15px ;
            display:flex;
            border-right:2px solid gray ;
            height:120px ;
            width:20px ;
        }
    }

`