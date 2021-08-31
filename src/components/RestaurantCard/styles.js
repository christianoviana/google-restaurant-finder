import styled from 'styled-components';

export const Restaurant = styled.div`
    display:flex;
    justify-content: space-between;
    cursor:pointer;
    margin-top:5px;
    padding:15px;
    background-color: #FFFFFF;
    border-left: 4px solid transparent;
    :hover{        
        background-color: ${(props) => props.theme.colors.background};
        border-left-color: ${(props) => props.theme.colors.primary};
    }
`;

export const RestaurantInfo = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Title = styled.span`
    font-family:${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size:22px;
    font-weight:bold;
    margin:5px 0px;
`;

export const Address = styled.p`
    font-family:${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
    margin: 5px 0px;
`;

export const RestaurantPhoto = styled.img`
    display: ${(props)=> (props.imageLoaded ? 'block': 'none')};
    width: 100px;
    height: 100px;
    object-fit:cover;
    border-radius:5px;
`;