import { MenuItem } from "@mui/material";
import DebounceSelect from "../../../components/select/DebounceSelect";
import HeaderAppBar from "../../../components/appBar/AppBar";
import HeaderButton from "../../../components/buttons/Button";
import HeaderSearch from "../../../components/textField/HeaderSearch";
import GlobalDateSelect from "../../../components/dateSelect/DateSelect";
import GetAppIcon from "@mui/icons-material/GetApp";
import { getAllDepartment } from "../../../api/queries/getters";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

const Header = ({ filters, setFilters, onAddClick }) => {

  const { data, isLoading } = useQuery({
    queryKey: ['departments'],
    queryFn: getAllDepartment
  });
  const departments = data?.data?.data || [];

  return (
    <HeaderAppBar>
      <HeaderSearch
        value={filters.search}
        onSearch={(val) =>
          setFilters((prev) => ({ ...prev, search: val }))
        }
      />

      <GlobalDateSelect
        label="Hiring date"
        value={filters.date}
        onChange={(val) =>
          setFilters(prev => ({
            ...prev,
            date: val ? dayjs(val).format("YYYY-MM-DD") : null
          }))
        }
      />
      <DebounceSelect
        value={filters.department_ids[0] || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            department_ids: e.target.value ? [e.target.value] : [],
          }))
        }
      >
        {isLoading ? (
          <MenuItem disabled>Loading...</MenuItem>
        ) : (
          departments.map((dept) => (
            <MenuItem key={dept.id} value={dept.id}>
              {dept.name}
            </MenuItem>
          ))
        )}
      </DebounceSelect>

      <DebounceSelect
        value={filters.status[0] || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            status: e.target.value ? [e.target.value] : [],
          }))
        }
      >
        <MenuItem value="present">Present</MenuItem>
        <MenuItem value="absent">Absent</MenuItem>
      </DebounceSelect>

      <HeaderButton width={120} icon={<GetAppIcon />} onClick={onAddClick}>
        Export
      </HeaderButton>
    </HeaderAppBar>
  );
};

export default Header;
