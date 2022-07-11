import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from '@mui/icons-material/Category';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CampaignIcon from '@mui/icons-material/Campaign';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

export const MenubarData = [
  {
    title: "Inbox",
    icon: <HomeIcon />,
    link: "/inbox",
  },
  {
    title: "Products",
    icon: <CategoryIcon />,
    link: "/products",
  },
  {
    title: "Clients",
    icon: <FolderSharedIcon />,
    link: "/clients",
  },
  {
    title: "Campaigns",
    icon: <CampaignIcon />,
    link: "/campaigns",
  },
  {
    title: "Manegers",
    icon: <ManageAccountsIcon />,
    link: "/manegers",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
];