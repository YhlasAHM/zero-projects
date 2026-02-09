import { Dialog } from "@mui/material";

export default function GlobalModal({
  open,
  onClose,
  children,
  ...dialogProps
}) {
  return (
    <Dialog open={open} onClose={onClose} {...dialogProps}>
      {children}
    </Dialog>
  );
}
