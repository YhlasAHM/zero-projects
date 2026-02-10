import {
    Card,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Box
} from "@mui/material";

const employees = [
    {
        rank: 1,
        name: "Robert Martinez",
        department: "Sales",
        position: "Sales Director",
        hours: "9.5h",
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        rank: 2,
        name: "Michael Chen",
        department: "Engineering",
        position: "Engineering Manager",
        hours: "9h",
        avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
        rank: 3,
        name: "David Wilson",
        department: "Engineering",
        position: "Chief Technology Officer",
        hours: "9h",
        avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
        rank: 4,
        name: "Sarah Johnson",
        department: "Engineering",
        position: "Senior Software Engineer",
        hours: "8.5h",
        avatar: "https://i.pravatar.cc/150?img=4"
    },
    {
        rank: 5,
        name: "Lisa Anderson",
        department: "Marketing",
        position: "Chief Marketing Officer",
        hours: "8.5h",
        avatar: "https://i.pravatar.cc/150?img=5"
    }
];

const getRankColor = (rank) => {
    if (rank === 1) return "#FFF3CD";
    if (rank === 2) return "#E0E0E0";
    if (rank === 3) return "#FDE8D0";
    return "transparent";
};

export const TopPerformers = () => {
    return (
        <Card sx={{ p: 3, borderRadius: '8px' }}>
            <Typography variant="h5" mb={2}>
                Top Performers - Today
            </Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Employee</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell align="right">Hours</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {employees.map((emp) => (
                            <TableRow key={emp.rank} hover>
                                {/* Rank */}
                                <TableCell>
                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            bgcolor: getRankColor(emp.rank),
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: 600
                                        }}
                                    >
                                        {emp.rank}
                                    </Box>
                                </TableCell>

                                {/* Employee */}
                                <TableCell>
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Avatar src={emp.avatar} />
                                        {emp.name}
                                    </Box>
                                </TableCell>

                                <TableCell>{emp.department}</TableCell>
                                <TableCell>{emp.position}</TableCell>

                                <TableCell align="right" sx={{ fontWeight: 600 }}>
                                    {emp.hours}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    );
}
