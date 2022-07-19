import React, { useEffect, useRef, useState } from 'react'
import { FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import { Hr } from '../Home';
import { locationInfo } from './locationInfo';
import './input.css'
import { dateInfo } from './DateInfo';

//for saved locations
const savedLocations= [];
var idd;
var iddate;

const useSearch = () => {

    

const[locationName, setLocation] = useState();
const[lat, setLat] = useState(' ');
const[lon, setLon] = useState(' ');

const appid = 'a9a4272a867a0349a402486758b281ed';

const [locationResult, setLocationR] = useState(locationInfo);
const [dateResult, setDateR] = useState(dateInfo);



//set locationName to user input
const getLocation = () => {
savedLoc();
//get json file
const getData = new XMLHttpRequest();

getData.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${appid}&units=metric`, true);

getData.onload =  function(){
idd = JSON.parse(this.response);    
setLocationR(idd);
setLat(idd.city.coord.lat);
setLon(idd.city.coord.lon);
}  
getData.send();




}


// date Api
useEffect(()=>{

    const getData = new XMLHttpRequest();

getData.open('GET', `https://api.ipgeolocation.io/timezone?apiKey=3e4a456b11e143b181561af5cbb77bc6&lat=${lat}&long=${lon}`, true);

getData.onload =  function(){
iddate = JSON.parse(this.response);    
setDateR(iddate);
}  
getData.send();

},[lat, lon])

console.log(dateResult);
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
    dateResult,
    locatioName,
    locationResult,
    render: (
    <SearchContainer>
        <A>
            <SearchInput ><Input value={locationName} onChange={e=>{setLocation(e.target.value)}} id='locatioN' type='text' placeholder='City'/> </SearchInput>
            <Button onClick={getLocation}><FaSearch/></Button>
        </A>
        <B>
            {/*array of saved locations */}
            {savedLocations.map((index)=>{
                return (
                    <CityNames key={index} onClick={()=>{  getLocation(); setLocation(index);    savedLoc();}}>
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
    @media screen and (max-width: 800px){

        height: 30% ;
    }

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
    @media screen and (max-width:800px){
      display: none ;
    }
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