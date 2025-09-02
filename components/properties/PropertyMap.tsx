'use client';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';
const iconUrl =
  'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png';
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

import { getCountryByCode } from '@/utils/countries';
import CountryFlagAndName from '../card/CountryNameAndFlag';
import Title from './Title';

function PropertyMap({ countryCode }: { countryCode: string }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  const location = getCountryByCode(countryCode)?.location ?? {lat: 0, lng: 0};

    const fixedLocation = [location?.lat, location?.lng] as [number, number]
  console.log(countryCode, location);

  return(
    <div className="mt-4">
        <div className="mb-4">
            <Title text="Where you will be staying" />
            <CountryFlagAndName country={countryCode} />
        </div>
        <MapContainer
            scrollWheelZoom={false}
            center={fixedLocation || defaultLocation}
            zoom={7}
            className='h-[40vh rounded-lg relative z-0'
            >
                 <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker
          position={fixedLocation || defaultLocation}
          icon={markerIcon}
        ></Marker>
            </MapContainer>
    </div>
  )

}

export default PropertyMap