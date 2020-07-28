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
const DEFAULT_ZOOM = 4;


const IndexPage = () => {

  const { destinations } = useDestinations();



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
    <Layout pageName="about">
      <Helmet>
        <title>Location Mapping Wish List Web App</title>
      </Helmet>

      <Container type="content" className="text-center home-destinations">
        <h2>Locations</h2>
        <ul>
          {destinations.map((destination) => {
            const { id, name } = destination;
            return <li key={id}>{name}</li>;
          })}
        </ul>
      </Container>

    </Layout>
  );
};

export default IndexPage;
