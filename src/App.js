import './App.css';
import Home from './components/Home';
import thunder from '../src/media/thunder.jpg'
import rain from '../src/media/rain.jpg'
import day from '../src/media/day.jpg'
import night from '../src/media/night.jpg'
import styled from 'styled-components';
import useSearch from './components/Search';
import dayjs from 'dayjs';

function App() {

  const locationInfo = useSearch();  //getting my useSearch returned object

  //method for background Image display
  const WeatherBackground = () =>{
    if (locationInfo.locationResult.location.currentConditions.icon === 'rain'||
    locationInfo.locationResult.location.currentConditions.icon === 'showers-day'||
    locationInfo.locationResult.location.currentConditions.icon === 'showers-night'){
        return rain
    }
    else if (locationInfo.locationResult.location.currentConditions.icon === 'thunder-rain'){
      return thunder
    }
    else{
      if (
        (
          (((((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('h') >= '1')&&((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('h')<='6'))||((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('h')==='12'))
          &&((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('A')==='PM'))
        )
        ||(
            ((((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('A')==='AM')&&((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('h')>=6))&&((dayjs(((locationInfo.dateResult.date_time_ymd).slice(0,19)))).format('h')<=11))
          )
        )

      {
        return day
      }
      else{
        return night
      }
    }

  }


  return (
    <div className="App">
      <BackgroundImage>
        <Img src={WeatherBackground()}></Img>
      </BackgroundImage>
      <Home locationResult={locationInfo.locationResult.location} dateResult={locationInfo.dateResult} render={locationInfo.render}/>
    </div>
  );
}

export default App;

const BackgroundImage= styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: -10;
`
const Img = styled.img`
height:100% ;
width:100% ;
object-fit: cover ;
`