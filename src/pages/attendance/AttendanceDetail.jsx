import {
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  Button,
  Chip,
  Divider,
  TextField,
} from "@mui/material";

import PrintIcon from "@mui/icons-material/Print";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const records = [
  {
    date: "23.01.2026",
    day: "Fri",
    checkIn: "08:55",
    checkOut: "17:30",
    hours: "8.5h",
    status: "Present",
  },
  {
    date: "22.01.2026",
    day: "Thu",
    checkIn: "08:55",
    checkOut: "17:30",
    hours: "8.5h",
    status: "Present",
  },
  {
    date: "21.01.2026",
    day: "Wed",
    checkIn: "08:55",
    checkOut: "17:30",
    hours: "8.5h",
    status: "Present",
  },
  {
    date: "20.01.2026",
    day: "Tue",
    checkIn: "08:55",
    checkOut: "17:30",
    hours: "8.5h",
    status: "Present",
  },
  {
    date: "19.01.2026",
    day: "Mon",
    checkIn: "-",
    checkOut: "-",
    hours: "-",
    status: "Weekend",
  },
];

export default function AttendanceDetailsContent({ employee }) {
  if (!employee) return null;

  return (
    <Paper sx={{ padding: 3 }}>

      {/* HEADER */}
      <Stack direction="row" justifyContent="space-between">

        <Box display="flex" gap={2}>

          <Box>
            <Typography variant="body2" color="text.secondary">
              Attendance Details
            </Typography>

            <Typography fontSize={20} fontWeight={600}>
              {employee.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {employee.position} • {employee.department}
            </Typography>
          </Box>
        </Box>

      </Stack>

      {/* SUMMARY CARDS */}
      <Stack direction="row" spacing={2} mt={3} mb={3}>

        <SummaryCard title="08:58" subtitle="Avg Check In" />
        <SummaryCard title="17:28" subtitle="Avg Check Out" />
        <SummaryCard title="42.3h" subtitle="Total Hours" />
        <SummaryCard title="5/7" subtitle="Present Days" />

      </Stack>

      {/* RECORDS HEADER */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontWeight={600}>
          Daily Check-in / Check-out Records
        </Typography>

        <Stack direction="row" spacing={1}>

          <Button
            startIcon={<PrintIcon />}
            variant="outlined"
            size="small"
          >
            Print
          </Button>

          <Button
            startIcon={<FileDownloadIcon />}
            variant="outlined"
            size="small"
          >
            Export
          </Button>

          <TextField
            size="small"
            placeholder="Start date"
            InputProps={{
              endAdornment: <CalendarTodayIcon fontSize="small" />,
            }}
          />

          <TextField
            size="small"
            placeholder="End date"
            InputProps={{
              endAdornment: <CalendarTodayIcon fontSize="small" />,
            }}
          />

        </Stack>
      </Stack>

      {/* RECORDS LIST */}
      <Stack spacing={2}>

        {records.map((item, index) => {

          const dayNumber = item.date.split(".")[0];

          return (
            <Paper
              key={index}
              sx={{
                p: 2,
                borderRadius: 3,
                border: "1px solid #e0e0e0",
              }}
              elevation={0}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
              >

                {/* DAY BOX */}
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: 2,
                    backgroundColor: "#0A2540",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography fontWeight={600}>
                    {dayNumber}
                  </Typography>
                </Box>

                {/* DATE */}
                <Box width={'auto'}>
                  <Typography fontWeight={500}>
                    {item.date}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.day}
                  </Typography>
                </Box>

                {/* CHECK IN */}
                <InfoBlock
                  label="CHECK IN"
                  value={item.checkIn}
                />

                {/* CHECK OUT */}
                <InfoBlock
                  label="CHECK OUT"
                  value={item.checkOut}
                />

                {/* HOURS */}
                <InfoBlock
                  label="HOURS"
                  value={item.hours}
                />

                {/* STATUS */}
                <Box ml="auto">
                  <Chip
                    label={item.status}
                    color={
                      item.status === "Present"
                        ? "success"
                        : "default"
                    }
                  />
                </Box>

              </Stack>
            </Paper>
          );
        })}

      </Stack>

    </Paper>
  );
}

/* summary card */
function SummaryCard({ title, subtitle }) {
  return (
    <Paper
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 3,
        border: "1px solid #e0e0e0",
      }}
      elevation={0}
    >
      <Typography fontWeight={600}>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        {subtitle}
      </Typography>
    </Paper>
  );
}

/* info block */
function InfoBlock({ label, value }) {
  return (
    <Box width={100}>
      <Typography
        variant="body2"
        color="text.secondary"
      >
        {label}
      </Typography>

      <Typography fontWeight={600}>
        {value}
      </Typography>
    </Box>
  );
}
