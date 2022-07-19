import React from 'react'
import styled from 'styled-components'
import Details from '../Details'
import { Container, ContainerBlur } from '../GlobalLayout'
import LocWeatherDisplay from '../LocationDisplay'
import Nav from '../Nav'
import useSearch from '../Search';

const Home = () => {
    //getting my useSearch returned object
    const locationInfo = useSearch();

  return (
    <HomeContainer>
        <LargeScreen>
        <First>
            <Container>
                <A>
                    <Nav/>
                </A>
                <B>
                    <LocWeatherDisplay temp={locationInfo.locationResult.list[0].main.temp} date={locationInfo.dateResult.date}
                    time={locationInfo.dateResult.time_12}
                    cityName={locationInfo.locationResult.city.name}  main={locationInfo.locationResult.list[0].weather[0].main}
                    description={locationInfo.locationResult.list[0].weather[0].description} dayTime={locationInfo.locationResult.list[0].sys.pod}/>
                </B>
            </Container>
        </First>
        <Second>
            <ContainerBlur>
                <C>
                    {locationInfo.render}
                </C>
                <Hr/>
                <D>
                    <Details clouds={locationInfo.locationResult.list[0].clouds.all} Windspeed={locationInfo.locationResult.list[0].wind.speed}
                    humidity={locationInfo.locationResult.list[0].main.humidity} pressure={locationInfo.locationResult.list[0].main.pressure}/>
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
                    {locationInfo.render}
                </B>
            </Container>
        </First>
        <Second>
            <Container>
                <C>
                <LocWeatherDisplay temp={locationInfo.locationResult.list[0].main.temp} date={locationInfo.dateResult.date}
                    time={locationInfo.dateResult.time_12}
                    cityName={locationInfo.locationResult.city.name}  main={locationInfo.locationResult.list[0].weather[0].main}
                    description={locationInfo.locationResult.list[0].weather[0].description} dayTime={locationInfo.locationResult.list[0].sys.pod}/>
                </C>
            </Container>
        <div style={{backgroundColor:'rgba(0,0,0,0.7)'}}>
            <Container>
                <D>
                    <Details clouds={locationInfo.locationResult.list[0].clouds.all} Windspeed={locationInfo.locationResult.list[0].wind.speed}
                    humidity={locationInfo.locationResult.list[0].main.humidity} pressure={locationInfo.locationResult.list[0].main.pressure}/>
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
    height:100% ;
    @media screen and (max-width: 800px){
        display: none ;
    }
`
const SmallScreen=styled.div`
    display:none ;
    flex-direction: column;
    width:100% ;
    height:100% ;
    @media screen and (max-width: 800px){
        display: flex ;
    }
`

const First =styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: repeat(2,1fr) ;
    width: 65% ;
    height:100vh ;
    @media screen and (max-width: 800px){
        height: 35% ;
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
@media screen and (max-width: 800px){
        height: 65% ;
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
`
const C =styled.div`
    padding: 10px 30px 10px 30px ;
    height:45vh ;
    @media screen and (max-width: 800px){
       padding: 0px 0px 0px 0px;
       height:calc(38vh*0.65) ;
    }
`
const D =styled.div`
    padding: 10px 30px 10px 30px ;
    height:45vh ;
    @media screen and (max-width: 800px){
       padding: 5px 0px 0px 0px;
       height:calc(45vh*0.65) ;
    }
`
export const Hr =styled.div`
    width:100% ;
    height:2px ;
    background-color: gray ;
`