import React from 'react'
import styled from 'styled-components';
import { AppContext } from '../App';
import { AppContextType } from '../@types/AppContext';
import Canvas from './Canvas';
import ConfigBox from './ConfigBox';
import DownloadButton from './DownloadButton';
import RestartButton from './RestartButton';

const CentralBoxStyled = styled.div`
    height:80%;
    width:90%;
    border-radius: 50px;
    background: #ab6363;
    box-shadow:  20px 20px 60px #915454,
             -20px -20px 60px #c57272;
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
`

const ImgHolderStyled = styled.div`
    width:100%;
    height:100%;
    color: #c57272;
    background: #ab6363;
    margin-left: 15px;
    margin-top: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 2px rgba(0,0,0,0.1),
    -5px -5px 10px #c57272,
    inset 5px 5px 10px rgba(0,0,0,0.1),
    inset -5px -5px 5px rgba(0,0,0,0.1);

    grid-row: 1 / 4;
    grid-column: 1 / 3;

    display:flex;
    justify-content:center;
    align-items:center;
`

const ASCIIHolderStyled = styled.div`
    width:100%;
    height:100%;
    color: #c57272;
    background: #ab6363;
    margin-left: -15px;
    margin-top: 15px;
    border-radius: 25px;
    box-shadow: 5px 5px 2px rgba(0,0,0,0.1),
    -5px -5px 10px #c57272,
    inset 5px 5px 10px rgba(0,0,0,0.1),
    inset -5px -5px 5px rgba(0,0,0,0.1);
    grid-row: 1 / 4;
    grid-column: 4 / 6;

    display:flex;
    justify-content:center;
    align-items:center;
`

const ImgStyled = styled.img`
    height:clamp(100px, 90%, 375px);
    width:clamp(110px, 90%, 470px);
    object-fit:contain;
`

export default function CentralDisplayBox() {

    const { imageURL } = React.useContext(AppContext) as AppContextType

    return (
        <CentralBoxStyled>
            <ImgHolderStyled>
                <ImgStyled id='base-image' src={imageURL} />
            </ImgHolderStyled>
            <RestartButton />
            <ASCIIHolderStyled>
                <Canvas />
            </ASCIIHolderStyled>
            <ConfigBox />
            <DownloadButton />
        </CentralBoxStyled>
    )
}
