
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://tchakeu.github.io/Wilfried-Tchakeu/',
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
    'index.csr.html': {size: 615, hash: '08c1c837e5b9f1c5c40c86398ca264dc1380159f0e337dca63897efa5df495b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 991, hash: '726e570cca0de1cec3fe2ce87cb24c6c7fb07d7f221d1f436149c105a3ffdda1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 50869, hash: '1284687f5beeea95a1bc689d377f16b2e45913472c75432de3e3b199bc3e3aac', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 38279, hash: 'bb80462ef932d5b9fc85b9dd824def86ed038a0f047812b69b3dfd70aa41e619', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 50097, hash: 'c66188351aab887a86fc75e698c2e096820d4620f8376850f535ec0bfe7dad6a', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 40742, hash: 'fb5c7dcaad7563d901ca2ee1af34cae10265c43a842d2b225912beb29e8676df', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37898, hash: '8f09ec67b600abf4a6b49e98f643111c9ccc4cb982dbc0a55b33ab452e6b29de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KD7CUS6N.css': {size: 12, hash: 'ObySRep2SI4', text: () => import('./assets-chunks/styles-KD7CUS6N_css.mjs').then(m => m.default)}
  },
};
