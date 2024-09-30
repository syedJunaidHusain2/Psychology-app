import { CiViewList } from 'react-icons/ci';
import { LuPenLine } from 'react-icons/lu';
import { GiProgression } from 'react-icons/gi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { LuSettings2 } from "react-icons/lu";

export const sidebarItems = [
    { id: 'blogList', label: 'Blog List', icon: <CiViewList /> },
    { id: 'write', label: 'Write', icon: <LuPenLine /> },
    { id: 'trackReport', label: 'Patients Track Report', icon: <GiProgression /> },
    { id: 'notifications', label: 'Notification', icon: <IoNotificationsOutline /> },
];

export const settingsItems = [
    { id: 'changePassword', label: 'Change Password', icon: <LuSettings2 /> },
    { id: 'changeTheme', label: 'Change Theme', icon: null },
];
