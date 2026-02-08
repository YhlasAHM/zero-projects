import { Box, Card, CardContent, Typography } from "@mui/material"


export const TimeStatisticCard = ({ text, count, subText }) => {
    return (
        <Card sx={{ flex: 1 }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                alignItems: 'flex-start'
            }}>
                <Typography variant="body2"> {text}  </Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2
                }}>
                    <Box sx={{ fontWeight: '700', fontSize: '18px' }} > {count} </Box>
                    <Typography variant="body1" > {subText} </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}