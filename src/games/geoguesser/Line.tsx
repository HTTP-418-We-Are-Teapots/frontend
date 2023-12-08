import { useMapEvents } from "react-leaflet";
import L, { LatLngExpression, Layer } from "leaflet";
import { useEffect, useState } from "react";

interface LineProps {
    latlong: number[][];
    isValidate: boolean;
    setGlobalPrecision: React.Dispatch<React.SetStateAction<number[]>>;
}

const Line: React.FC<LineProps> = ({latlong, isValidate, setGlobalPrecision}) => {
    // Draw a line on the map
    const map = useMapEvents({});
    const [distance, setDistance] = useState(0);
    const [precision, setPrecision] = useState(0); 
      
    
    useEffect(() => {
      const handleDrawLine = () => {
        L.polyline(latlong as unknown as LatLngExpression[][], { color: "lightGrey", dashArray: "5 3 1" }).addTo(map);

        const markers = [
          L.marker(latlong[0] as unknown as LatLngExpression),
          L.marker(latlong[1] as unknown as LatLngExpression)
        ];

        const group = L.featureGroup(markers).addTo(map);
        map.fitBounds(group.getBounds());
        map.setZoom(1);

        setDistance(Math.round(markers[0].getLatLng().distanceTo(markers[1].getLatLng()) / 1000));
        const currentPrecision = Math.round((1 - (markers[0].getLatLng().distanceTo(markers[1].getLatLng()) / 10000000)) * 100);
        const verifiedPrecision = Math.sign(currentPrecision) === -1 ? 0 : currentPrecision;
        setPrecision(verifiedPrecision);
        setGlobalPrecision((old) => [...old, verifiedPrecision]);
      }

      const handleRemoveLine = () => {
        const layerTab: Layer[] = [];
        map.eachLayer((layer) => {
          if (layer instanceof L.Polyline || layer instanceof L.Marker) { 
            layerTab.push(layer);
          }
        });

        layerTab.forEach((layer, index) => {
          if (index === 0) return;
          map.removeLayer(layer);
        })
      }
      handleDrawLine();

      return () => {
        handleRemoveLine();
      }
  }, [isValidate]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
    <p style={{
      position: 'relative',
      zIndex: 1000000,
      width: 'fit-content',
      color: 'white',
      fontWeight: 'bold',
      textShadow: '0 0 5px black',
      textAlign: 'center'
      }}>
    Distance : {distance}km <br />
    Précision : {precision}%
    </p>
    </div>
  )
}

export default Line;