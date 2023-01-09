import React from 'react'
import styled from 'styled-components';
import { AppContext } from '../App';
import { AppContextType } from '../@types/AppContext';
import Canvas from './Canvas';

const CentralBoxStyled = styled.div`
    height:80%;
    width:90%;
    border-radius: 50px;
    background: #ab6363;
    box-shadow:  20px 20px 60px #915454,
             -20px -20px 60px #c57272;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
`

const ImgHolderStyled = styled.div`
    width:100%;
    height:100%;
    grid-row: 1 / 4;
    grid-column: 1 / 3;

    display:flex;
    justify-content:center;
    align-items:center;
`

const ASCIIHolderStyled = styled.div`
    width:100%;
    height:100%;
    grid-row: 1 / 4;
    grid-column: 4 / 6;

    display:flex;
    justify-content:center;
    align-items:center;
`

const ImgStyled = styled.img`
    height:clamp(100px, 90%, 375px);
    width:clamp(110px, 90%, 470px)
`

export default function CentralDisplayBox() {

    const { imageURL } = React.useContext(AppContext) as AppContextType

    return (
        <CentralBoxStyled>
            <ImgHolderStyled>
                <ImgStyled id='base-image' src={imageURL} />
            </ImgHolderStyled>
            <ASCIIHolderStyled>
                <Canvas />
            </ASCIIHolderStyled>
        </CentralBoxStyled>
    )
}
