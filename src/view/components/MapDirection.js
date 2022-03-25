import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1Ijoiem9uYWV0IiwiYSI6ImNsMTRtcHRpMDBnbTkzY3Fhd3AyZzdyNDgifQ.x1esIEigoosj0peYGpX_Qw';

const MapDirection = () => {

     useEffect(()=>{
          const map = new mapboxgl.Map({
               container: 'map',
               style: 'mapbox://styles/mapbox/streets-v11',
               center: [90.412521, 23.8103318],
               zoom: 13
               });
                
               map.addControl(
               new MapboxDirections({
               accessToken: mapboxgl.accessToken
               }),
               'top-left'
               );

               /* // Create a default Marker and add it to the map.
               const marker1 = new mapboxgl.Marker()
               .setLngLat([90.412521, 23.8103318])
               .addTo(map);
               
               // Create a default Marker, colored black, rotated 45 degrees.
               const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
               .setLngLat([90.412521, 23.8103318])
               .addTo(map); */
     },[])

     return (
          <div>
               <div id="map"></div>

          </div>
     );
};

export default MapDirection;