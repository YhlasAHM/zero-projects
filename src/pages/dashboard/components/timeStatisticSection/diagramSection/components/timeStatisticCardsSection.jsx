import { Box } from "@mui/material"
import { TimeStatisticCard } from "./timeStatisticCard"


export const TimeStatisticCardsSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 2,
                height: '100px'
            }}>

            <TimeStatisticCard
                text={'Jemi (şu aý)'}
                count={'5840'}
                subText={'sagat'}
            />

            <TimeStatisticCard
                text={'Jemi (şu aý)'}
                count={'5840'}
                subText={'sagat'}
            />
            <TimeStatisticCard
                text={'Jemi (şu aý)'}
                count={'5840'}
                subText={'sagat'}
            />
            <TimeStatisticCard
                text={'Jemi (şu aý)'}
                count={'5840'}
                subText={'sagat'}
            />

        </Box>
    )
}