import styled from 'styled-components';

export const DivSearch = styled.div`
    padding:1em;
    display: flex;
    justify-content: center;
`

export const Btn = styled.button`
    border-radius: 0.5em;
    margin-left: 9.7em;
    margin-top: 0.35em;
    padding: 0.3em;
    
    background-color: #69747c;
    color: #fcfefb;
    font-weight: 700;
    font-size: 1em;
    transform-style: preserve-3d;
    transform: translateZ(-20px) rotateX(20deg);
    position:absolute;
    &:hover {
        background-color:#545454 ;
        color:#fcfefb ;
        cursor: pointer;
    }
`

export const Input = styled.input`
border-radius: 0.5em;
background-color:#ececec;
margin-left: 0.5em;
padding: 0.6em;
border: solid rgb(12, 20, 69);
color: #69747c;
font-weight: 700;
font-size: 1em;
position:relative;
transform-style: preserve-3d;
transform: translateZ(-10px) rotateX(10deg);

`;