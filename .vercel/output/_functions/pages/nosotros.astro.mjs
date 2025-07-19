import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnzDu_kD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BHnlGvpK.mjs';
export { renderers } from '../renderers.mjs';

const $$Nosotros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Nosotros - AutoLoa" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-30 md:py-50 bg-white"> <div class="container mx-auto px-4 sm:px-6 lg:px-0"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <div class="inline-flex items-center px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium mb-6"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Nuestra Historia
</div> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
Tu próxima decisión comienza aquí.
</h2> <p class="text-lg text-gray-600 mb-6 leading-relaxed">
En AutoLoa nos mueve una sola misión: que comprar o vender tu vehículo sea una experiencia simple, segura y personalizada.
Con sede en Calama y un equipo con años de experiencia en el rubro automotriz, nos especializamos en conectar personas con vehículos seleccionados, certificados y con opciones de financiamiento adaptadas a sus necesidades.
</p> <p class="text-lg text-gray-600 mb-8 leading-relaxed">
Desde el primer contacto, te asesoramos de forma transparente para que tomes la mejor decisión, sin presiones.
Ya sea que busques renovar tu auto, financiar tu compra o vender con rapidez, estamos aquí para ayudarte con atención cercana, rapidez y compromiso.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/catalogo" class="inline-flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors">
Ver Catálogo
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/contacto" class="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-orange-600 hover:text-orange-600 transition-colors">
Contáctanos
</a> </div> </div> <div class="relative"> <div class="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-orange-200"> <!-- Placeholder for company image --> <div class="flex items-center justify-center"> <img src="/frontis-autoloa.webp" alt="automotora AutoLoa" class="w-full h-full object-cover"> </div> </div> </div> </div> </div> </section>  <section class="py-20 bg-gradient-to-r from-orange-600 to-orange-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
¿Listo para encontrar tu vehículo ideal?
</h2> <p class="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
Únete a miles de clientes satisfechos que han confiado en AutoLoa para hacer realidad sus sueños automotrices
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/catalogo" class="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
Ver Catálogo
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <a href="/contacto" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors">
Contáctanos Hoy
</a> </div> </div> </section> ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/nosotros.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/nosotros.astro";
const $$url = "/nosotros";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Nosotros,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
