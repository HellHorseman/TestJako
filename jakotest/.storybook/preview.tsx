import type {Preview} from "@storybook/react";

const preview: Preview = {
    parameters: {
        layout: 'fullscreen',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    minHeight: '100vh',
                    margin: '0',
                    padding: '0',
                }}
            >
                <Story/>
            </div>
        ),
    ],
};

export default preview;
