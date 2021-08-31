import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
    overflow-x:hidden;
`;

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`;

export const Search = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #FFFFFF;
    padding: 10px;
`;

export const Logo = styled.img`
    margin: 15px;
    width:120px;
`;

export const MapContainer = styled.div`
    width:100%;
    height:100vh;
    position:relative;
`;

export const Carousel = styled.div`
    width:100%;
    margin-top:5px;
`;

export const CarouselTitle = styled.h1`
   font-family:${(props) => props.theme.fonts.regular};
   color: ${(props) => props.theme.colors.text};
   font-size:22px;
   font-weight:bold;
   padding: 10px;
`;

export const SliderCarousel = styled(Slider)`
    .slick-slide {
        margin-right:25px;
    }
`;

export const ResultLabel = styled.span`
    font-family:${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 12px;
    padding:15px;
`;

export const ModalTitle = styled.p`
    margin-bottom: 20px;
    letter-spacing: 0.11px;
    font-family:${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-heigth: 29px;
    font-size: 24px;
    font-weight: bold;
`;

export const ModalText = styled.p`
    letter-spacing: 0.11px;
    font-family:${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    line-heigth: 19px;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ModalTextBold = styled.span`
    ${ModalText};
    font-weight:bold;
`;