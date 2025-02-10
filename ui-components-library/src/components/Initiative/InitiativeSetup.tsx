import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { InitiativeSetupLayout } from './InitiativeSetupLayout';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
  setupSection: {
    display: 'flex',
    gap: theme.spacing(4),
  },
  setupCard: {
    flex: 1,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[30]}`,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  cardIcon: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.text.secondary,
  },
  cardContent: {
    flex: 1,
  },
  detailsSection: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.neutral[30]}`,
    padding: theme.spacing(4),
  },
  detailsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '120px 1fr',
    gap: theme.spacing(2),
  },
}));

export const InitiativeSetup: React.FC = () => {
  const { classes } = useStyles();

  return (
    <InitiativeSetupLayout>
      <div className={classes.root}>
        <Typography variant="h6">Finish initiative setup</Typography>
        <div className={classes.setupSection}>
          <div className={classes.setupCard}>
            <EditIcon className={classes.cardIcon} />
            <div className={classes.cardContent}>
              <Typography variant="subtitle1">Complete details</Typography>
              <Typography variant="body2" color="text.secondary">
                Fill out information about this initiative as part of setup.
              </Typography>
            </div>
            <Button variant="contained">Start</Button>
          </div>

          <div className={classes.setupCard}>
            <EditIcon className={classes.cardIcon} />
            <div className={classes.cardContent}>
              <Typography variant="subtitle1">Complete budgets and costs</Typography>
              <Typography variant="body2" color="text.secondary">
                Provide budgets and costs for this initiative as part of setup.
              </Typography>
            </div>
            <Button variant="contained">Start</Button>
          </div>

          <div className={classes.setupCard}>
            <MenuBookIcon className={classes.cardIcon} />
            <div className={classes.cardContent}>
              <Typography variant="subtitle1">Build book of work</Typography>
              <Typography variant="body2" color="text.secondary">
                Enter build mode to build the book of work for this initiative.
              </Typography>
            </div>
            <Button variant="contained">Start</Button>
          </div>
        </div>

        <div className={classes.detailsSection}>
          <div className={classes.detailsHeader}>
            <Typography variant="h6">Details</Typography>
            <Button startIcon={<EditIcon />}>Edit</Button>
          </div>

          <div className={classes.detailsGrid}>
            <Typography color="text.secondary">Name</Typography>
            <Typography>Sustainability Measures</Typography>

            <Typography color="text.secondary">Description</Typography>
            <Typography color="text.secondary">Not set</Typography>

            <Typography color="text.secondary">Division</Typography>
            <Typography color="text.secondary">Not set</Typography>

            <Typography color="text.secondary">Start date</Typography>
            <Typography color="text.secondary">Not set</Typography>

            <Typography color="text.secondary">End date</Typography>
            <Typography color="text.secondary">Not set</Typography>

            <Typography color="text.secondary">Status</Typography>
            <Typography>PLANNED</Typography>

            <Typography color="text.secondary">Progress</Typography>
            <Typography color="text.secondary">Not started</Typography>
          </div>
        </div>
      </div>
    </InitiativeSetupLayout>
  );
};