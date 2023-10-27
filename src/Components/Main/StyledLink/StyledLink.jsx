import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
text-decoration: none;
background-color: rgb(255, 255, 255);
color: #000000;
padding: .5rem;
border-radius: 10px;
font-size: .85rem;
margin: .25rem;

&:hover{
    transform: scale(0.9);
    background-color:  rgb(82, 82, 82);
    transition: all .3s ease;
}
`