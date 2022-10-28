import React from 'react';
import "./App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Circle, Popup, useMap } from 'react-leaflet'


function App() {

  React.useEffect(() => {
    const L = require("leaflet");

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
      iconUrl: require("leaflet/dist/images/marker-icon.png"),
      shadowUrl: require("leaflet/dist/images/marker-shadow.png")
    });
  }, []);

return (
  <MapContainer center={[47.36811, 7.97150]} zoom={15} scrollWheelZoom={true}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <Marker position={[47.36811, 7.97150]}>
    <Popup>
      AKW<br/>Gösgen
    </Popup>
  </Marker>

  <Circle center={[47.36811, 7.97150]} radius={[50000]}>
    
  </Circle>
  

</MapContainer>
  );
}

export default App;