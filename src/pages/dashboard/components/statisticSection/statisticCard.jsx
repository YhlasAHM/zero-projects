import { Card, CardContent, Box, Typography } from "@mui/material"

export const StatisticCard = ({ icon, count, text }) => {
    const Icon = icon;

    return (
        <Card sx={{ flex: 1 }}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    alignItems: 'flex-start'
                }}
            >
                <Box className="bg-red-500 rounded-md p-2 shrink-0">
                    <Icon sx={{ color: 'white', fontSize: '25px' }} />
                </Box>

                <Box sx={{ fontWeight: '700', fontSize: '20px' }}>
                    {count}
                </Box>

                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    )
}
