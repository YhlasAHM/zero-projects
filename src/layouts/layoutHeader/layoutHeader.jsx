import { Box, useTheme } from "@mui/material";
import { ThemeChange } from '../../features/theme/theme';
import { NotificationBtn } from "./components/notificationBtn";
import { HeaderAvatar } from "./components/headerAvatar";
import { Wrapper } from "../../components/wrapper";

export const LayoutHeader = () => {
    const theme = useTheme();

    return (
        <Wrapper>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    width: '100%',
                    height: 60,
                    px: 2,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                    }}>
                    <ThemeChange />
                    <NotificationBtn />
                    <HeaderAvatar />
                </Box>
            </Box>
        </Wrapper>
    );
};
