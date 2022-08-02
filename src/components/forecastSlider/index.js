import dayjs from 'dayjs'
import React from 'react'
import styled from 'styled-components'
import Icons from '../LocationDisplay/icons'


const ForecastSlider = ({cityName,temp,description,hour,
                        minute, main, date, time, dayTime, locationResult, dateResult}) => {

  return (
    <Wrapper>
      {    (locationResult.values).map(element => {
         


        return (
        <ForecastCon key={locationResult.values[element]}>
            <A>
              <div style={{justifySelf:'center', alignItems:'center' }}>
                {dayjs(parseInt(`${element.datetime}`)).format('ddd')}
              </div>
              <div style={{justifySelf:'center'}}>
                {dayjs(parseInt(`${element.datetime}`)).format('h:mm A')}
              </div>

            </A>
            <B>
               <div style={{fontSize:'16px',justifySelf:'center'}} > <Icons description={element.conditions} icon={element.icon} timee={element.datetime}/> </div> 
                <div style={{justifySelf:'center'}}>{element.conditions}</div>

            </B>
            <C>{element.temp} &#176;C</C>
        </ForecastCon>)
      })}
    </Wrapper>
  )
}

export default ForecastSlider

const Wrapper= styled.div`
  display:flex ;
  flex-direction: row ;
  flex:auto;
  width:100% ;
  gap: 20px ;
`
const ForecastCon = styled.div`
    display: grid;
    grid-template-columns: 80px ;
    grid-template-rows: repeat(3,1fr) ;
    @media screen and (max-width:920px){
      grid-template-columns:60px ;
    }
`
const A = styled.div`
  display:flex ;
  flex-direction:column ;
    font-size: 12px;
    gap:3px;
    align-items:center ;
    justify-content:center ;

`
const B = styled.div`
  display:flex ;
  flex-direction:column ;
    font-size: 12px;
    align-items:center ;
    justify-content:center ;
    @media screen and (max-width:920px){
      font-size:9px ;
    }
`
const C = styled.div`
  display: flex ;
  align-items:center ;
  justify-content:center ;
    font-size:14px ;
`