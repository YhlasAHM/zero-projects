import { Box, Typography } from "@mui/material"

export const CardRow = ({ prefix, suffix }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <Typography variant="body1" > {prefix} </Typography>
            <Typography className=" font-bold" variant="h6" > {suffix} </Typography>
        </Box>
    )
}