import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DDGbpyR2.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_C5uvJB4v.mjs');
const _page1 = () => import('./chunks/ask_CcZ0MVSa.mjs');
const _page2 = () => import('./chunks/upload_CX8pUssy.mjs');
const _page3 = () => import('./chunks/index_DxD74xSZ.mjs');
const _page4 = () => import('./chunks/index_FplhSKXT.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/ask.ts", _page1],
    ["src/pages/api/upload.ts", _page2],
    ["src/pages/es/index.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f7352c6e-f00d-4b29-9393-886ffd0a91be"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
