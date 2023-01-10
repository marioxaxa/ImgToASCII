import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { AppContextType } from '../@types/AppContext'

const ConfigHolderStyled = styled.div`
    width:100%;
    height:100%;
    grid-row: 4 / 6;
    grid-column: 1 / 6;
    display:flex;
    justify-content:center;
    align-items:center;
`

const SliderHolderStyled = styled.div`
    width:30%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
    background:linear-gradient(to bottom, rgba(0,0,0,0.05), #ab6363;);
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



export default function ConfigBox() {

    const { asciiObj } = React.useContext(AppContext) as AppContextType

    const [cellSizeValue, setCellSizeValue] = React.useState<number>(1)

    React.useEffect(() => {
        if (!asciiObj) return
        asciiObj.draw(cellSizeValue)
    }, [cellSizeValue])

    function handleChange(v: string): void {
        setCellSizeValue(parseInt(v))
    }

    return (
        <ConfigHolderStyled>
            <SliderHolderStyled>
                <SliderStyled
                    type='range'
                    min='1'
                    max='10'
                    onChange={(v) => { handleChange(v.target.value) }}
                    value={cellSizeValue}
                />
                <SliderTextStyled>
                    {cellSizeValue}
                </SliderTextStyled>
            </SliderHolderStyled>
        </ConfigHolderStyled>
    )
}
