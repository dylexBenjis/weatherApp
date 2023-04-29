import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import ForecastSlider from '../forecastSlider'
import Icons from './icons'





const LocWeatherDisplay = ({cityName,temp,description, datetime,  locationResult, dateResult, icon}) => {

console.log(locationResult,datetime)
  return (
    <LocContainer>
        <A>
            <Celsius id='cel'>{temp}&#176;C</Celsius>
            <div style={{display:'flex', flexDirection:'row', columnGap:'25px'}}>
            <City>
                <Name > {cityName}</Name>
                <Date>{(dateResult.date_time_ymd).slice(0,10)} {dayjs(dateResult.date_time_ymd).format('ddd')} {(dateResult.date_time_ymd).slice(11,19)}{dayjs(dateResult.date_time_ymd).format('A')} </Date>
            </City>
            <WeatherIcon>
                <Icon ><Icons  icon={icon} time_display={(dateResult.date_time_ymd).slice(0,19)}/></Icon>
                <Description >{description}</Description>
            </WeatherIcon>
            </div>
        </A>
        <B>
            <ForecastSlider locationResult={locationResult} />
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
        row-gap:15px ;
    }

`
const A =styled.div`
    display:flex ;
    width: 100% ;
    height:100% ;
    flex-direction:column ;
    gap:10px ;
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
    row-gap:15px;
    @media screen and (max-width: 800px){
        gap:5px;
    }
    
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
    row-gap:10px;
    @media screen and (max-width: 800px){
        gap:5px;
    }

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
    width: 100% ;
    height:80% ;
    overflow-x:scroll ;  
    @media screen and (min-width:800px){

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