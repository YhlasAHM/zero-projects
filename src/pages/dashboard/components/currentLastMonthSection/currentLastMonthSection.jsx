
import { Box } from '@mui/material';
import { Wrapper } from '../../../../components/wrapper'
import { MonthStatistic } from './components/monthStatistic';


const exampleData = [
    {
        suffix: 340
    },
    {
        suffix: 50,
        suffixUp: '13.11.2025'
    },
    {
        suffix: 183,
        suffixUp: '22.11.2025'
    }
]

const CurrentLastMonthSection = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                gap: 2
            }}>
                <MonthStatistic title={'Su ay (jikme-jik)'} data={exampleData} />
                <MonthStatistic title={'Gecen ay (jikme-jik)'} data={exampleData} />
            </Box>
        </Box>
    )
}

export default CurrentLastMonthSection;