import { Box, Tabs, Tab, Divider } from "@mui/material";
import { useState } from "react";

import AllRequestsTab from "./tabs/AllRequestsTab";
import PendingRequestsTab from "./tabs/PendingRequestsTab";
import ApprovedRequestsTab from "./tabs/ApprovedRequestsTab.jsx";
import RejectedRequestsTab from "./tabs/RejectedRequestsTab";

import { PageTitle } from "../../components/pageTitle/pageTitle";
import { CustomDivider } from "../../components/customDivider";

import HeaderAppBar from "../../components/appBar/AppBar";

const NewRequestsPage = () => {
    const [tab, setTab] = useState(0);

    return (
        <Box>
            <PageTitle
                title={"New Employee Requests"}
                subTitle={"Review and process new employee applications"}
            />

            <CustomDivider sx={{ mb: 3 }} />

            {/* Tabs */}

            <HeaderAppBar>
                <Tabs
                    value={tab}
                    onChange={(e, val) => setTab(val)}
                    sx={{ mb: 3 }}
                >
                    <Tab label="All" />
                    <Tab label="Pending" />
                    <Tab label="Approved" />
                    <Tab label="Rejected" />
                </Tabs>
            </HeaderAppBar>
            <Divider />

            {/* Tab Content */}
            {tab === 0 && <AllRequestsTab />}
            {tab === 1 && <PendingRequestsTab />}
            {tab === 2 && <ApprovedRequestsTab />}
            {tab === 3 && <RejectedRequestsTab />}
        </Box>
    );
};

export default NewRequestsPage;
