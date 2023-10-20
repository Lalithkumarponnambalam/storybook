// Here we map the name of a module to their NAME in the global scope.
export const globals = {
  '@storybook/global': '__STORYBOOK_MODULE_GLOBAL__',
  '@storybook/channel-postmessage': '__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__', // @deprecated: remove in 8.0
  '@storybook/channel-websocket': '__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__', // @deprecated: remove in 8.0
  '@storybook/channels': '__STORYBOOK_MODULE_CHANNELS__',
  '@storybook/client-logger': '__STORYBOOK_MODULE_CLIENT_LOGGER__',
  '@storybook/core-events': '__STORYBOOK_MODULE_CORE_EVENTS__',
  '@storybook/preview-api': '__STORYBOOK_MODULE_PREVIEW_API__',
};
