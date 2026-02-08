import { Box, Typography } from "@mui/material"
import { TimeStatisticCardsSection } from "./components/timeStatisticCardsSection"
import { Wrapper } from "../../../../../components/wrapper"
import ChartSection from "./components/chartComponent"

export const DiagramSection = () => {
    return (
        <Wrapper sx={{
            borderRadius: '8px',
        }}>
            <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Typography variant="body1"> Her günki işlenen sagat sany </Typography>
                </Box>
                <Box className='mb-2' />
                <TimeStatisticCardsSection />
                <Box className='mb-2' />
                <ChartSection />
            </Box>
        </Wrapper>
    )
}