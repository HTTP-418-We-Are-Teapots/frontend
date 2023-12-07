import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

interface CustomMarkerProps {
    isValidate: boolean;
    callback: React.Dispatch<React.SetStateAction<number[]>>;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ isValidate, callback }) => {

    // Bordeaux coordinates by default
    const initialPosition = [44.837789, -0.57918];
    const [markerPosition, setMarkerPosition] = useState(initialPosition);
    const [markerOpacity, setMarkerOpacity] = useState(0);
  
     const map = useMapEvents({
      click(event) {
        if (isValidate) return;

        const clickPosition = map.mouseEventToLatLng(event.originalEvent);
        setMarkerPosition([clickPosition.lat, clickPosition.lng])
        callback([clickPosition.lat, clickPosition.lng]);

        if (markerOpacity === 0) setMarkerOpacity(1);
      },
    })

  return (
    <Marker position={markerPosition as LatLngExpression} opacity={markerOpacity}>
      <Popup>You are here</Popup>
    </Marker>

  )
}

export default CustomMarker;