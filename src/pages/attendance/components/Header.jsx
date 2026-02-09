import { useState } from "react";
import { MenuItem } from "@mui/material";
import DebounceSelect from "../../../components/select/DebounceSelect";
import HeaderAppBar from "../../../components/appBar/AppBar";
import HeaderButton from "../../../components/buttons/Button";
import HeaderSearch from "../../../components/textField/HeaderSearch";
import AddIcon from "@mui/icons-material/Add";
import GlobalDateSelect from "../../../components/dateSelect/DateSelect";
import GetAppIcon from "@mui/icons-material/GetApp";

const Header = ({ onAddClick }) => {
  const [department, setDepartment] = useState("");
  const [employee, setEmployee] = useState("");
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(null);

  return (
    <HeaderAppBar>
      <HeaderSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search employee"
      />

      <GlobalDateSelect
        label="Hiring date"
        value={date}
        onChange={setDate}
        placeholder="Select date"
      />
      <DebounceSelect
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        displayEmpty
      >
        <MenuItem value="" disabled>
          All department
        </MenuItem>
        <MenuItem value={1}>IT</MenuItem>
        <MenuItem value={2}>HR</MenuItem>
      </DebounceSelect>

      <DebounceSelect
        value={employee}
        onChange={(e) => setEmployee(e.target.value)}
        displayEmpty
      >
        <MenuItem value="" disabled>
          All status
        </MenuItem>
        <MenuItem value={1}>John</MenuItem>
        <MenuItem value={2}>Jane</MenuItem>
      </DebounceSelect>

      <HeaderButton width={120} icon={<GetAppIcon />} onClick={onAddClick}>
        Export
      </HeaderButton>
    </HeaderAppBar>
  );
};

export default Header;
