import { Box, Typography } from "@mui/material"
import { DiagramSection } from "./diagramSection/diagramSection"
import { CustomDivider } from "../../../../components/customDivider"
import CurrentLastMonthSection from "../currentLastMonthSection/currentLastMonthSection"


export const TimeStaticSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>
            <Typography variant="h3"> Işlenen sagatlaryň statistikasy</Typography>
            <CustomDivider sx={{ mb: 2 }} />
            <DiagramSection />
            <CustomDivider sx={{ mb: 2 }} />
            <CurrentLastMonthSection />
        </Box>
    )
}