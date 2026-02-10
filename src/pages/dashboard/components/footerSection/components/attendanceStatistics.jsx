import { Card, Box, Typography, Stack, Divider } from "@mui/material";

export default function AttendanceStats() {
    const data = [
        { label: "Present", value: 90, color: "#2e7d32" },
        { label: "Late", value: 6, color: "#f9a825" },
        { label: "Absent", value: 4, color: "#d32f2f" },
    ];

    return (
        <Card sx={{ p: 3, height: '100%', borderRadius: '8px' }}>
            <Typography variant="h5" mb={2}>
                Attendance Statistics
            </Typography>

            <Stack spacing={1.5}>
                {data.map((item) => (
                    <Box
                        key={item.label}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box display="flex" alignItems="center" gap={1}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    bgcolor: item.color,
                                }}
                            />
                            <Typography>{item.label}</Typography>
                        </Box>

                        <Typography>{item.value}%</Typography>
                    </Box>
                ))}
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Box
                sx={{
                    display: "flex",
                    height: 8,
                    borderRadius: 5,
                    overflow: "hidden",
                    bgcolor: "#eee",
                }}
            >
                {data.map((item) => (
                    <Box
                        key={item.label}
                        sx={{
                            width: `${item.value}%`,
                            bgcolor: item.color,
                        }}
                    />
                ))}
            </Box>
        </Card>
    );
}
