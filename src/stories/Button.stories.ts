import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button.tsx';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CreateGameButton: Story = {
  args: {
    size: "small",
    children: '경기 만들기',
  },
};

export const JoinGameButton: Story = {
  args: {
    children: '참가하기',
    size: 'medium',
  },
};

export const PayButton: Story = {
  args: {
    size: 'large',
    children: '결제하기',
  },
};


