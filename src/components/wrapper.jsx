import { Box } from "@mui/material"

export const Wrapper = ({ children, sx, ...props }) => {
    return (
        <Box
            className="wrapper-component"
            sx={{ ...sx }}
            {...props}
        >
            {children}
        </Box>
    )
}