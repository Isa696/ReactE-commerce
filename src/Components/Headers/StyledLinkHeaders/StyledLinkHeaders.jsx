import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkHeaders = styled(Link)`
    text-decoration: none;
    list-style: none;
    display: inline-block;
    color: #ffffff;
    border-radius: 5px;
    border: 1px solid #262526;
    padding: 0.5em;
    font-size: medium;
    &:hover{
        transform: scale(0.9);
        background-color:  rgb(82, 82, 82);
        color: rgb(0, 0, 0);
        transition: all .3s ease;
}
`