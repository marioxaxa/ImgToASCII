import React from 'react';
import styled from 'styled-components';
import { AppContextType } from './@types/AppContext';
import CentralInputBox from './components/CentralInputBox';
import CentralDisplayBox from './components/CentralDisplayBox';
import { AsciiClass } from './@types/AsciiClass';

const StyledApp = styled.div`
    background:#ab6363;
    height:100%;
    width:100%;
    position:absolute;
    display:flex;
    justify-content:center;
    align-items:center;
`

export const AppContext:any = React.createContext<AppContextType | null>(null)

function App() {

    const [imageURL, setImageURL] = React.useState<string | null>(null)

    const [asciiObj, setAsciiObj] = React.useState<AsciiClass | null>(null)

    //!IMPORTANTE
    //TODO: REDUZIR RESOLUÇÃO DE IMAGENS MT GRANDES
   
    return (
        <AppContext.Provider value={{imageURL, setImageURL,asciiObj, setAsciiObj}}>
            <StyledApp>
                {imageURL ? <CentralDisplayBox /> : <CentralInputBox />}
            </StyledApp>
        </AppContext.Provider>
    );
}

export default App;
