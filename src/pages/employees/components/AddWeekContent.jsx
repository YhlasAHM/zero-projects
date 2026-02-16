import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Select,
  MenuItem,
  TextField,
  Divider,
} from "@mui/material";

import { useState } from "react";

const days = [
  { day: "Monday", date: "Feb 17" },
  { day: "Tuesday", date: "Feb 18" },
  { day: "Wednesday", date: "Feb 19" },
  { day: "Thursday", date: "Feb 20" },
  { day: "Friday", date: "Feb 21" },
  { day: "Saturday", date: "Feb 22" },
  { day: "Sunday", date: "Feb 23" },
];

const shiftTypes = [
  "Day Off",
  "Morning Shift",
  "Afternoon Shift",
  "Night Shift",
];

export default function CreateScheduleModalContent({ onClose }) {
  const [schedule, setSchedule] = useState(
    days.map((d) => ({
      ...d,
      shift: "Day Off",
      start: "08:00",
      end: "16:00",
      hours: "0.0",
    }))
  );

  const handleShiftChange = (index, value) => {
    const updated = [...schedule];
    updated[index].shift = value;

    if (value === "Day Off") {
      updated[index].hours = "0.0";
    } else {
      updated[index].hours = "8.0";
    }

    setSchedule(updated);
  };

  const handleTimeChange = (index, field, value) => {
    const updated = [...schedule];
    updated[index][field] = value;
    setSchedule(updated);
  };

  return (
    <Box p={3}>

      {/* TITLE */}
      <Typography fontSize={20} fontWeight={600} mb={3}>
        Create New Weekly Schedule
      </Typography>

      {/* SELECT WEEK */}
      <Box mb={3}>
        <Typography mb={1}>Select Week</Typography>

        <Select
          fullWidth
          defaultValue="Feb 17-23, 2026"
          sx={{ borderRadius: 2 }}
          size="small"
        >
          <MenuItem value="Feb 17-23, 2026">
            Feb 17-23, 2026
          </MenuItem>
        </Select>
      </Box>

      {/* TABLE */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #e0e0e0",
        }}
      >
        {/* HEADER */}
        <Stack
          direction="row"
          p={1}
          fontWeight={600}
          color="text.secondary"
        >
          <Box flex={2}>Day</Box>
          <Box flex={2}>Shift Type</Box>
          <Box flex={3}>Work Time</Box>
          <Box flex={1}>Hours</Box>
        </Stack>

        <Divider />

        {/* ROWS */}
        {schedule.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            p={1}
            spacing={1}
          >
            {/* DAY */}
            <Box flex={2}>
              <Typography fontWeight={500}>
                {item.day}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
              >
                {item.date}
              </Typography>
            </Box>

            {/* SHIFT */}
            <Box flex={2}>
              <Select
                fullWidth
                size="small"
                value={item.shift}
                onChange={(e) =>
                  handleShiftChange(index, e.target.value)
                }
              >
                {shiftTypes.map((shift) => (
                  <MenuItem size='small' key={shift} value={shift}>
                    {shift}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {/* TIME */}
            <Box flex={3}>
              <Stack direction="row" spacing={1}>
                <TextField
                  type="time"
                  size="small"
                  value={item.start}
                  onChange={(e) =>
                    handleTimeChange(
                      index,
                      "start",
                      e.target.value
                    )
                  }
                />

                <Typography alignSelf="center">
                  -
                </Typography>

                <TextField
                  type="time"
                  size="small"
                  value={item.end}
                  onChange={(e) =>
                    handleTimeChange(
                      index,
                      "end",
                      e.target.value
                    )
                  }
                />
              </Stack>
            </Box>

            {/* HOURS */}
            <Box flex={1}>
              <Typography>
                {item.hours}
              </Typography>
            </Box>

          </Stack>
        ))}
      </Paper>

      {/* FOOTER */}
      <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        mt={3}
      >
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ textTransform: "none" }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
          }}
        >
          Create Schedule
        </Button>
      </Stack>

    </Box>
  );
}
