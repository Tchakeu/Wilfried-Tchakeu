
export default {
  basePath: 'https://tchakeu.github.io/Wilfried-Tchakeu',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
