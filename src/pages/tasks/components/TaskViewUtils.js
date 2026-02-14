export const STATUS_CONFIG = {
  "TO DO": { bg: "#f0f0f0", color: "#666", dot: "#9e9e9e" },
  "IN PROGRESS": { bg: "#E3F2FD", color: "#1976D2", dot: "#1976D2" },
  COMPLETE: { bg: "#E8F5E9", color: "#388E3C", dot: "#4CAF50" },
  PENDING: { bg: "#FFF3E0", color: "#F57C00", dot: "#F57C00" },
};

export const getStatusConfig = (status) =>
  STATUS_CONFIG[status?.toUpperCase()] || STATUS_CONFIG["TO DO"];

export const getBorderColor = (status) => {
  switch (status?.toUpperCase()) {
    case "COMPLETE": return "#4CAF50";
    case "IN PROGRESS": return "#1976D2";
    case "PENDING": return "#F57C00";
    default: return "#e0e0e0";
  }
};

export const DEMO_TASKS = [
  { id: 1, title: "Project Alpha", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", status: "To Do", date: "2026-01-11", startDate: "11.01.2026", endDate: "20.01.2026", assignee: "CA", team: ["SJ", "AB", "CD", "EF"] },
  { id: 2, title: "Project Beta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", status: "In Progress", date: "2026-01-11", startDate: "11.01.2026", endDate: "20.01.2026", assignee: "CA", team: ["SJ", "AB", "CD", "EF"] },
  { id: 3, title: "Project Gamma", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", status: "Complete", date: "2026-01-11", startDate: "11.01.2026", endDate: "20.01.2026", assignee: "CA", team: ["SJ", "AB", "CD"] },
  { id: 4, title: "Project Delta", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", status: "In Progress", date: "2026-01-15", startDate: "15.01.2026", endDate: "25.01.2026", assignee: "CA", team: ["SJ", "AB", "CD", "EF"] },
  { id: 5, title: "Project Sigma", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...", status: "Complete", date: "2026-01-18", startDate: "18.01.2026", endDate: "28.01.2026", assignee: "CA", team: ["SJ", "AB", "CD"] },
];