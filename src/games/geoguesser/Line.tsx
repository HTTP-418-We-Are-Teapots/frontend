import { useMapEvents } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import { useEffect } from "react";

interface LineProps {
    latlong: number[][];
}

const Line: React.FC<LineProps> = ({latlong}) => {
    // Draw a line on the map
    const map = useMapEvents({});
      
    
    useEffect(() => {
      const handleDrawLine = () => {
        L.polyline(latlong as unknown as LatLngExpression[][], { color: "red" }).addTo(map);
        const markers = [
          L.marker(latlong[0] as unknown as LatLngExpression),
          L.marker(latlong[1] as unknown as LatLngExpression)
        ];
        const group = L.featureGroup(markers).addTo(map);
        map.fitBounds(group.getBounds());
        map.setZoom(2);
      }
    handleDrawLine();
  });

  return (
    null
  )
}

export default Line