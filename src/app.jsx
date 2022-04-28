import './css/App.css';
import { Wrapper } from '@googlemaps/react-wrapper';
import Map from './map';

const render = Status => {
  return <h1>{Status}</h1>
}

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Google Maps Demo</h1>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
        <Map />
      </Wrapper>
    </div>
  );
}

export default App;
