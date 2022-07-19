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
    </HomeContainer>
  )
}

export default Home

const HomeContainer=styled.div`
    display:flex ;
    flex-direction: row ;
    width:100vw ;
    height:100vh ;
`
const First =styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: repeat(2,1fr) ;
    width: 65% ;
    height:100vh ;
`
const Second =styled.div`
    display: grid;
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: repeat(2,1fr) ;
    width: 35% ;
    height:100vh ;
background-color: rgba(0,0,0,0.7) ;
`
const A =styled.div`
    height:50% ;
`
const B =styled.div`
    height:50% ;
`
const C =styled.div`
    padding: 10px 30px 10px 30px ;
    height:45vh ;
`
const D =styled.div`
    padding: 10px 30px 10px 30px ;
    height:45vh ;
`
export const Hr =styled.div`
    width:100% ;
    height:2px ;
    background-color: gray ;
`