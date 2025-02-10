import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';
import { CanvasCard, CanvasCardProps } from '../CanvasCard/CanvasCard';
import { InitiativeCardLayout } from './InitiativeCardLayout';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  searchField: {
    width: '240px',
    '& .MuiOutlinedInput-root': {
      height: '40px',
      backgroundColor: theme.palette.background.paper,
    },
  },
  viewControls: {
    display: 'flex',
    gap: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
  },
  viewButton: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    '&.active': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(336px, 1fr))',
    gap: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

const MOCK_INITIATIVES: CanvasCardProps[] = [
  {
    type: 'Objective',
    icon: '🚀',
    status: 'in-progress',
    ragStatus: 'amber',
    lastUpdated: 'Yesterday',
    name: 'User has entered the initiative name here and it can span multiple lines',
    teamName: 'SYDNEY SIEROTA',
    teamInitial: 'S',
    date: '25 MAR 25',
    progress: 75,
  },
  {
    type: 'Objective',
    icon: '🚀',
    status: 'planned',
    ragStatus: 'green',
    lastUpdated: 'Just now',
    name: 'This is a new initiative which was requested by an IM and has been added by the Blueprint team',
    teamName: 'MANAGER NOT SET',
    teamInitial: 'M',
    date: '25 MAR 25',
    progress: 0,
  },
  {
    type: 'Objective',
    icon: '🚀',
    status: 'in-progress',
    ragStatus: 'red',
    lastUpdated: 'Yesterday',
    name: 'User has entered the initiative name here and it can span multiple lines',
    teamName: 'SYDNEY SIEROTA',
    teamInitial: 'S',
    date: '25 MAR 25',
    progress: 50,
  },
  {
    type: 'Objective',
    icon: '🎯',
    status: 'planned',
    ragStatus: 'green',
    lastUpdated: '2 days ago',
    name: 'Implement new customer feedback system across all product lines',
    teamName: 'ALEX CHEN',
    teamInitial: 'A',
    date: '15 APR 25',
    progress: 100,
  },
  {
    type: 'Objective',
    icon: '💡',
    status: 'in-progress',
    ragStatus: 'amber',
    lastUpdated: '5 hours ago',
    name: 'Develop AI-powered analytics dashboard for real-time insights',
    teamName: 'MARIA RODRIGUEZ',
    teamInitial: 'M',
    date: '30 JUN 25',
    progress: 35,
  },
  {
    type: 'Objective',
    icon: '🔄',
    status: 'in-progress',
    ragStatus: 'red',
    lastUpdated: '1 week ago',
    name: 'Legacy system migration to cloud infrastructure',
    teamName: 'JAMES WILSON',
    teamInitial: 'J',
    date: '10 MAY 25',
    progress: 20,
  },
  {
    type: 'Objective',
    icon: '📱',
    status: 'in-progress',
    ragStatus: 'green',
    lastUpdated: '3 days ago',
    name: 'Mobile app redesign and performance optimization',
    teamName: 'EMMA TAYLOR',
    teamInitial: 'E',
    date: '01 JUL 25',
    progress: 60,
  },
  {
    type: 'Objective',
    icon: '🔐',
    status: 'planned',
    ragStatus: 'amber',
    lastUpdated: '1 day ago',
    name: 'Implement enhanced security protocols across all platforms',
    teamName: 'DAVID KUMAR',
    teamInitial: 'D',
    date: '20 AUG 25',
    progress: 0,
  },
  {
    type: 'Objective',
    icon: '🌐',
    status: 'in-progress',
    ragStatus: 'green',
    lastUpdated: '12 hours ago',
    name: 'International market expansion and localization project',
    teamName: 'SOPHIA WANG',
    teamInitial: 'S',
    date: '15 SEP 25',
    progress: 45,
  },
  {
    type: 'Objective',
    icon: '📊',
    status: 'in-progress',
    ragStatus: 'amber',
    lastUpdated: '4 days ago',
    name: 'Q3 Performance optimization and scalability improvements',
    teamName: 'RYAN PATEL',
    teamInitial: 'R',
    date: '30 JUL 25',
    progress: 90,
  },
  {
    type: 'Objective',
    icon: '🤝',
    status: 'in-progress',
    ragStatus: 'green',
    lastUpdated: 'Today',
    name: 'Strategic partnership integration and API development',
    teamName: 'LISA JOHNSON',
    teamInitial: 'L',
    date: '05 OCT 25',
    progress: 30,
  },
  // Add more mock initiatives as needed
];

export const InitiativeCardPage: React.FC = () => {
  const { classes } = useStyles();

  return (
    <InitiativeCardLayout>
      <Box className={classes.root}>
        <Box className={classes.cardsGrid}>
          {MOCK_INITIATIVES.map((initiative, index) => (
            <CanvasCard key={index} {...initiative} />
          ))}
        </Box>
      </Box>
    </InitiativeCardLayout>
  );
};