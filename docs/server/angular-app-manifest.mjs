
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Wilfried-Tchakeu/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Wilfried-Tchakeu"
  },
  {
    "renderMode": 2,
    "route": "/Wilfried-Tchakeu/about"
  },
  {
    "renderMode": 2,
    "route": "/Wilfried-Tchakeu/skills"
  },
  {
    "renderMode": 2,
    "route": "/Wilfried-Tchakeu/projects"
  },
  {
    "renderMode": 2,
    "route": "/Wilfried-Tchakeu/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Wilfried-Tchakeu",
    "route": "/Wilfried-Tchakeu/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 453, hash: 'd05a82aea9ddb4fca57274eea8bb2760a8f859910c9e857d281eb3ddf2387e2f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 966, hash: 'fac6668e424bef46f1c638d8394fc5ba6477e1947144d64e1df17b47f7793b28', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 16201, hash: '7b1f8c68a46b4ca8f7cec4ad888ffbec629981a682e8cdad5206d017be721b81', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 18641, hash: 'f44d38894e70704713c076d12973434624683508684e745b16acf154f4d3665e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 28718, hash: '0e34b05dac29d5095ea27b32d2c808c9bd8df43413ea873aa78e3ee7093781df', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 22085, hash: '1da8f076fcbc474dfa43336cc126fcd04d1b1108d9beb3729bf67d0077614606', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31084, hash: 'bc0720773f5b00a91625e110dbcb237ae2225445c692654bc451028f02b688f7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
