import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
} as Meta<HeadingProps>;

export const Template: Story<HeadingProps> = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};
