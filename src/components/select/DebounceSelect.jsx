import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DebounceSelect({ children, ...props }) {
  return (
    <FormControl size="small" sx={{ width: "100%" }}>
      <Select {...props}>{children}</Select>
    </FormControl>
  );
}
