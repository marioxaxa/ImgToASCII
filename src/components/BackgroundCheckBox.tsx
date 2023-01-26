import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CheckBoxRootStyled = styled(Checkbox.Root)`
    appearance:none;
    width:7vmin;
    height:7vmin;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #c57272;
    border-radius:10px;
    border:4px solid #c57272;
    box-shadow:  ${(props) => props.checked ? 
        "5px 5px 15px #915454, -5px -5px 15px #c57272;" 
        : 
        "5px 5px 15px #915454, -5px -5px 15px #c57272, inset 5px 5px 15px #915454, inset -5px -5px 15px #c57272;"
    }
`

type Props = {
    checkBackground:boolean,
    setCheckBackground:React.Dispatch<React.SetStateAction<boolean>>
}

export default function BackgroundCheckBox({checkBackground, setCheckBackground}: Props) {

    function handleCheckedChange(): void {
        setCheckBackground(!checkBackground)
    }

  return (
    <CheckBoxRootStyled checked={checkBackground}  onCheckedChange={handleCheckedChange}>
        <Checkbox.Indicator>
        {checkBackground === true &&
                    <VisibilityIcon
                        sx={{
                            color: '#f3e8e8',
                        }}
                    />
                }
        
        </Checkbox.Indicator>
        {checkBackground === false && <VisibilityOffIcon 
                    sx={{
                        color: '#d0a5a5',
                    }}
                    />}
    </CheckBoxRootStyled>
  )
}