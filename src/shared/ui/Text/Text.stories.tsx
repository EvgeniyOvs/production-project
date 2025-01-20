import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text lorem ipsum',
    text: 'Description Description Description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Text lorem ipsum',
    text: 'Description Description Description',
    theme: TextTheme.ERROR,
};
Error.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text lorem ipsum',
};
onlyTitle.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description Description Description',
};
onlyText.decorators = [ThemeDecorator(Theme.DARK)];
