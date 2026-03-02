import { useLocale } from "./useLocale"

import DashboardIcon from '@mui/icons-material/Dashboard';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import EventIcon from '@mui/icons-material/Event';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmailIcon from '@mui/icons-material/Email';
import CampaignIcon from '@mui/icons-material/Campaign';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import { useMemo } from "react"

export const useSidebarItems = () => {
    const { t } = useLocale();

    const sidebarItemsRoutes = useMemo(() => {
        const allItems = [
            {
                id: 'Dashboard',
                name: 'Dashboard',
                routeKey: 'dashboard',
                icon: DashboardIcon
            },
            {
                id: 'Employees',
                name: 'Employees',
                routeKey: 'employees',
                icon: Diversity3Icon
            },
            {
                id: 'Attendance',
                name: 'Attendance',
                routeKey: 'attendance',
                icon: EventAvailableIcon
            },
            {
                id: 'Tasks',
                name: 'Tasks',
                routeKey: 'tasks',
                icon: AssignmentTurnedInIcon
            },
            {
                id: 'LeaveRequests',
                name: 'LeaveRequests',
                routeKey: 'leaveRequests',
                icon: EventIcon
            },
            {
                id: 'NewRequest',
                name: 'NewRequest',
                routeKey: 'newRequests',
                icon: PersonAddAlt1Icon
            },
            // {
            //     id: 'LetterRequests',
            //     name: 'LetterRequests',
            //     routeKey: 'letterRequests',
            //     icon: EmailIcon
            // },
            {
                id: 'Announcements',
                name: 'Announcements',
                routeKey: 'announcements',
                icon: CampaignIcon
            },
            {
                id: 'Documents',
                name: 'Documents',
                routeKey: 'documents',
                icon: ArticleIcon
            },
            {
                id: 'Calendar',
                name: 'Calendar',
                routeKey: 'calendar',
                icon: CalendarTodayIcon
            },
            {
                id: 'Settings',
                name: 'Settings',
                routeKey: 'settings',
                icon: SettingsIcon
            },
        ]
        return allItems;
    }, [t]);

    return { sidebarItemsRoutes }

}