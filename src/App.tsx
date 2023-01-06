import React from 'react';
import styled from 'styled-components';
import ImageIcon from '@mui/icons-material/Image';
import { handleFileDrop } from './helpers/handleFileDrop';

const StyledApp = styled.div`
    background:#ab6363;
    height:100%;
    width:100%;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
`

const CentralBox = styled.div`
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

const StyledText = styled.h1`
    color:#f3e8e8;
    font-size:2em;
    text-align: center;
`;

function App() {

    const boxRef = React.useRef<HTMLDivElement>(null)

    const [isDragging, setIsDragging] = React.useState(false)

    const [imageURL, setImageURL] = React.useState(null)

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

    function handleDrop(e: DragEvent): void {

        let image = handleFileDrop(e)
        console.log(image)
        setImageURL(image)

        setIsDragging(false)
    }

    return (
        <StyledApp>
            <CentralBox ref={boxRef}>
                {isDragging ?
                    //TODO: Colocar um icon bonito para quando for soltar
                    <>
                        <ImageIcon sx={{
                            width: '70%',
                            height: '70%',
                            color: '#1dbc17'
                        }} />
                        <StyledText>
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

            </CentralBox>
        </StyledApp>
    );
}

export default App;
