import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Paper, Divider, Box } from '@mui/material';
import { ContextMenuItem, ContextMenuItemProps } from './ContextMenuItem';
import { ContextMenuTab } from './ContextMenuTab';

const useStyles = makeStyles()((theme) => ({
  root: {
    backgroundColor: theme.palette.neutral[90],
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    width: 232,
    overflow: 'hidden',
  },
  tabs: {
    display: 'flex',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  section: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
  },
  divider: {
    backgroundColor: theme.palette.neutral[70],
    margin: theme.spacing(1, 0),
  },
}));

export interface ContextMenuTab {
  label: string;
  sections: ContextMenuSection[];
}

export interface ContextMenuSection {
  items: ContextMenuItemProps[];
}

interface ContextMenuProps {
  sections?: ContextMenuSection[];
  tabs?: ContextMenuTab[];
  defaultTabIndex?: number;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  sections = [],
  tabs = [],
  defaultTabIndex = 0,
}) => {
  const { classes } = useStyles();
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIndex);

  const activeSections = tabs.length > 0
    ? tabs[activeTabIndex].sections
    : sections;

  return (
    <Paper className={classes.root} elevation={4}>
      {tabs.length > 0 && (
        <>
          <Box className={classes.tabs}>
            {tabs.map((tab, index) => (
              <ContextMenuTab
                key={index}
                label={tab.label}
                active={index === activeTabIndex}
                onClick={() => setActiveTabIndex(index)}
              />
            ))}
          </Box>
          <Divider className={classes.divider} />
        </>
      )}

      {activeSections.map((section, sectionIndex) => (
        <React.Fragment key={sectionIndex}>
          {sectionIndex > 0 && <Divider className={classes.divider} />}
          <div className={classes.section}>
            {section.items.map((item, itemIndex) => (
              <ContextMenuItem key={itemIndex} {...item} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </Paper>
  );
};