import './App.css';
import Home from './components/Home';
import thunder from '../src/media/thunder.jpg'
import rain from '../src/media/rain.jpg'
import day from '../src/media/day.jpg'
import night from '../src/media/night.jpg'
import styled from 'styled-components';
import useSearch from './components/Search';

function App() {
  //getting my useSearch returned object
  const locationInfo = useSearch();


  const WeatherBackground = () =>{
    if (locationInfo.locationResult.list[0].weather[0].main === 'Rain'){
        return rain
    }
    else if (locationInfo.locationResult.list[0].weather[0].main === 'Thunderstorm'){
      return thunder
    }
    else{
      if (locationInfo.locationResult.list[0].sys.pod === 'd'){
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
      <Home locationResult={locationInfo.locationResult} dateResult={locationInfo.dateResult} render={locationInfo.render}/>
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