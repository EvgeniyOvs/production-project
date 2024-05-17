import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi cumque eius, et excepturi quam quo sint tempora ullam! Autem deserunt distinctio illum impedit libero non nostrum nulla quod.\n',
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    // eslint-disable-next-line max-len
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut commodi cumque eius, et excepturi quam quo sint tempora ullam! Autem deserunt distinctio illum impedit libero non nostrum nulla quod.\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

