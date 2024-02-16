import AccordionSpec from '@/components/Accordion/index.spec';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Accordion',
  component: AccordionSpec,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    type: {
      type: 'string',
      options: ['single', 'multiple'],
      control: 'select',
    },
  },
} satisfies Meta<typeof AccordionSpec>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    type: 'single',
    data: [
      { label: '아코디언 테스트 1', value: 'test1', content: <p>test1</p> },
      { label: '아코디언 테스트 2', value: 'test2', content: <p>test2</p> },
      { label: '아코디언 테스트 3', value: 'test3', content: <p>test3</p> },
    ],
  },
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
    data: [
      { label: '아코디언 테스트 1', value: 'test1', content: <p>test1</p> },
      { label: '아코디언 테스트 2', value: 'test2', content: <p>test2</p> },
      { label: '아코디언 테스트 3', value: 'test3', content: <p>test3</p> },
    ],
  },
};
