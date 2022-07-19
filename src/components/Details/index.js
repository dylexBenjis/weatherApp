import React from 'react'
import styled from 'styled-components'
import useSearch from '../Search';




const Details = ({clouds, Windspeed,humidity, pressure}) => {

console.log(clouds)
  
const info = [{id:1, title:'cloud',value: `${clouds}%`},
              {id:2, title:'humidty', value:`${humidity}%`},
              {id:3, title:'wind speed', value: `${Windspeed}m/s`},
              {id:4, title:'pressure',  value:`${pressure}hPa`}]

  return (
    <DetailsCon>
        <Head>
            Weather deatails
        </Head>
        <div style={{gap:'10px'}}>    
              {info.map((q, index)=>{
                return (
                <A key={index}>
                  <Title >{q.title}</Title>
                  <Value >{q.value}</Value>
                </A>
                )
              })}

        </div>
    </DetailsCon>
  )
}

export default Details

const DetailsCon= styled.div`
    display:grid ;
    grid-template-rows: 15% 85% ;
    height: 100%;
    width: 100% ;
    cursor: default;
    
    
`
const Head = styled.div`
    font-size: 25px ;
    color: gray ;
    @media screen and (max-width: 800px){
        font-size: 18px ;
    }
`
const A = styled.div`
    display: grid ;
    padding: 20px 0px 10px 0px ;
    grid-template-columns: 70% 30% ;
    gap:10px ;
    justify-content:space-between ;
    width:100% ;
    height:auto ;
    @media screen and (max-width: 800px){
       padding: 10px 0px ;
       gap: 2px ;
    }
`
const Title =styled.div`
      font-size: 20px ;
    color: gray ;
    @media screen and (max-width: 800px){
        font-size: 15px ;
    }
`
const Value =styled.div`
    font-size: 20px ;
    color: gray ;
    text-align: right ;
    @media screen and (max-width: 800px){
        font-size: 15px ;
    }
`