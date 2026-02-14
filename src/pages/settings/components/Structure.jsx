import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";

const initialDepartments = [
  {
    id: 1,
    name: "Engineering",
    head: "David Wilson",
    employeeCount: 48,
    positions: [
      { id: 1, title: "Software Engineer", employees: 25 },
      { id: 2, title: "Senior Software Engineer", employees: 12 },
      { id: 3, title: "Engineering Manager", employees: 5 },
      { id: 4, title: "DevOps Engineer", employees: 4 },
      { id: 5, title: "Chief Technology Officer", employees: 1 },
      { id: 6, title: "QA Engineer", employees: 1 },
    ],
  },
  {
    id: 2,
    name: "Sales",
    head: "Robert Martinez",
    employeeCount: 32,
    positions: [
      { id: 1, title: "Sales Representative", employees: 18 },
      { id: 2, title: "Senior Sales Representative", employees: 8 },
      { id: 3, title: "Sales Manager", employees: 4 },
      { id: 4, title: "Sales Director", employees: 1 },
      { id: 5, title: "Account Executive", employees: 1 },
    ],
  },
];

const PositionCard = ({ position, onEdit, onDelete }) => (
  <Box
    sx={{
      border: "1px solid",
      borderColor: "grey.200",
      borderRadius: 1.5,
      px: 2,
      py: 1.5,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box>
      <Typography variant="body2" fontWeight={500}>
        {position.title}
      </Typography>
      <Typography variant="caption">
        {position.employees} employees
      </Typography>
    </Box>
    <Box display="flex" gap={0.5}>
      <IconButton size="small" onClick={() => onEdit(position)}>
        <BorderColorOutlinedIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <IconButton size="small" onClick={() => onDelete(position.id)}>
        <DeleteOutlineIcon sx={{ fontSize: 17 }} />
      </IconButton>
    </Box>
  </Box>
);

const DepartmentCard = ({ department, onEditDept, onDeleteDept, onAddPosition, onEditPosition, onDeletePosition }) => (
  <Paper
    variant="outlined"
    sx={{ borderRadius: 2, overflow: "hidden", mb: 2 }}
  >
    {/* Department Header */}
    <Box
      sx={{
        px: 3,
        py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid",
      }}
    >
      <Box>
        <Typography variant="subtitle1" fontWeight={700}>
          {department.name}
        </Typography>
        <Typography variant="caption">
          Head: {department.head} • {department.employeeCount} employees
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddIcon sx={{ fontSize: 14 }} />}
          onClick={() => onAddPosition(department.id)}
          sx={{
            textTransform: "none",
            fontSize: "0.75rem",
            borderRadius: 1.5,
            px: 1.5,
            py: 0.5,
          }}
        >
          Add Position
        </Button>
        <IconButton size="small" onClick={() => onEditDept(department)}>
          <BorderColorOutlinedIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" onClick={() => onDeleteDept(department.id)}>
          <DeleteOutlineIcon sx={{ fontSize: 17 }} />
        </IconButton>
      </Box>
    </Box>

    <Box sx={{ p: 2 }}>
      <Grid container spacing={1.5}>
        {department.positions.map((pos) => (
          <Grid size={4} key={pos.id}>
            <Stack spacing={2}>
              <PositionCard
                position={pos}
                onEdit={onEditPosition}
                onDelete={(posId) => onDeletePosition(department.id, posId)}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Paper>
);

const CompanyStructure = () => {
  const [departments, setDepartments] = useState(initialDepartments);

  const handleDeleteDept = (deptId) => {
    setDepartments((prev) => prev.filter((d) => d.id !== deptId));
  };

  const handleDeletePosition = (deptId, posId) => {
    setDepartments((prev) =>
      prev.map((d) =>
        d.id === deptId
          ? { ...d, positions: d.positions.filter((p) => p.id !== posId) }
          : d
      )
    );
  };

  const handleAddDepartment = () => {
    // Add your modal/form logic here
    console.log("Add Department clicked");
  };

  const handleAddPosition = (deptId) => {
    // Add your modal/form logic here
    console.log("Add Position clicked for dept:", deptId);
  };

  const handleEditDept = (dept) => {
    console.log("Edit dept:", dept);
  };

  const handleEditPosition = (pos) => {
    console.log("Edit position:", pos);
  };

  return (
    <Box>
      {/* ── Header ── */}
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
        <Typography variant="h6" fontWeight={700}>
          Departments & Positions
        </Typography>
        <Button
          variant="contained"
          size="medium"
          startIcon={<AddIcon />}
          onClick={handleAddDepartment}
          sx={{
            textTransform: "none",
            borderRadius: 1.5,
            px: 2.5,
            fontWeight: 600,
          }}
        >
          Add Department
        </Button>
      </Box>

      {/* ── Department List ── */}
      {departments.map((dept) => (
        <DepartmentCard
          key={dept.id}
          department={dept}
          onEditDept={handleEditDept}
          onDeleteDept={handleDeleteDept}
          onAddPosition={handleAddPosition}
          onEditPosition={handleEditPosition}
          onDeletePosition={handleDeletePosition}
        />
      ))}
    </Box>
  );
};

export default CompanyStructure;