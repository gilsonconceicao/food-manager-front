import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { EditNote } from '@mui/icons-material';
import { SelectOptionType } from '../FormFields/SelectFormField';

type OptionType = {
    label: string;
    action: () => void;
}

type ActionsProps = {
    options: OptionType[];

}

export function Actions({ options }: ActionsProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <EditNote />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((item, index) => {
                    return <MenuItem
                        key={index}
                        onClick={() => {
                            item.action();
                            handleClose();
                        }}
                    >
                        {item.label}
                    </MenuItem>
                })}
            </Menu>
        </div>
    );
}