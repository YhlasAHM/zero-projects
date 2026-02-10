import { Box } from '@mui/material'
import AttendanceStats from './components/attendanceStatistics'
import { TopPerformers } from './components/topPerformers'

export const FooterSection = () => {
    return (
        <Box sx={{
            display: 'flex',
            gap: 2
        }}>
            <Box sx={{
                flex: 1,
            }}>
                <AttendanceStats />
            </Box>
            <Box sx={{
                flex: 2
            }}>
                <TopPerformers />
            </Box>
        </Box>
    )
}
