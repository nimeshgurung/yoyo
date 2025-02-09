import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import InboxIcon from '@mui/icons-material/Inbox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import { PrimaryNavigationItem } from './PrimaryNavigationItem';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: theme.spacing(11), // 72px
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  appIcon: {
    width: theme.spacing(8), // 32px
    height: theme.spacing(8), // 32px
    borderRadius: theme.spacing(2), // 8px
    backgroundColor: theme.palette.primary.main,
    margin: theme.spacing(2, 'auto'),
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: theme.spacing(2),
  }
}));

export const PrimaryNavigation: React.FC = () => {
  const { classes } = useStyles();

  return (
    <Paper className={classes.root} elevation={0}>
      <div className={classes.appIcon} />
      <nav className={classes.nav}>
        <PrimaryNavigationItem icon={<HomeIcon />} label="Home" to="/" />
        <PrimaryNavigationItem icon={<WorkIcon />} label="Work" to="/work" />
        <PrimaryNavigationItem icon={<TrackChangesIcon />} label="OKRs" to="/okrs" />
        <PrimaryNavigationItem icon={<RocketLaunchIcon />} label="Initiatives" to="/initiatives" />
        <PrimaryNavigationItem icon={<GroupsIcon />} label="Teams" to="/teams" />
        <PrimaryNavigationItem icon={<InboxIcon />} label="Inbox" to="/inbox" />
        <PrimaryNavigationItem icon={<BookmarkIcon />} label="Saved" to="/saved" />
        <PrimaryNavigationItem icon={<SettingsIcon />} label="Settings" to="/settings" />
      </nav>
    </Paper>
  );
};