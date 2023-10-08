import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

export default function MarkerMapa(props) {

    const cor = {
        backgroundColor: '#ea580c'
    }

    return (
        <>
        {
            props.markersPositions.map((ocorrencia, index) => {
                return (
                <Marker style={cor} position={ocorrencia.coords} key={index}>
                    <Popup key={index}>
                        {ocorrencia.titulo}
                    </Popup>
                </Marker>)
            })
        }
        </>
    )

       
}