import React, { useEffect, useRef, useState } from 'react'
import { FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import { Hr } from '../Home';
import { locationInfo } from './locationInfo';
import './input.css'

//for saved locations
const savedLocations= [];
var idd;

const useSearch = () => {

    

const[locationName, setLocation] = useState();
const ref = useRef()

const appid = 'a9a4272a867a0349a402486758b281ed';

const [locationResult, setLocationR] = useState(locationInfo);


//set locationName to user input
const getLocation = () => {
savedLoc();
//get json file
const getData = new XMLHttpRequest();

getData.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${appid}&units=metric`, true);

getData.onload =  function(){
idd = JSON.parse(this.response);    
setLocationR(idd);
}  
getData.send();
}


//get date
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const date1 = year+'-'+month+'-'+day;
console.log(date1)


console.log(locationResult);
console.log(locationName);

//save new location Name to array savedLocations; also bring up already city name to first line; limiting length to 5;
const savedLoc=()=>{
    if (savedLocations.includes(locationName)){
        delete savedLocations[savedLocations.indexOf(locationName)];
        savedLocations.unshift(locatioName);
    }
    else{
        savedLocations.unshift(locatioName);
    }
  savedLocations.length = 5;
}

console.log(savedLocations)

//for returning state variable locationName. Only way the state could return.
const locatioName = locationName;



  return {
    date,
    date1,
    locatioName,
    locationResult,
    render: (
    <SearchContainer>
        <A>
            <SearchInput ><Input value={locationName} onChange={e=>{setLocation(e.target.value)}} id='locatioN' type='text' placeholder='location' 
            style={{backgroundColor:'transparent'}}/> </SearchInput>
            <Button onClick={getLocation}><FaSearch/></Button>
        </A>
        <B>
            {/*array of saved locations */}
            {savedLocations.map((index)=>{
                return (
                    <CityNames key={index} onClick={()=>{ setLocation(index);     savedLoc();}}>
                        {index}
                    </CityNames>
                )
                })
            }
        </B>
    </SearchContainer>
    )
    }
}

export default useSearch


const SearchContainer =styled.div`
    width:100% ;
    height: 100%;
`
const A = styled.div`
    display: grid ;
    grid-template-columns: 85% 15% ;
    justify-content:space-between ;
    width:100% ;
    height:15% ;

`
const SearchInput = styled.div`
`
const Input = styled.input`
    width:100% ;
    height:100% ;
    background-color:transparent ;
    padding: 0px 0px 0px 10px ;
    font-size: 20px ;
    color: #fff ;
    border-top: 0 ;
    border-left:0 ;
    outline: none ;
    fill: background-color ;
    
`
const Button = styled.div`
    display:flex ;
    z-index:100 ;
    font-size: 20px ;
    align-items:center ;    background-color:gray ;
   justify-content: center;
   cursor:pointer ;
`
const B = styled.div`
    display: flex ;
    flex-direction:column ;
    height:auto;
    align-items: baseline ;
    justify-content:left ;
`
const CityNames= styled.div`
    display:flex ;
    width:100% ;
    height:100% ;
    margin: 15px 0px 15px 10px ;
    align-items: center ;
    justify-content:left ;
    font-size: 20px ;
    color:gray;
    cursor: pointer;
    :hover{
        color: blue ;
    }
`