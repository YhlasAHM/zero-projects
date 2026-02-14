import { Box, Pagination, Typography, Paper } from "@mui/material";

export default function TablePaginationInfo({ total }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        borderRadius: '0 0 10px 10px'
      }}
    >
      <Typography>
        Showing {total} of {total} employees
      </Typography>
      <Pagination count={3} page={1} />
    </Paper>
  );
}
