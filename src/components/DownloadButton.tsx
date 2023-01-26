import styled from 'styled-components'
import DownloadIcon from '@mui/icons-material/Download';

export const StyledButton = styled.button`

    width:13vmin;
    height:13vmin;
    grid-row: 4;
    grid-column: 3;
    justify-self:center;
    align-self:center;
    display:flex;
    justify-content:center;
    align-items:center;
    appearance:none;
    background:transparent;
    background-color: #c57272;
    border-radius:50%;
    border:7px solid #c57272;
    box-shadow:  5px 5px 15px #915454,
             -5px -5px 15px #c57272;
    
    :active{
    box-shadow:5px 5px 15px #915454,
    -5px -5px 15px #c57272,
    inset 5px 5px 15px #915454,
    inset -5px -5px 15px #c57272;
    }
`

export default function DownloadButton() {

    function download() {
        var link = document.createElement('a');
        link.download = 'asciiImage.png';
        if (!document.querySelector<HTMLCanvasElement>('#canvas')) throw Error('Canvas não existe')
        link.href =  document.querySelector<HTMLCanvasElement>('#canvas')!.toDataURL()
        link.click();
    }

  return (
    <StyledButton onClick={download}>
        <DownloadIcon 
            sx={{
                width: '100%',
                height: '100%',
                color: '#f3e8e8',
                '&:active': {
                    color: '#d0a5a5'
                }
            }}
        />
    </StyledButton>
  )
}
