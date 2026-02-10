import { Button } from "@mui/material"

export const CardBtn = ({ bgColor, action, name }) => {
    return (
        <Button
            variant="contained"
            onClick={action}
            className={`${bgColor} text-center text-white`}
            sx={{ textTransform: "none", borderRadius: '8px',width:'100%' }}
        >
            {name}
        </Button>
    );
};
