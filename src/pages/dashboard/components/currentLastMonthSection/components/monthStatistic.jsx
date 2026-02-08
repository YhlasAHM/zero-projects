import { Box, Divider, Typography } from "@mui/material"
import { CustomDivider } from "../../../../../components/customDivider"
import { StatisticLine } from "./statisticLine"
import { Wrapper } from "../../../../../components/wrapper"


export const MonthStatistic = ({ title, data }) => {
    return (
        <Wrapper sx={{ flex: 1, p: 3, borderRadius: '8px' }}>
            <Box className=' flex flex-col gap-2 flex-1'>
                <Typography variant="h4"> {title} </Typography>
                <CustomDivider />
                <StatisticLine
                    prefix={'In kop islenen gun'}
                    suffix={`${data[0].suffix} sagat`}
                    suffixUp={data[0].suffixUp}
                />
                <Divider />
                <StatisticLine
                    prefix={'In az islenen gun'}
                    suffix={`${data[1].suffix} sagat`}
                    suffixUp={data[1].suffixUp}
                />
                <Divider />
                <StatisticLine
                    prefix={'Ortaca gundelik'}
                    suffix={`${data[2].suffix} sagat`}
                    suffixUp={data[2].suffixUp}
                />
                <Divider />
            </Box>
        </Wrapper>
    )
}