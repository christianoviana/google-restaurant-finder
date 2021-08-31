import React, {useState, useEffect} from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';

import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) =>{
    const dispatch = useDispatch();

    const { restaurants } = useSelector((state) => {
        return state.restaurants;
    })

    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;

    useEffect(() => {
        console.log(query);
        if(query){
            searchByQuery(query);
        }
    }, [query]);

    useEffect(() => {
        console.log(placeId);
        if(placeId){
            getRestaurantDetails(placeId);
        }
    }, [placeId]);

    function getRestaurantDetails(placeId){
        dispatch(setRestaurant(null));
        
        const service = new google.maps.places.PlacesService(map);

        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number']
        };

        service.getDetails(request, (place, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log(place)
                dispatch(setRestaurant(place));
            }
        });
    }

    function searchByQuery(query){
        dispatch(setRestaurants([]));

        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: 200,
            type: ['restaurant'],
            query
        };

        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispatch(setRestaurants(results));
            }
        });
    }

    function searchNearBy(map, center){
        dispatch(setRestaurants([]));
        
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: 20000,
            type: ['restaurant']
        };

        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK){
                dispatch(setRestaurants(results));
            }
        });
    }

    function onMapReady(_, map){
        setMap(map);
        searchNearBy(map, map.center);
    }

    return (
        <Map
            google={google}
            style={{width: '100%', height: '100vh', position: 'relative'}}
            centerAroundCurrentLocation
            zoom={15}
            onReady={onMapReady}
            onRecenter={onMapReady}
            {...props}
        >
            {restaurants.map((restaurant) => (
                <Marker 
                    key={restaurant.place_id} 
                    name={restaurant.name} 
                    position={{ 
                            lat: restaurant.geometry.location.lat(),
                            lng: restaurant.geometry.location.lng(),
                    }}
                />
            ))}      
        </Map>
    );
}

export default GoogleApiWrapper({
      apiKey: process.env.REACT_APP_GOOGLE_KEY,
      language: 'pt-BR',
    }
  )(MapContainer)