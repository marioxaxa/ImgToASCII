import React from 'react'
import styled from 'styled-components';
import ImageIcon from '@mui/icons-material/Image';
import { handleFileDrop } from '../helpers/handleFileDrop';
import { AppContext } from '../App';
import { AppContextType } from '../@types/AppContext';

const CentralBoxStyled = styled.div`
    height:70%;
    width:50%;
    border-radius: 50px;
    background: #ab6363;
    box-shadow:  20px 20px 60px #915454,
             -20px -20px 60px #c57272;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const StyledText = styled.h1<{dragging?: boolean}>`
    color:${props => props.dragging ? '#d0a5a5' : '#f3e8e8'};
    font-size:2em;
    text-align: center;
`;

export default function CentralInputBox() {

    const {setImageURL} = React.useContext(AppContext) as AppContextType

    const boxRef = React.useRef<HTMLDivElement>(null)

    const [isDragging, setIsDragging] = React.useState(false)


    React.useEffect(() => {
        if (!boxRef.current) throw Error('boxRef is null.')

        boxRef.current.addEventListener('dragover', handleDragOver)
        boxRef.current.addEventListener('dragenter', handleDragEnter)
        boxRef.current.addEventListener('dragleave', handleDragLeave)
        boxRef.current.addEventListener('drop', handleDrop)

    }, [boxRef])

    function handleDragEnter(e: Event): void {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(true)
    }

    function handleDragLeave(e: Event): void {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)
    }

    function handleDragOver(e: Event): void {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(true)
    }

   function handleDrop(e: DragEvent) {

        handleFileDrop(e, setImageURL)
        
        setIsDragging(false)
    }

  return (
    <CentralBoxStyled ref={boxRef}>
                {isDragging ?
                    //TODO: Colocar um icon bonito para quando for soltar
                    <>
                        <ImageIcon sx={{
                            width: '70%',
                            height: '70%',
                            color: '#d0a5a5'
                        }} />
                        <StyledText
                            dragging
                        >
                            Drop Image Here
                        </StyledText>
                    </>
                    :
                    <>
                        <ImageIcon sx={{
                            width: '70%',
                            height: '70%',
                            color: '#f3e8e8'
                        }} />
                        <StyledText>
                            Drop Image Here
                        </StyledText>
                    </>
                }
            </CentralBoxStyled>
  )
}
