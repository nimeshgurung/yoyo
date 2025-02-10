
import { StoryFn, Meta } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { InitiativeSetup } from '../../components/Initiative/InitiativeSetup';

export default {
  title: 'Pages/Initiative Setup',
  component: InitiativeSetup,
  decorators: [
    (Story) => (
      <BrowserRouter>
          <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn = () => <InitiativeSetup />;

Default.storyName = 'Initiative Setup Page';