import type { Meta, StoryObj } from '@storybook/react';
import { CanvasCard } from './CanvasCard';

const meta: Meta<typeof CanvasCard> = {
  title: 'Components/CanvasCard',
  component: CanvasCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CanvasCard>;

export const Initiative: Story = {
  args: {
    type: 'Objective',
    name: 'Name',
    teamName: 'MANAGER',
    date: 'DD MMM YY',
    onAddClick: () => console.log('Add clicked'),
  },
};

export const Work: Story = {
  args: {
    type: 'Key Result',
    name: 'Name',
    teamName: 'MANAGER',
    date: 'DD MMM YY',
    onAddClick: () => console.log('Add clicked'),
  },
};