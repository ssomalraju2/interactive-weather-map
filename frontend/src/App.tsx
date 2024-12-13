import { MapContainer, TileLayer } from 'react-leaflet';
import './App.css'
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <>
      <div>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '800px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
      </div>
    </>
  )
}

export default App
