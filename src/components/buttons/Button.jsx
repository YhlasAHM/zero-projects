import { Button } from "@mui/material";

export default function HeaderButton({
  children,
  icon,
  width = 200,
  ...props
}) {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ maxWidth: width }}
      startIcon={icon}
      {...props}
    >
      {children}
    </Button>
  );
}
