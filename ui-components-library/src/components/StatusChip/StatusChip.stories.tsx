import type { Meta, StoryObj } from '@storybook/react';
import StatusChip from './StatusChip';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckIcon from '@mui/icons-material/Check';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/StatusChip',
  component: StatusChip,
};

export default meta;

type Story = StoryObj<typeof StatusChip>;

export const Planned: Story = {
  args: {
    icon: <CalendarTodayIcon style={{ fontSize: 16, color: '#4D4D4D' }} />,
    label: 'Planned',
  },
};

export const InProgress: Story = {
  args: {
    icon: <AccessTimeIcon style={{ fontSize: 16, color: '#4D4D4D' }} />,
    label: 'In progress',
  },
};

export const Done: Story = {
  args: {
    icon: <CheckIcon style={{ fontSize: 16, color: '#4D4D4D' }} />,
    label: 'Done',
  },
};