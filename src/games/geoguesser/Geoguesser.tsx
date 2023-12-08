import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import CustomMarker from './CustomMarker';
import Line from './Line';
import styles from './geoguesser.module.css';


interface MapPoint {
  imageURL: string,
  lat: number,
  lng: number,
}

const mapPoints: MapPoint[] = [
  {
    imageURL: "/geoguesser/cyclone.jpg",
    lat: -18.6696553, 
    lng: 35.5273354,
  },
  {
    imageURL: "/geoguesser/eau.jpg",
    lat: 20.593684,
    lng: 78.96288,

  },
  {
    imageURL: "/geoguesser/feu.jpg",
    lat: 44.6307720,
    lng: -1.2027130
  },
  {
    imageURL: "/geoguesser/secheresse.jpg",
    lat: -30.204517,
    lng:  -59.641954
  },
  {
    imageURL: "/geoguesser/tornade.jpg",
    lat: 38.4499982,
    lng: -96.5333312
  }
];


// Valier
// Mettre le deuxième marker
// Mettre le trait qui relie les deux markers
// Dire la distance entre les deux markers
// Changer le texte du bouton valider en continuer

const Geoguesser: React.FC = () => {

  const [index, setIndex] = useState(0);
  const [isValidate, setIsValidate] = useState(false);
  const [position, setPosition] = useState<number[]>([0, 0]);
  const [data, setData] = useState<number[]>([]);

  const [dataToStore, setDataToStore] = useState<{
    questionId: number;
    score: number;
  }[]>([]);
  const [dataResponse, setDataResponse] = useState<boolean>();

  useEffect(() => {
    if (index === 0) {
      const startGeoGuessr = async () => {
        const request = await fetch("/stat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: "geoGuessrStarted",
          }),
        });
        const response = request.ok;
        setDataResponse(response);
      }
      startGeoGuessr();
      if (!dataResponse) console.error("Error while sending data to the backend");
    }

    if (index === mapPoints.length - 1) {
      const averagePrecision = data.reduce((a, b) => a + b, 0) / data.length;
      console.log(averagePrecision);

      setDataToStore(data.map((score, index) => ({
        questionId: index + 1,
        score,
      })));

      const result = async () => {
        const request = await fetch("/stat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event: "geoGuessrFinished",
            data: dataToStore
          }),
        });
        const response = request.ok;
        setDataResponse(response);
      }
      result();
      if (!dataResponse) console.error("Error while sending data to the backend");
      
      return;
    }
  }, [index]);


  const handleValidate = () => {
    setIsValidate((prev) => !prev);
    if (isValidate) setIndex((prev) => prev + 1);
  }

  return (
    <div className={styles.geoguesserContainer}>
      <img className={styles.img} src={mapPoints[index].imageURL} alt="Image d'une catastrophe" />
        <div className={styles.mapContainer}>
          <button className={styles.button} onClick={handleValidate}>{isValidate ? "Continuer" : "Valider"}</button>
          <MapContainer
            center={[60.837789, 45.5273354]}
            zoom={2}
            scrollWheelZoom={true}
            className={styles.map}
          >
            <TileLayer url="https://api.mapbox.com/styles/v1/dropy/clpvmvl0j01hl01pk2u0bb4eg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZHJvcHkiLCJhIjoiY2xhOWN6eW51MGN0MjNubnZlcnp6cWNzZiJ9.YDH8e-3E2EzjBVfko__pjA" />
            <CustomMarker isValidate={isValidate} callback={setPosition} />
            {isValidate && position != undefined && <Line latlong={[[position[0], position[1]],[mapPoints[index].lat, mapPoints[index].lng]]} isValidate={isValidate} setGlobalPrecision={setData} />}
          </MapContainer>
        </div>
    </div>
  );


  /**
  * TODO
  * 
  * - Image en background
  * - Indice écrit expliquant ce que l'image représente (accessibilité)
  * - Map Leaflet en bas de la page qui fait toute la largeur
  * - Agrandissement de la Map sur hover
  * - Définir une limite à partir de laquelle le score est nul
  * - Définir une échelle de distance menant à un pourcentage de précision
  * - Stocker la valeur moyenne de précision du joueur pour l'envoyer au backend
  */

  /**
  * IMAGES
  * 
  * - Cyclone Kenneth au Mozambique, Afrique du Sud : Mozambique_Cyclone Kenneth.jpg
  * # Coordonnées : -18.6696553 35.5273354 (Mozambique)
  * # Source image : 
  * # Sources études/articles : 
  * 
  * - Feu forestier au Pyla, Arcachon, France : pyla.jpg
  * # Coordonnées : 44.6307720 -1.2027130 (Forêt du Pyla)
  * # Source image : 
  * # Sources études/articles : 
  *
  * - Sécheresse du fleuve Parana, Argentine, Amérique du Sud : secheresse_parana.jpg
  * # Coordonnées : -30.204517 -59.641954 (Milieu du fleuve)
  * # Source image : https://up-magazine.info/wp-content/uploads/2021/08/secualim00.jpg
  * # Sources études/articles : 
  * https://up-magazine.info/securite-alimentaire-2/securite-alimentaire/92380-les-catastrophes-climatiques-de-2021-sonnent-lalarme-sur-la-securite-alimentaire/
  * https://fr.euronews.com/2021/08/10/rapport-du-giec-les-experts-analysent-la-situation-preoccupante-en-amerique-latine
  * - Augmentation du risque de tornades au Kansas, Etats-Unis, Amérique du Nord : usa.jpg
  * # Coordonnées : 38.4499982 -96.5333312 (Centre du Kansas)
  * # Source image : https://www.meteo-paris.com/uploads/FRj-QOUXIAA-peZ.jpg
  * # Sources études/articles : 
  * https://www.meteo-paris.com/actualites/tornades-aux-usa-debut-de-la-haute-saison
  * 
  * - Inondations en Inde, Asie : eau.jpg
  * # Coordonnées : 20.593684 78.96288 (Centre de l'Inde)
  * # Source image : https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/06/18/18/Au-moins-59-morts-lors-de-pluies-de-mousson-au-Bangladesh-et-en-Inde.jpg?VersionId=LHwYZMUQjBiyqLTkGqtgZ0ylQRoG_gvz
  * # Sources études/articles :
  * https://www.france24.com/fr/asie-pacifique/20230814-inde-de-fortes-inondations-et-des-glissements-de-terrain-font-une-soixantaine-de-morts
  * https://www.adaptation-changement-climatique.gouv.fr/dossiers-thematiques/impacts/inondation
  *
  */

  /**
   * DATA MODEL
   * 
   * {
   *  event: 'geoGuesserEvent',
   *  data: {
   *    [
   *    {questionId: 1, score: 84},
   *    {questionId: 2, score: 12},
   *    {questionId: 3, score: 0},
   *    {questionId: 4, score: 100},
   *    {questionId: 5, score: 0},
   *    ] 
   *  }
   * }
   */

}

export default Geoguesser;

//https://www.oxfam.org/fr/changement-climatique-cinq-catastrophes-naturelles-qui-demandent-une-action-durgence

/*
return (
  <Marker
  position={[position.latitude, position.longitude]}
  key={name}
  title={address}
  eventHandlers={{
    click: () => {
      map.flyTo([position.latitude, position.longitude], 16);
    },
  }}
  >
  <Popup>
  <div>
  <h3>Vous êtes à la station {name}</h3>
  <h3>
  Elle est actuellement
  {status === "OPEN" ? " ouverte" : " fermée"}
  </h3>
  <h3>
  Il y a
  {bikes === "0"
  ? " Aucun vélo disponible"
  : ` ${bikes} vélos disponibles`}
  actuellement dont:
  </h3>
  <h3>
  {electricalBikes === "0"
  ? " Aucun vélo electrique"
  : ` ${electricalBikes} vélos electriques`}
  </h3>
  <h3>
  {mechanicalBikes === "0"
  ? " Aucun vélo mécanique"
  : ` ${mechanicalBikes} vélos mécaniques`}
  </h3>
  <h3>Pour une capacité totale de {maxCapacity} vélos.</h3>
  </div>
  </Popup>
  </Marker>
  );
  */