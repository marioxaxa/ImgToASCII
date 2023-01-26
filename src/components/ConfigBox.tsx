import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { AppContextType } from '../@types/AppContext'

import BackgroundCheckBox from './BackgroundCheckBox';

const SliderHolderStyled = styled.div`
    width:60%;
    height:10%;
    grid-row: 4 / 5;
    grid-column: 1 / 3;
    justify-self:center;
    align-self:center;
    position:relative;

    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;

    background:linear-gradient(to bottom, rgba(0,0,0,0.05), #ab6363);
    border-radius: 40px;
    box-shadow: 15px 15px 20px rgba(0,0,0,0.1), 
    -15px -15px 20px #c57272;
`

const SliderStyled = styled.input`
    width: 400px;
    height: 15px;
    appearance:none;
    background: #ab6363;
    outline: none;
    border-radius: 15px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1),
    -5px -5px 10px #c57272,
    inset 5px 5px 5px rgba(0,0,0,0.1);
    overflow:hidden;

    ::-webkit-slider-thumb{
        appearance:none;
        width:15px;
        height:15px;
        background: #c57272;
        border-radius:50%;
        border: 2px solid #fff;
        box-shadow: -407px 0 0 400px #fff;
        cursor:pointer;
    }
`

const SliderTextStyled = styled.div`
    position:relative;
    text-align:center;
    width: 60px;
    font-size: 1.25em;
    color: #c57272;
    background: #fff;
    margin-left: 15px;
    border-radius: 25px;
    font-weight: 500;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
    -5px -5px 10px #c57272,
    inset 5px 5px 10px rgba(0,0,0,0.1),
    inset -5px -5px 5px rgba(255,255,255,0.25);
`

const ColorHolderStyled = styled.div`
    width:100%;
    height:100%;
    grid-row: 4 / 5;
    grid-column: 4 / 6;
    justify-self:center;
    align-self:center;
    position:relative;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

const ColorStyled = styled.input`
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    width:7vmin;
    height:7vmin;
    background-color:transparent;
    border:4px solid #c57272;
    border-radius:10px;

    ::-webkit-color-swatch {
        border-radius:10px;
        border:none;
    }

`



export default function ConfigBox() {

    const { asciiObj } = React.useContext(AppContext) as AppContextType

    const [cellSizeValue, setCellSizeValue] = React.useState<number>(1)

    const [backgroundColor, setBackgroundColor] = React.useState<string>('#000000')

    const [checkBackground, setCheckBackground] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (!asciiObj) return
        asciiObj.draw(cellSizeValue, checkBackground, backgroundColor)
    }, [cellSizeValue, backgroundColor, checkBackground])

    function handleSliderChange(v: string): void {
        setCellSizeValue(parseInt(v))
    }

    function handleColorChange(v: string): void {
        setBackgroundColor(v)
    }

    

    /** 
     * TODO:
     * Deixar color input bonito
     * Opção para não ter fundo
     * Botão de download
     * Botão de reset
     */

    return (
        <>
            <SliderHolderStyled>
                <SliderStyled
                    type='range'
                    min='1'
                    max='10'
                    onChange={(v) => { handleSliderChange(v.target.value) }}
                    value={cellSizeValue}
                />
                <SliderTextStyled>
                    {cellSizeValue}
                </SliderTextStyled>
            </SliderHolderStyled>

            <ColorHolderStyled>
                <BackgroundCheckBox checkBackground={checkBackground} setCheckBackground={setCheckBackground} />
                <ColorStyled
                    type='color'
                    onChange={(v) => { handleColorChange(v.target.value) }}
                    value={backgroundColor}
                />
            </ColorHolderStyled>

        </>
    )
}
