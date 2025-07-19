import 'kleur/colors';
import { f as decodeKey } from './chunks/astro/server_BnzDu_kD.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BHkaeaQ6.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/","cacheDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/node_modules/.astro/","outDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/dist/","srcDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/","publicDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/public/","buildClientDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/dist/client/","buildServerDir":"file:///Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-10px)}}.animate-float[data-astro-cid-zetdm5md]{animation:float 3s ease-in-out infinite}.animate-pulse[data-astro-cid-zetdm5md]{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}@keyframes pulse{0%,to{opacity:1}50%{opacity:.5}}\n"},{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/og/[filename]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/og\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"og","dynamic":false,"spread":false}],[{"content":"filename","dynamic":true,"spread":false}]],"params":["filename"],"component":"src/pages/api/og/[filename].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"}],"routeData":{"route":"/catalogo","isIndex":false,"type":"page","pattern":"^\\/catalogo\\/?$","segments":[[{"content":"catalogo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/catalogo.astro","pathname":"/catalogo","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"}],"routeData":{"route":"/nosotros","isIndex":false,"type":"page","pattern":"^\\/nosotros\\/?$","segments":[[{"content":"nosotros","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotros.astro","pathname":"/nosotros","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"},{"type":"external","src":"/_astro/_name_.DYFl8ayd.css"}],"routeData":{"route":"/vehiculos/[name]","isIndex":false,"type":"page","pattern":"^\\/vehiculos\\/([^/]+?)\\/?$","segments":[[{"content":"vehiculos","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"params":["name"],"component":"src/pages/vehiculos/[name].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.ENa0p5c4.css"},{"type":"external","src":"/_astro/catalogo.BlYEnwOV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/catalogo.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/nosotros.astro",{"propagation":"none","containsHead":true}],["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/vehiculos/[name].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/og/[filename]@_@ts":"pages/api/og/_filename_.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/nosotros@_@astro":"pages/nosotros.astro.mjs","\u0000@astro-page:src/pages/vehiculos/[name]@_@astro":"pages/vehiculos/_name_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/catalogo@_@astro":"pages/catalogo.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B-8JwLty.mjs","\u0000@astrojs-manifest":"manifest_Cw8E2Jly.mjs","/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/catalogo/Catalogo":"_astro/Catalogo.BOzXrgRg.js","/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/hero-slider/Hero":"_astro/Hero.CW_KlM_u.js","/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/featured-cars/FeaturedCars":"_astro/FeaturedCars.OAwPH3IE.js","@astrojs/react/client.js":"_astro/client.BxCTEn3I.js","/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/contacto.astro?astro&type=script&index=0&lang.ts":"_astro/contacto.astro_astro_type_script_index_0_lang.ChdF6g0x.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/contacto.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"contact-form\"),t=document.getElementById(\"form-status\"),o=t?.querySelector(\"p\");e?.addEventListener(\"submit\",async s=>{if(s.preventDefault(),!e||!t||!o)return;const c=new FormData(e),i=Object.fromEntries(c.entries()),r=e.querySelector('button[type=\"submit\"]'),d=r.textContent;e.querySelectorAll(\"input, textarea, button\").forEach(n=>{n.setAttribute(\"disabled\",\"true\")}),r.textContent=\"Enviando...\",t.classList.remove(\"hidden\"),o.textContent=\"Enviando mensaje...\",t.className=\"text-gray-600 text-center p-4 bg-gray-50 rounded-xl\";try{const a=await(await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(i)})).json();if(a.error)throw new Error(a.error);e.reset(),o.textContent=\"¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.\",t.className=\"text-green-700 text-center p-4 bg-green-50 rounded-xl border border-green-200\",setTimeout(()=>{t.classList.add(\"hidden\")},5e3)}catch{o.textContent=\"Error al enviar el mensaje. Por favor, intenta nuevamente o contáctanos directamente.\",t.className=\"text-orange-700 text-center p-4 bg-orange-50 rounded-xl border border-orange-200\"}finally{e.querySelectorAll(\"input, textarea, button\").forEach(n=>{n.removeAttribute(\"disabled\")}),r.textContent=d}});"]],"assets":["/_astro/Santander-finance.BZo1ncfv.png","/_astro/Banco-falabella.DTS2ExTT.png","/_astro/Tanner.H2AG_xyw.png","/_astro/slide-05.DnkiQmnn.png","/_astro/Venpu.DRgKrJZR.png","/_astro/Unidad-financiera.Dz3LXELw.png","/_astro/slide-04.CIG6pyI5.png","/_astro/slide-03.BO7_55TJ.png","/_astro/slide-01.KKQOJYwb.png","/_astro/slide-02.DqvFGSJX.png","/_astro/_name_.DYFl8ayd.css","/_astro/catalogo.BlYEnwOV.css","/_astro/index.ENa0p5c4.css","/favicon.svg","/frontis-autoloa.webp","/logo.webp","/_astro/Catalogo.BOzXrgRg.js","/_astro/FeaturedCars.OAwPH3IE.js","/_astro/Hero.CW_KlM_u.js","/_astro/autoplay.FK-Jvymv.js","/_astro/client.BxCTEn3I.js","/_astro/fetchSliders.CQg8tSkg.js","/_astro/index.BJfUAbRs.js","/_astro/index.BypzdWfS.css","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"GDiw0GokG8BHohPfXQgkw2qJyft0SJx1zvnhvZ4Yr2k="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
