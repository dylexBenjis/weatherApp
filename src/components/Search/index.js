import React, { useEffect, useState } from 'react'
import { FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import { convert } from './locationInfo';
import './input.css'
import { dateInfo } from './DateInfo';


const savedLocations= [];//array to save city input
var apiObject;//var to get api object
var apiObjectDate;//var to get date api object

const useSearch = () => {

    

const[locationName, setLocationName] = useState();
const[lat, setLat] = useState(' ');
const[lon, setLon] = useState(' ');

const appid = 'YL3DPR3G8LL234DHWYMQP3223';//'a9a4272a867a0349a402486758b281ed';

const [locationResult, setLocationResult] = useState(convert);
const [dateResult, setDateR] = useState(dateInfo);

const [countryCode, setCountryCode] = useState('');



// method to call forecast API endpoint
const getLocation = () => {

    //set locationName to user input
    savedLoc();


    //get json file
    if(countryCode === ''){
        const getData = new XMLHttpRequest();

        getData.open('GET', `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locationMode=single&locations=${locationName}&lang=en&aggregateHours=1&unitGroup=metric&shortColumnNames=false&contentType=json&forecastDays=1&key=${appid}&iconSet=icons1`, true)
            
        getData.send();
        getData.onerror= function(){
            alert('check your internet connection');

        }
        getData.onload =  function(){

            if (getData.status === 200 ){
                try{
                    apiObject = JSON.parse(this.response);    
                    setLocationResult(apiObject);
                    setLat(apiObject.location.latitude);
                    setLon(apiObject.location.longitude);
                } 
                catch{
                    setLocationResult(convert);
                    alert('please, verify the location.');
                }
        }  

    }}
    else{
        const getData = new XMLHttpRequest();

        getData.open('GET', `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locationMode=single&locations=${locationName},${countryCode}&aggregateHours=1&unitGroup=metric&shortColumnNames=false&contentType=json&forecastDays=1&key=${appid}&iconSet=icons1`, true);
        getData.send();
        getData.onerror= function(){
            alert('check your internet connection');

        }

        getData.onload =  function(){
            console.log(this.response.errorCode)
           if(getData.status === 200 ){
               try{
                    apiObject = JSON.parse(this.response);    
                    setLocationResult(apiObject);
                    setLat(apiObject.location.latitude);
                    setLon(apiObject.location.longitude);
                } 
                catch{
                    setLocationResult(convert);
                    alert('please, verify the location.');
                }
            }
            
        }  

    }
}

// date Api
useEffect(()=>{

    const getData = new XMLHttpRequest();

    getData.open('GET', `https://api.ipgeolocation.io/timezone?apiKey=3e4a456b11e143b181561af5cbb77bc6&lat=${lat}&long=${lon}`, true);

    getData.onload =  function(){
    apiObjectDate = JSON.parse(this.response);    
    setDateR(apiObjectDate);
    }  

    getData.send();

},[lat, lon])

console.log(dateResult)

//save new location Name to array savedLocations; also bring up already city name to first line; limiting length to 5;
const savedLoc=()=>{
    if (savedLocations.includes(locationName)){
        delete savedLocations[savedLocations.indexOf(locationName)];
        savedLocations.unshift(locationName);
    }
    else{
        savedLocations.unshift(locationName);
    }
  savedLocations.length = 5;
}



  return {
    dateResult,
    locationName,
    locationResult,
    render: (
    <SearchContainer>
        <A>
            <First>
                <SearchInput >
                    <Input onChange={e=>setLocationName(e.target.value)}  id='locatioN' type='text' placeholder='City'/> 
                    <Input  onChange={e=>setCountryCode(e.target.value)}  id='countrycode' type='text' placeholder='Country'/> 
                </SearchInput>
                <Button onClick={getLocation}><FaSearch/></Button>
            </First>
            <Note>
            <span style={{color:'red'}}>note: </span>input country for accurate information.
            </Note>
        </A>
        <B>
            {/*array of saved locations */}
            {savedLocations.map((index)=>{
                return (
                    <CityNames key={index} onClick={()=>{  getLocation(); setLocationName(index);    savedLoc();}}>
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
    grid-template-columns: repeat(1,1fr) ;
    grid-template-rows: 50% 50% ;
    gap: 10px ;
    width:100% ;
    height:25% ;
    @media screen and (max-width: 800px){

        height: 70% ;
    }

`
const First = styled.div`
    display: grid ;
    grid-template-columns: 85% 15% ;

`
const SearchInput = styled.div`
    display:flex;
`
const Input = styled.input`
    width:50% ;
    height:100% ;
    background-color:transparent ;
    padding: 0px 5px 0px 10px ;
    font-size: 20px ;
    color: #fff ;
    border-top: 0 ;
    border-left:0 ;
    outline: none ;
    fill: background-color ;
    @media screen and (max-width: 800px){
        font-size:16px ;
}
    
`
const Button = styled.div`
    display:flex ;
    z-index:100 ;
    font-size: 20px ;
    align-items:center ;    background-color:gray ;
   justify-content: center;
   cursor:pointer ;
   
`
const Note = styled.div`
    color: gray ;
    font-size: 12px ;

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
    margin: 5px 0px 5px 10px ;
    align-items: center ;
    justify-content:left ;
    font-size: 20px ;
    color:gray;
    cursor: pointer;
    :hover{
        color: blue ;
    }
`