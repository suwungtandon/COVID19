import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import {fetchMapData} from '../../api/apiCall';
import {Typography} from '@material-ui/core';

import styles from './CovidMap.module.css';

const {MAP_API} = process.env;
mapboxgl.accessToken = 'pk.eyJ1Ijoic25pcGVybGluZTA0NyIsImEiOiJja2FhM3U0a3QwOHA4MnJwOTN6a2NwNXRtIn0.eUT07JgDFwgAny6-Y7lFlA';

class CovidMap extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1,
      data: {},
      err: false,
    };
  }

  async componentDidMount() {
    const data = await fetchMapData();
    this.setState({data});

    try {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
      });
      
      let arr = [];

      data.forEach(report => {
        const {countryInfo, cases, deaths, recovered} = report;
        const value = {
          'type': 'Feature',
          'properties': {
            'description':
            `<img src=${countryInfo.flag} width="20" height="10" alt='flag'/><strong style={{paddingLeft: 20}}>${countryInfo.iso3}</strong><p>Total:${cases}</p><p>Deaths:${deaths}</p><p>Recovered:${recovered}</p>`,
            'icon': 'marker'
          },
          'geometry': {
            'type': 'Point',
            'coordinates': [countryInfo.long, countryInfo.lat]
          },
        };
        arr.push(value);
      });

      map.on('load', function() {
        map.addSource('places', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': arr
          }
        });

        map.addLayer({
          'id': 'places',
          'type': 'symbol',
          'source': 'places',
          'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
          }
        });
          
        var popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false
        });
          
        map.on('mouseenter', 'places', function(e) {
          map.getCanvas().style.cursor = 'pointer';
          
          var coordinates = e.features[0].geometry.coordinates.slice();
          var description = e.features[0].properties.description;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });
          
        map.on('mouseleave', 'places', function() {
          map.getCanvas().style.cursor = '';
          popup.remove();
        });
      })
    } catch (err) {
      this.setState({err: true})
      console.log(err);
    }
  }
  
  render() {
    return (
      <div className={styles.mapContainer}>
        <Typography>Hover over markers for info.</Typography>
        <div ref={el => this.mapContainer = el} className={styles.map}>
          {
            this.state.err ? <p style={{display: 'flex', textAlign: 'center', alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>Error loading map</p> : <div/>
          }
        </div>
      </div>
    );
  }
}
 
export default CovidMap;