import React from 'react';
import styled from 'styled-components';
import { AppContextType } from './@types/AppContext';
import CentralInputBox from './components/CentralInputBox';
import CentralDisplayBox from './components/CentralDisplayBox';

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

   
    return (
        <AppContext.Provider value={{imageURL, setImageURL}}>
            <StyledApp>
                {imageURL ? <CentralDisplayBox /> : <CentralInputBox />}
            </StyledApp>
        </AppContext.Provider>
    );
}

export default App;
