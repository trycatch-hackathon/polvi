import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerMapa from './markers'

export default function Map() {
    const position = [-22.44969, -42.97776];
    const markersPositions = [
        {coords : [-22.44969, -42.97776],
         titulo: 'CBF'
        },
        {coords : [-22.43729,-42.98121],
         titulo: 'Feso'
        },
        {coords : [-22.441054, -42.994069],
         titulo: 'Paulo velho'
        },
        {coords : [-22.43636, -42.97870],
         titulo: 'Paulo novo'
        }
    ];
    return (
        <MapContainer className="h-screen-nav w-full" center={position} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerMapa markersPositions={markersPositions}/>
        </MapContainer>
    )
}