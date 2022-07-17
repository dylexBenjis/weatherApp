import './App.css';
import Home from './components/Home';
import Image from '../src/media/pexels-szabó-viktor-3227984.jpg'
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BackgroundImage/>
      <Home/>
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
z-index: -1;
background-color:blue ;
background-image:url(${Image}) ;
`