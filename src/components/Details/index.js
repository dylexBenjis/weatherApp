import React from 'react'
import styled from 'styled-components'
import useSearch from '../Search';




const Details = ({clouds, windspeed,humidity, pressure, wdir}) => {

console.log(wdir)

function windDirection(wdir){
    if (wdir>=10 && wdir>=350){
        return ((wdir)+'° N')
    }
    if (wdir>10 && wdir<40){
        return (wdir+'° N/NE')
    }
    if (wdir>=40&&wdir<60){
        return (wdir+'° NE')
    }
    if (wdir>=60&&wdir<80){
        return (wdir+'° E/NE')
    }
    if (wdir>=80 && wdir<100){
        return (wdir+'° E')
    }
    if (wdir>=100&&wdir<130){
        return ((wdir)+'° E/ES')
    }    
    if (wdir>=130&&wdir<150){
        return ((wdir)+'° ES')
    }
    if (wdir>=150&&wdir<170){
        return ((wdir)+'° S/ES')
    }
    if (wdir>=170&&wdir<190){
        return ((wdir)+'° S')
    }
    if (wdir>=190&&wdir<210){
        return ((wdir)+'° S/SW')
    }
    if (wdir>=210&&wdir<230){
        return ((wdir)+'° SW')
    }
    if (wdir>=230&&wdir<250){
        return ((wdir)+'° W/SW')
    }
    if (wdir>=250&&wdir<280){
        return ((wdir)+'° W')
    }
    if (wdir>=280&&wdir<300){
        return ((wdir)+'° W/WN')
    }
    if (wdir>=300&&wdir<320){
        return ((wdir)+'° WN')
    }
    if (wdir>=320&&wdir<350){
        return ((wdir)+'° N/WN')
    }
}
  
const info = [{id:1, title:'cloud',value: `${clouds}%`},
              {id:2, title:'humidty', value:`${humidity}%`},
              {id:3, title:'wind speed', value: `${windspeed}m/s`},
              {id:4, title:'wind direction',  value:`${windDirection(wdir)}`},
              {id:5, title:'pressure',  value:`${pressure}hPa`}]



  return (
    <DetailsCon>
        <Head>
            Weather deatails
        </Head>
        <div style={{gap:'5px'}}>    
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
    padding: 10px 0px 5px 0px ;
    grid-template-columns: 50% 50% ;
    gap:5px ;
    justify-content:space-between ;
    width:100% ;
    height:inherit ;
    @media screen and (max-width: 800px){
       padding: 2.5px 0px 10px 0px ;
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