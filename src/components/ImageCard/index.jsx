import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-end;
    width:120px;
    height:120px;
    border-radius: 5px;
    background-image: url(${(props) => props.image});
    background-size:cover;
    margin:0px;
    padding:0px;
`;

const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #FFFFFF;
  weight:bolder;
  text-align:center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  width:100%;
  height: 32px;
`;

const ImageCard = ({image, title}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(()=>{
      const img = new Image();
      img.src = image;
      img.onload = () => setImageLoaded(true);
    }, [image])

    return (
      <>
      { imageLoaded ? (
        <Card data-testid="card" image={image}>
          <Title>{title.length > 20 ? title.substring(0, 20).concat('...'): title}</Title>
        </Card>
      ):(
        <Skeleton width="100%" height="100px"/>
      )}
      </>
    );
}

export default ImageCard;