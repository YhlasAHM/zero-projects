import {
  Box,
  Avatar,
  Typography,
  Paper,
  Button,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import GlobalModal from "../../../components/modal/GlobalModal";
import CreateScheduleModalContent from "./AddWeekContent";

const schedule = [
  {
    day: "Monday",
    date: "Feb 10",
    shift: "Afternoon Shift",
    color: "#FDECEC",
    textColor: "#D32F2F",
    time: "12:00 - 20:00",
    hours: "8.0",
  },
  {
    day: "Tuesday",
    date: "Feb 11",
    shift: "Morning Shift",
    color: "#E3F2FD",
    textColor: "#1565C0",
    time: "08:00 - 16:00",
    hours: "8.0",
  },
  {
    day: "Wednesday",
    date: "Feb 12",
    shift: "Morning Shift",
    color: "#E3F2FD",
    textColor: "#1565C0",
    time: "08:00 - 16:00",
    hours: "8.0",
  },
  {
    day: "Thursday",
    date: "Feb 13",
    shift: "Night Shift",
    color: "#EDE7F6",
    textColor: "#4527A0",
    time: "16:00 - 00:00",
    hours: "8.0",
  },
  {
    day: "Friday",
    date: "Feb 14",
    shift: "Afternoon Shift",
    color: "#FDECEC",
    textColor: "#D32F2F",
    time: "12:00 - 20:00",
    hours: "8.0",
  },
  {
    day: "Saturday",
    date: "Feb 15",
    shift: "Day Off",
    color: "#EEEEEE",
    textColor: "#616161",
    time: "—",
    hours: "0.0",
  },
  {
    day: "Sunday",
    date: "Feb 16",
    shift: "Day Off",
    color: "#EEEEEE",
    textColor: "#616161",
    time: "—",
    hours: "0.0",
  },
];

export default function EmployeeView({ employee }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  if (!employee) return null;

  return (
    <Box p={3}>

      {/* HEADER */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 3,
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            src={employee.avatar}
            sx={{ width: 56, height: 56 }}
          />

          <Box>
            <Typography fontWeight={600}>
              {employee.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ID: {employee.id} • {employee.title} • {employee.department}
            </Typography>
          </Box>
        </Stack>
      </Paper>

      {/* TITLE + ACTIONS */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Box>
          <Typography fontWeight={600}>
            Weekly Schedules
          </Typography>

          <Typography variant="body2" color="text.secondary">
            View and manage work schedules by week
          </Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Button
            startIcon={<EditIcon />}
            variant="contained"
            color="success"
            sx={{ textTransform: "none" }}
            onClick={() => setOpenAddModal(true)}
          >
            Edit Week
          </Button>

          <Button
            startIcon={<AddIcon />}
            variant="contained"
            sx={{
              textTransform: "none",
              backgroundColor: "#0A2540",
              "&:hover": { backgroundColor: "#081C30" },
            }}
            onClick={() => setOpenAddModal(true)}
          >
            Create New Week
          </Button>
        </Stack>
      </Stack>

      {/* WEEK SELECT */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={1} alignItems="center">
            <Button size="small" variant="outlined">
              Previous
            </Button>

            <Typography fontWeight={500}>
              Feb 10-16, 2026
            </Typography>

            <Button size="small" variant="outlined">
              Next
            </Button>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              startIcon={<PrintIcon />}
              variant="outlined"
            >
              Print
            </Button>

            <Button
              size="small"
              startIcon={<FileDownloadIcon />}
              variant="outlined"
            >
              Export
            </Button>

            <Button size="small" variant="outlined">
              Current Week
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* TABLE */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #eee",
        }}
      >
        {/* HEADER */}
        <Stack
          direction="row"
          p={2}
          fontWeight={600}
          color="text.secondary"
        >
          <Box flex={2}>Day</Box>
          <Box flex={2}>Shift</Box>
          <Box flex={2}>Work Time</Box>
          <Box flex={1}>Hours</Box>
        </Stack>

        <Divider />

        {/* ROWS */}
        {schedule.map((item, i) => (
          <Stack
            key={i}
            direction="row"
            p={2}
            alignItems="center"
          >
            <Box flex={2}>
              <Typography fontWeight={500}>
                {item.day}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
            </Box>

            <Box flex={2}>
              <Chip
                label={item.shift}
                sx={{
                  backgroundColor: item.color,
                  color: item.textColor,
                }}
              />
            </Box>

            <Box flex={2}>{item.time}</Box>

            <Box flex={1}>{item.hours}</Box>
          </Stack>
        ))}
      </Paper>

      {/* SUMMARY */}
      <Paper sx={{ padding: 3, borderRadius: 3, mt: 3 }}>
        <Box sx={{ fontWeight: 700 }}>Weekly summary</Box>
        <Stack direction="row" spacing={2} mt={3}>
          <SummaryCard title="40.0" subtitle="Total Hours" />
          <SummaryCard title="5" subtitle="Work Days" />
          <SummaryCard title="2" subtitle="Days Off" />
        </Stack>
      </Paper>
      <GlobalModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        maxWidth="md"
        fullWidth
      >
        <CreateScheduleModalContent onClose={() => setOpenAddModal(false)} />
      </GlobalModal>
    </Box>
  );
}

function SummaryCard({ title, subtitle }) {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        p: 3,
        borderRadius: 3,
        border: "1px solid #eee",
        textAlign: "center",
      }}
    >
      <Typography fontSize={22} fontWeight={600}>
        {title}
      </Typography>

      <Typography color="text.secondary">
        {subtitle}
      </Typography>
    </Paper>
  );
}
