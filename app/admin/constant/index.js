import { CiViewList } from "react-icons/ci";
import { LuPenLine } from "react-icons/lu";
import { GiProgression } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

export const sidebarItems = [
  { id: "blogList", link: "/admin", label: "Blog List", icon: <CiViewList /> },
  { id: "write", link: "/admin/write", label: "Write", icon: <LuPenLine /> },
  {
    id: "trackReport",
    link: "/admin/track-report",
    label: "Patients Track Report",
    icon: <GiProgression />,
  },
  {
    id: "notifications",
    link: "/admin/notifications",
    label: "Notification",
    icon: <IoNotificationsOutline />,
  },
];

export const settingsItems = [
  {
    id: "changePassword",
    link: "/admin/change-password",
    label: "Change Password",
    icon: <LuSettings2 />,
  },
  { id: "changeTheme", link: "#", label: "Change Theme", icon: null },
  { id: "Logout", link: "#", label: "Logout", icon: <IoIosLogOut />  },
];
