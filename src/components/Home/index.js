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
    //get time
    const time = locationInfo.date;
    const hour = time.getHours();
    const minute = time.getMinutes();

  return (
    <HomeContainer>
        <First>
            <Container>
                <A>
                    <Nav/>
                </A>
                <B>
                    <LocWeatherDisplay/>
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
                    <Details/>
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