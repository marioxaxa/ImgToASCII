import React from 'react';
import styled from 'styled-components';
import ImageIcon from '@mui/icons-material/Image';

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

const StyledText = styled.p`
    color:'#f3e8e8';
    font-size:2em;
`;

function App() {
    return (
        <StyledApp>
            <CentralBox>
                <ImageIcon sx={{ fontSize: 300, color: '#f3e8e8' }} />

            </CentralBox>
        </StyledApp>
    );
}

export default App;
