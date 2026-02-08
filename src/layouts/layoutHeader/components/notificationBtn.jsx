import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

export const NotificationBtn = () => {
    const navigate = useNavigate();

    return (
        <IconButton onClick={() => navigate('/notifications')}>
            <Badge color="secondary" variant="dot" invisible={false}>
                <NotificationsIcon />
            </Badge>
        </IconButton>
    );
};
