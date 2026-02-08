import { useState } from "react";
import { Box, Avatar, Typography, IconButton, Menu, MenuItem } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const HeaderAvatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {/* Avatar Button */}
            <IconButton
                onClick={handleOpen}
                sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                    borderRadius: 2,
                    px: 1
                }}
            >
                <Avatar>
                    <PersonIcon />
                </Avatar>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "left"
                    }}
                >
                    <Typography variant="body2" fontWeight={600}>
                        Admin User
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                        Administrator
                    </Typography>
                </Box>

                <KeyboardArrowDownIcon />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};
