import Box from '@mui/material/Box';
import { LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { ChartsAxisHighlight } from '@mui/x-charts/ChartsAxisHighlight';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';

const alphabetStock = [
    { "date": "2024-01-01", "low": 100, "high": 110 },
    { "date": "2024-01-02", "low": 280, "high": 150 },
    { "date": "2024-01-03", "low": 120, "high": 170 },
    { "date": "2024-01-04", "low": 100, "high": 85 },
    { "date": "2024-01-05", "low": 240, "high": 250 },
    { "date": "2024-01-06", "low": 200, "high": 270 },
    { "date": "2024-01-07", "low": 10, "high": 210 },
    { "date": "2024-01-08", "low": 160, "high": 10 },
    { "date": "2024-01-09", "low": 140, "high": 180 },
];

const series = [
    {
        type: 'line',
        data: alphabetStock.map((day) => day.high),
        label: 'Şu aý',
        color: '#1976d2',
        area: true,
        curve: 'monotoneX',
        highlightScope: { faded: 'global', highlighted: 'item' },
    },
    {
        type: 'line',
        data: alphabetStock.map((day) => day.low),
        label: 'Geçen aý',
        color: '#d32f2f',
        area: true,
        curve: 'monotoneX',
        highlightScope: { faded: 'global', highlighted: 'item' },
    },
];

export default function AreaChartSection() {
    return (
        <Box sx={{ width: '100%', height: 400, p: 2 }}>
            <ChartContainer
                series={series}
                xAxis={[
                    {
                        id: 'date',
                        data: alphabetStock.map((day) => new Date(day.date)),
                        scaleType: 'band',
                        valueFormatter: (value) =>
                            value.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }),
                    },
                ]}
                yAxis={[{ id: 'price', scaleType: 'linear' }]}
                sx={{
                    '.MuiLineElement-root': { strokeWidth: 2 },
                    '.MuiAreaElement-root': { fillOpacity: 0.3 },
                }}
            >
                <ChartsGrid vertical strokeDasharray="3 3" />
                <ChartsGrid horizontal strokeDasharray="3 3" />

                <ChartsAxisHighlight x="line" />

                <LinePlot />
                <LineHighlightPlot />

                <ChartsXAxis axisId="date" disableLine disableTicks />
                <ChartsYAxis disableLine disableTicks />

                <ChartsTooltip />
            </ChartContainer>
        </Box>
    );
}