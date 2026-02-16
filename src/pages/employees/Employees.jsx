import { Box } from "@mui/material";
import { useState } from "react";
import { PageTitle } from "../../components/pageTitle/pageTitle";
import Header from "./components/Header";
import GlobalTable from "../../components/table/Table";
import TablePaginationInfo from "../../components/table/TablePagination";
import EmployeeCell from "../../components/table/EmployeeCell";
import StatusChip from "../../components/table/StatusChip";
import TableActions from "../../components/table/TableActions";
import GlobalModal from "../../components/modal/GlobalModal";
import AddEmployeeContent from "./components/AddEmployeeContent";
import ViewEmployeeWeek from "./components/EmployeeDetailWeek";

const EmployeesPage = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const rows = [
    {
      id: "EMP001",
      name: "Sarah Johnson",
      title: "Waiter",
      department: "FOH",
      nationality: "Turkmenistan",
      status: "Active",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
  ];

  const columns = [
    { key: "id", label: "ID" },
    {
      key: "employee",
      label: "Employee",
      render: (row) => <EmployeeCell name={row.name} avatar={row.avatar} />,
    },
    { key: "title", label: "Title" },
    { key: "department", label: "Department" },
    { key: "nationality", label: "Nationality" },
    {
      key: "status",
      label: "Status",
      render: (row) => <StatusChip status={row.status} />,
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <TableActions
          onView={() => {
            setSelectedEmployee(row);
            setOpenViewModal(true);
          }}
          onEdit={() => console.log("edit")}
          onDelete={() => console.log("delete")}
        />
      ),
    }

  ];

  return (
    <Box className="employees">

      {openViewModal ?
        <ViewEmployeeWeek employee={selectedEmployee} />
        :
        <>
          <PageTitle
            title="Employee"
            subTitle="Manage employee information and profiles"
          />
          <Header onAddClick={() => setOpenAddModal(true)} />
          <GlobalTable columns={columns} rows={rows} />
          <TablePaginationInfo total={12} />
        </>
      }
      <GlobalModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="md"
        fullWidth
      >
        <AddEmployeeContent onClose={() => setOpenAddModal(false)} />
      </GlobalModal>
    </Box>
  );
};

export default EmployeesPage;
