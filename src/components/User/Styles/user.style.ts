import { Stack, styled } from "@mui/material";

export const UserContainerStack = styled(Stack)({
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'ButtonFace',
    borderRadius: '8px',
    padding: '20px',
    width: 400
})