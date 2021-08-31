import { Fragment, useState } from 'react';
import { Container, Search, Logo, Wrapper, Carousel, CarouselTitle, SliderCarousel, MapContainer, ResultLabel, ModalTitle, ModalText, ModalTextBold } from './styles';
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';
import logo from '../../logo.svg';

import {useSelector} from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import defaultImage from '../../assets/restaurant_default.png';

const Home = () => {
    const [query, setQuery] = useState("");
    const [searchText, setSearchText] = useState("");
    const [placeId, setPlaceId] = useState("");
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay:true,
        slidesToShow: 2,
        swipeToSlide: true,
        adaptiveHeight:true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 2,
                swipeToSlide: true,
                adaptiveHeight:true
              }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    swipeToSlide: true,
                    adaptiveHeight:true
                }
            }
        ]
    };

    const { restaurants, selectedRestaurant } = useSelector((state) => {
        return state.restaurants;
    })

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            search(searchText);
        }
    }

    function search(value){
        setQuery(value);
    }

    function onClose(){
        setModalOpened(false);
    }

    function handleOpenModal(placeId){
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo Itens Pesquisados" />
                    <TextField
                        label='Pesquisar'
                        outlined='true'
                        onTrailingIconSelect={() => search(searchText)}
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                        value={searchText}                
                        onChange={(e) => setSearchText(e.currentTarget.value)}
                        onKeyPress={handleKeyPress}
                         />
                    </TextField>  
                    {restaurants.length > 0 ? (
                    <Fragment>
                       <Carousel>
                         <CarouselTitle>Na sua Área</CarouselTitle>
                         <SliderCarousel {...settings}>
                             {restaurants.map((restaurant) => (
                                 <Card 
                                     image={restaurant.photos ? restaurant.photos[0].getUrl(): defaultImage} 
                                     title={restaurant.name} />
                 
                             ))}                                               
                         </SliderCarousel>
                        </Carousel>  
                     </Fragment>         
                    ): (<Loader />
                    )}                                          
                </Search>   
                {restaurants.length > 0 && restaurants.map((restaurant) => (
                    <RestaurantCard onClick={() => handleOpenModal(restaurant.place_id)} restaurant={restaurant}/>                   
                ))}                         
            </Container>
            <MapContainer>
                <Map placeId={placeId} query={query}/>         
            </MapContainer>
            <Modal open={modalOpened} onClose={onClose}>
                {selectedRestaurant ? (
                    <Fragment>
                        <ModalTitle>{selectedRestaurant?.name}</ModalTitle>
                        <ModalText><ModalTextBold>Phone Number:</ModalTextBold> {selectedRestaurant?.formatted_phone_number}</ModalText>
                        <ModalText><ModalTextBold>Address:</ModalTextBold> {selectedRestaurant?.formatted_address}</ModalText>
                        <ModalText><ModalTextBold>Status:</ModalTextBold> {selectedRestaurant && (selectedRestaurant?.opening_hours?.open_now ? 'Aberto agora :)' : 'Fechado neste momento :(')}</ModalText>            
                    </Fragment>
                ) : (
                    <Fragment>
                        <Skeleton width="80%" height="10px" /> 
                        <Skeleton width="100%" height="10px" /> 
                        <Skeleton width="100%" height="10px" /> 
                        <Skeleton width="100%" height="10px" /> 
                    </Fragment>               
                )}
            </Modal>

        </Wrapper>
    );
}

export default Home;