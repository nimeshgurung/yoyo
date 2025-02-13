import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '../components/ContextMenu/ContextMenu';
import ImageIcon from '@mui/icons-material/Image';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

const mockSections = [
  {
    items: [
      {
        icon: <ImageIcon sx={{ color: '#BABABA', width: 16, height: 16 }} />,
        label: 'View image',
        shortcut: '⌘ + V',
      },
      {
        icon: <ImageIcon sx={{ color: '#BABABA', width: 16, height: 16 }} />,
        label: 'Save image',
        shortcut: '⌘ + S',
      },
    ],
  },
  {
    items: [
      {
        icon: <ImageIcon sx={{ color: '#BABABA', width: 16, height: 16 }} />,
        label: 'Copy image',
        shortcut: '⌘ + C',
      },
      {
        icon: <ImageIcon sx={{ color: '#BABABA', width: 16, height: 16 }} />,
        label: 'Delete image',
        shortcut: '⌘ + D',
      },
    ],
  },
];

const mockTabs = [
  {
    label: 'Tab 1',
    sections: [mockSections[0]],
  },
  {
    label: 'Tab 2',
    sections: [mockSections[1]],
  },
];

export const Default: Story = {
  args: {
    sections: mockSections,
  },
};

export const SingleSection: Story = {
  args: {
    sections: [mockSections[0]],
  },
};

export const WithTabs: Story = {
  args: {
    tabs: mockTabs,
    defaultTabIndex: 0,
  },
};