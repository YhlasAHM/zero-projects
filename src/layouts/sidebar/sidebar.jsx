import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { useSidebarItems } from "../../hooks/useSidebarItems";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const { sidebarItemsRoutes } = useSidebarItems();
    const navigate = useNavigate()

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 260,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 260,
                    boxSizing: "border-box",
                    position: "fixed",
                    height: "100vh",
                },
            }}
        >
            <Box
                sx={{
                    height: 70,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    variant="h6"
                    fontWeight="bold"
                >
                    Yerinde
                </Typography>
            </Box>

            <Divider />

            <List>
                {sidebarItemsRoutes.map((item) => {
                    const Icon = item.icon;
                    return (
                        <ListItemButton key={item.id} onClick={() => navigate(`/${item.routeKey}`)}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>

                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Drawer>
    );
};
