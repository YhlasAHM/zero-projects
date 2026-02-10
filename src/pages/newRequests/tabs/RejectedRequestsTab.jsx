import { Box } from "@mui/material";
import { WrapperContent } from '../components/wrapperContent';
import { RequestCard } from "../components/requestCard";

const RejectedRequestTab = () => {
    return (
        <WrapperContent>
            {
                [1, 2, 3, 4, 5].map((item, index) => (
                    <Box
                        key={index}
                        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
                    >
                        <RequestCard hasBtn={false} status={'Rejected'} />
                    </Box>
                ))
            }
        </WrapperContent>
    );
};

export default RejectedRequestTab;
