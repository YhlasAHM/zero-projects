import { Box, Avatar, Typography } from "@mui/material";

export default function EmployeeCell({ name, avatar }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Avatar src={avatar} />
      <Typography>{name}</Typography>
    </Box>
  );
}
