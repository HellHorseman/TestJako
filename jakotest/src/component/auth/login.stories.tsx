import Login from "@/component/auth/login";
import React from 'react';
import {Meta, StoryFn} from "@storybook/react";


export default {
    title: 'Pages/Login',
    component: Login,
} as Meta;

const Template: StoryFn = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};