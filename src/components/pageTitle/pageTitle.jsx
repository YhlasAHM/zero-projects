import { Box, Typography } from "@mui/material"


export const PageTitle = ({ title, subTitle }) => {
    return (
        <Box className='flex flex-col gap-2'>
            <Typography variant="h3"> {title} </Typography>
            <Typography variant="body2"> {subTitle} </Typography>
        </Box>
    )
}
