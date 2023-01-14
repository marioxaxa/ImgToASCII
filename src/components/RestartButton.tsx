import React from 'react'
import styled from 'styled-components';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { StyledButton } from './DownloadButton';

const StyledRestartButton = styled(StyledButton)`
    grid-row: 1 / 4;
`

export default function RestartButton() {
  return (
    <StyledRestartButton
        onClick={ () => {window.location.reload()} }
    >
        <RestartAltIcon 
            sx={{
                width: '100%',
                height: '100%',
                color: '#f3e8e8',
                '&:active': {
                    color: '#d0a5a5'
                }
            }}
        />
    </StyledRestartButton>
  )
}
