import React from 'react';
import { Helmet } from 'react-helmet';
import { Marker, Popup } from 'react-leaflet';


import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import Snippet from 'components/Snippet';
import { useDestinations } from 'hooks';

const LOCATION = {
  lat: 27.7172,
  lng: 85.3240,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 8;


const IndexPage = () => {

  const { destinations } = useDestinations();


  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    if (!map) return;

  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>location Mapping Wish List Web App</title>
      </Helmet>


      <Map {...mapSettings}>
        {destinations.map((destination) => {
          const { id, name, location } = destination;
          const { longitude, latitude } = location;
          const position = [latitude, longitude];
          return (
            <Marker key={id} position={position}>
              <Popup>{name}</Popup>
            </Marker>
          );
        })}
      </Map>

    </Layout>
  );
};

export default IndexPage;
