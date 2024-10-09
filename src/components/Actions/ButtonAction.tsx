import theme from "@/Layout/Theme/Theme";
import { Button, ButtonProps, Typography } from "@mui/material";


interface ButtonActionProps extends ButtonProps {
    label: string;
    visible: boolean;
    target?: string;
}

export const ButtonAction = ({ ...prop }: ButtonActionProps): JSX.Element => {
    const { target, disabled, visible, label, ...rest } = prop;
    const colors = disabled ? theme.palette?.grey['400'] : theme.palette.common.black;
    return (
        <>
            {visible && (
                <Button
                    sx={{ cursor: 'pointer' }}
                    formTarget={target}
                    variant="text"
                    size="large"
                    disabled={disabled}
                    {...rest}
                >
                    <Typography fontSize='17px' color={colors}>
                        {label}
                    </Typography>
                </Button>
            )}
        </>
    );
};
