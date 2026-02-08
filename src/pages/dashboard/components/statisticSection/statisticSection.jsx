import { Box } from "@mui/material"
import { StatisticCard } from "./statisticCard"

import Groups2Icon from '@mui/icons-material/Groups2';
export const StatisticSection = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '150px',
            gap: 2
        }}>
            <StatisticCard
                icon={Groups2Icon}
                count={142}
                text={'Total Employees'}
            />
            <StatisticCard
                icon={Groups2Icon}
                count={142}
                text={'Total Employees'}
            />
            <StatisticCard
                icon={Groups2Icon}
                count={142}
                text={'Total Employees'}
            />
            <StatisticCard
                icon={Groups2Icon}
                count={142}
                text={'Total Employees'}
            />
            <StatisticCard
                icon={Groups2Icon}
                count={142}
                text={'Total Employees'}
            />
        </Box>
    )
}