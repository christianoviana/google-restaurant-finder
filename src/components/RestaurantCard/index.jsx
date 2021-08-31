import React, {useState} from  'react';
import {Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';
import ReactStars from  'react-rating-stars-component';

import defaultImage from '../../assets/restaurant_default.png';
import { Skeleton } from '..';
 
const RestaurantCard = ({restaurant, onClick}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    edit={false}
                    isFalf={true}
                    value={restaurant.rating}                    
                    activeColor="#ffd700"
                />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto 
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl(): defaultImage} 
                onLoad={() => setImageLoaded(true)}
                alt="Foto do Restaurante"
            />
            {!imageLoaded && <Skeleton width="100%" height="100px"/>}
        </Restaurant>
    )
};

export default RestaurantCard;