import { Meta, Story } from '@storybook/react';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est distinctio quasi corporis minus.
    Reiciendis, dolorem autem quibusdam rerum suscipit natus aperiam ipsum
    saepe aliquid sunt nisi hic quis eligendi beatae!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
