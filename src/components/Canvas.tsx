import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App'
import { AppContextType } from '../@types/AppContext';
import { AsciiClass } from '../@types/AsciiClass';


const CanvasStyled = styled.canvas`
    height:clamp(100px, 90%, 375px);
    width:clamp(110px, 90%, 470px);
    object-fit:contain;
`

export default function Canvas() {

    const { imageURL, setAsciiObj } = React.useContext(AppContext) as AppContextType

    React.useEffect(() => {
        if (imageURL) {
            const canvas = document.querySelector<HTMLCanvasElement>('#canvas')
            if(!canvas) throw Error('Canvas não existe')

            const ctxCanvas = canvas.getContext('2d')
            if(!ctxCanvas) throw Error('CtxCanvas não existe')

            const baseImage = new Image()
            baseImage.src = imageURL
            

            baseImage.onload = () => {
                canvas.width = baseImage.width
                canvas.height = baseImage.height
                const asciiImage = new AsciiClass(ctxCanvas, baseImage.width, baseImage.height, baseImage)
                setAsciiObj(asciiImage)
                asciiImage.draw(1)
            }
            
        }
    }, [imageURL])

  return (
    <CanvasStyled id='canvas' />
  )
}
