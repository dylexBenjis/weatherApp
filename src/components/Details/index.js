import React from 'react'
import styled from 'styled-components'
import useSearch from '../Search';




const Details = () => {

//   const locationInfo = useSearch();
  
// const info = [{id:1, title:'cloud',value: `${locationInfo.locationResult.list[0].clouds.all} %`},
//               {id:2, title:'humidty',},
//               {id:3, title:'wind speed', value: `${locationInfo.locationResult.list[0].wind.speed} m/s`},
//               {id:4, title:'rain',  }]

  return (
    <DetailsCon>
        <Head>
            Weather deatails
        </Head>
        <div style={{gap:'10px'}}>    
              {/* {info.map((q, index)=>{
                return (
                <A key={index}>
                  <Title >{q.title}</Title>
                  <Value >{q.value}</Value>
                </A>
                )
              })} */}

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
`
const A = styled.div`
    display: grid ;
    padding: 20px 0px 10px 0px ;
    grid-template-columns: 80% 20% ;
    gap:10px ;
    justify-content:space-between ;
    width:100% ;
    height:auto ;
`
const Title =styled.div`
      font-size: 20px ;
    color: gray ;
`
const Value =styled.div`
    font-size: 20px ;
    color: gray ;
    text-align: center ;
`