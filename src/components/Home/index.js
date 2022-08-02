import React from 'react'
import styled from 'styled-components'
import Details from '../Details'
import { Container, ContainerBlur } from '../GlobalLayout'
import LocWeatherDisplay from '../LocationDisplay'
import Nav from '../Nav';

const Home = ({render, locationResult, dateResult}) => {


  return (
    <HomeContainer>
        <LargeScreen>
        <First>
            <Container>
                <A>
                    <Nav/>
                </A>
                <B>
                    <LocWeatherDisplay temp={locationResult.currentConditions.temp} date={dateResult.date}
                    time={dateResult.time_12} locationResult={locationResult} dateResult={dateResult}
                    cityName={locationResult.address}   icon={locationResult.currentConditions.icon}
                    description={locationResult.currentConditions.}/>
                </B>
            </Container>
        </First>
        <Second>
            <ContainerBlur>
                <C>
                    {render}
                </C>
                <Hr/>
                <D>
                    <Details clouds={locationResult.currentConditions.cloudcover} windspeed={locationResult.currentConditions.wspd} wdir={locationResult.currentConditions.wdir}
                    humidity={locationResult.currentConditions.humidity} pressure={locationResult.currentConditions.sealevelpressure}/>
                </D>
                <Hr/>
            </ContainerBlur>
        </Second>
        </LargeScreen>
        <SmallScreen>
        <First>
            <Container>
                <A>
                    <Nav/>
                </A>
                <B>
                    {render}
                </B>
            </Container>
        </First>
        <Second>
            <Container>
                <C>
                    <LocWeatherDisplay locationResult={locationResult} temp={locationResult.currentConditions.temp} date={dateResult.date}
                        time={dateResult.time_12} dateResult={dateResult}
                        cityName={locationResult.address}   icon={locationResult.currentConditions.icon}
                        description={locationResult.currentConditions.}/>
                </C>
            </Container>
        <div style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
            <Container>
                <D>
                    <Details clouds={locationResult.currentConditions.cloudcover} windspeed={locationResult.currentConditions.wspd} wdir={locationResult.currentConditions.wdir}
                        humidity={locationResult.currentConditions.humidity}   pressure={locationResult.currentConditions.sealevelpressure}/>
                </D>
            </Container>
        </div>
            
        </Second>
        </SmallScreen>
    </HomeContainer>
  )
}

export default Home

const HomeContainer=styled.div`
    display:flex ;
    
    width:100vw ;
    height:100vh ;
`
const LargeScreen=styled.div`
    display:flex ;
    flex-direction: row ;
    width:100% ;
    height:100vh ;
    @media screen and (max-width: 920px){
        display: none ;
    }
`
const SmallScreen=styled.div`
    display:none ;
    flex-direction: column;
    width:100% ;
    height:100vh ;
    @media screen and (max-width: 920px){
        display: flex ;
    }
`

const First =styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: 50% 50%  ;
    width: 65% ;
    height:100vh ;
    @media screen and (max-width: 920px){
        height: 30% ;
        width:100vw ;
    }
`
const Second =styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: repeat(2,1fr) ;
    width: 35% ;
    height:100vh ;
background-color: rgba(0,0,0,0.7) ;
@media screen and (max-width: 920px){
        height: 70% ;
        width:100vw ;
        background-color: transparent ;
    }
`
const A =styled.div`
    height:100% ;
    @media screen and (max-width: 800px){
        height:80% ;
    }
`
const B =styled.div`
    height:100% ;
    width:100% ;
`
const C =styled.div`
    padding: 5px 30px 5px 30px ;
    height:45vh ;
    @media screen and (max-width: 800px){
       padding: 0px 0px 0px 0px;
       height:calc(50vh*0.70) ;
    }
`
const D =styled.div`
    padding: 10px 30px 10px 30px ;
    height:45vh ;
    @media screen and (max-width: 800px){
       padding: 5px 0px 0px 0px;
       height:calc(35vh*0.70) ;
    }
`
export const Hr =styled.div`
    width:100% ;
    height:2px ;
    background-color: gray ;
`