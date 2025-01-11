import './App.css'
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const App = () => {
  return (
    <div id="map-container">
      <APIProvider apiKey={'AIzaSyDoqNMjgkzobbVUB0FwxGtsTQ77UlnWmMo'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
            style={{ width: '80%', height: '80%' }}
            defaultZoom={13}
            defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
            mapId='da37f3254c6a6d1c'
            onClick={ev => console.log('Lat lng: ', ev.detail.latLng)}
        >
        </Map>
      </APIProvider>
    </div>
  );
}

export default App
