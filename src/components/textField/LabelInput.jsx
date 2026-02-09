import { Box, TextField, Typography } from "@mui/material";

const FieldLabel = ({ label, ...props }) => (
  <Box sx={{marginTop: 1}}>
    <Typography fontSize={13} mb={0.5}>
      {label}
    </Typography>
    <TextField fullWidth size="small" {...props} />
  </Box>
);

export default FieldLabel;
