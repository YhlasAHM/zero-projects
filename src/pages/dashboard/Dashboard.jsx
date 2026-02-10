import { Box } from "@mui/material"
import { PageTitle } from "../../components/pageTitle/pageTitle"
import { StatisticSection } from "./components/statisticSection/statisticSection"
import { TimeStaticSection } from "./components/timeStatisticSection/timeStaticSection"
import { CustomDivider } from "../../components/customDivider"
import { FooterSection } from "./components/footerSection/footerSection"


export const DashBoardPage = () => {
    return (
        <Box className=' dashboard'>
            <PageTitle title={'Dashboard'} subTitle={"Welcomde back! Here's what's happening today "} />
            <CustomDivider sx={{ mb: 5 }} />
            <StatisticSection />
            <CustomDivider sx={{ mb: 5 }} />
            <TimeStaticSection />
            <CustomDivider sx={{ mb: 2 }} />
            <FooterSection />
        </Box>
    )
}