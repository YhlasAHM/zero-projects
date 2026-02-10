import { Box } from "@mui/material";
import { RequestCard } from "../components/requestCard";

import { WrapperContent } from '../components/wrapperContent';

const PendingRequestsTab = () => {
    return (
        <WrapperContent>
            {
                [1, 2, 3, 4, 5].map((item, index) => (
                    <Box
                        key={index}
                        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
                    >
                        <RequestCard hasBtn={false} status={'Pending'} />
                    </Box>
                ))
            }
        </WrapperContent >
    );
};

export default PendingRequestsTab;
