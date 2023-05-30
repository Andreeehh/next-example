import { Meta, Story } from '@storybook/react';
import { CloneMe, CloneMeProps } from '.';

export default {
  title: 'CloneMe',
  component: CloneMe,
} as Meta;

export const Template: Story<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
