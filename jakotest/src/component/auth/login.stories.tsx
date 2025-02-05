import Login from "@/component/auth/login";
import React from 'react';
import {Meta, StoryFn} from "@storybook/react";


export default {
    title: 'Components/Login',
    component: Login,
    argTypes: {
        background: {
            control: 'color',
        },
        buttonColor: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        showRememberMe: {
            control: 'boolean',
        },
    },
} as Meta;

const Template: StoryFn = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
    background: '#ffffff',
    buttonColor: 'primary',
    showRememberMe: true,
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
    background: '#333',
    buttonColor: 'secondary',
    showRememberMe: true,
};

export const WithoutRememberMe = Template.bind({});
WithoutRememberMe.args = {
    background: '#ffffff',
    buttonColor: 'primary',
    showRememberMe: false,
};

export const GreenButton = Template.bind({});
GreenButton.args = {
    background: '#ffffff',
    buttonColor: 'success',
    showRememberMe: true,
};