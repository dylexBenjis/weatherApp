import React, { useState } from 'react'
import styled from 'styled-components'
import useSearch from '../Search'

const LocWeatherDisplay = ({cityName,temp,description,hour,
                            minute, main}) => {

                                const locationInfo = useSearch();


  return (
    <LocContainer>
        <A>
            <Celsius id='cel'>{temp}&#176;C</Celsius>
            <City>
                <Name ></Name>
                <Date>{hour}:{minute} &nbsp;  &nbsp;  {description} {locationInfo.locationResult.city.country}</Date>
            </City>
            <WeatherIcon>
                <Icon >'ICON'</Icon>
                <Description>{main}</Description>
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
    grid-template-columns: auto auto auto ;
    justify-content: left ;
    gap:30px ;

`
const Celsius =styled.div`
        display:flex ;
        height:100% ;
        justify-self:center ;
        font-size:100px ;
`
const City =styled.div`
    display: flex ;
    flex-direction:column ;
    
    justify-self:center ;
    padding: 15px 0px 0px 0px;
    
`
const Name =styled.div`
    font-size: 57px ;
`
const Date =styled.div`
    font-size: 20px ;
`
const WeatherIcon =styled.div`
    display: flex ;
    flex-direction:column ;
    padding: 25px 0px 0px 0px;
`
const Icon= styled.div`
    font-size :50px;
`
const Description = styled.div`
    font-size: 20px ;
`

const B =styled.div`
    align-items:center ;
    background-color: green ;
    display:grid ;
    grid-template-rows: auto auto auto ;
    justify-content: left ;
    gap:10px ;
`