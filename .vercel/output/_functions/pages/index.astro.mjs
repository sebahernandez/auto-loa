import { c as createComponent, e as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_BnzDu_kD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BHnlGvpK.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
/* empty css                                 */
import 'clsx';
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_TKpLA7Tx.mjs';
import { c as getFeaturedCars } from '../chunks/fetchSliders_DENCwVZw.mjs';
import { V as VehicleCard } from '../chunks/ProductCard_CT4eSE0C.mjs';
export { renderers } from '../renderers.mjs';

const slide01 = new Proxy({"src":"/_astro/slide-01.KKQOJYwb.png","width":1920,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/slide-01.png";
							}
							
							return target[name];
						}
					});

const slide02 = new Proxy({"src":"/_astro/slide-02.DqvFGSJX.png","width":1920,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/slide-02.png";
							}
							
							return target[name];
						}
					});

const slide03 = new Proxy({"src":"/_astro/slide-03.BO7_55TJ.png","width":1920,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/slide-03.png";
							}
							
							return target[name];
						}
					});

const slide04 = new Proxy({"src":"/_astro/slide-04.CIG6pyI5.png","width":1920,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/slide-04.png";
							}
							
							return target[name];
						}
					});

const slide05 = new Proxy({"src":"/_astro/slide-05.DnkiQmnn.png","width":1920,"height":700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/slide-05.png";
							}
							
							return target[name];
						}
					});

const slideImages = [
  {
    src: slide01.src,
    alt: "Interior moderno de automóvil",
    title: "Auto Loa",
    subtitle: "Tu próximo auto te está esperando"
  },
  {
    src: slide02.src,
    alt: "Automóvil de lujo en carretera",
    title: "Calidad Premium",
    subtitle: "Los mejores vehículos del mercado"
  },
  {
    src: slide03.src,
    alt: "Concesionario de automóviles",
    title: "Amplio Inventario",
    subtitle: "Miles de opciones para elegir"
  },
  {
    src: slide04.src,
    alt: "Auto eléctrico cargando",
    title: "Futuro Sostenible",
    subtitle: "Vehículos eléctricos e híbridos"
  },
  {
    src: slide05.src,
    alt: "Llaves de automóvil",
    title: "Financiamiento Fácil",
    subtitle: "Planes de pago que se adaptan a ti"
  }
];
const HeroSlider = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Estilos aplicados inmediatamente para evitar el flash azul */
      .swiper-button-next,
      .swiper-button-prev {
        color: #ea580c !important;
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        color: #c2410c !important;
      }

      .swiper-pagination-bullet {
        background: #ea580c !important;
        opacity: 0.5 !important;
      }

      .swiper-pagination-bullet-active {
        background: #ea580c !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "hero-section my-14 py-8 sm:py-12 lg:py-16 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(
    Swiper,
    {
      ref: swiperRef,
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      loop: true,
      speed: 1e3,
      autoplay: {
        delay: 5e3,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev"
      },
      pagination: {
        el: ".custom-swiper-pagination",
        clickable: true,
        dynamicBullets: true
      },
      centeredSlides: true,
      grabCursor: true,
      watchOverflow: true,
      className: "w-full h-full",
      children: [
        slideImages.map((slide, index) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] shadow-2xl", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: slide.src,
              alt: slide.alt,
              className: "w-full h-full object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50 flex items-center", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-12 sm:px-8 lg:px-[130px]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-full sm:max-w-2xl lg:max-w-3xl text-white", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight", children: slide.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90", children: slide.subtitle }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/catalogo",
                className: "inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                children: [
                  "Ver Stock",
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: "ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M9 5l7 7-7 7"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] }) }) })
        ] }) }, index)),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "custom-swiper-button-prev swiper-button-prev",
            style: { color: "#ea580c" }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "custom-swiper-button-next swiper-button-next",
            style: { color: "#ea580c" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "custom-swiper-pagination swiper-pagination" })
      ]
    }
  ) }) });
};

const $$Astro$1 = createAstro();
const $$TextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TextImage;
  const { title, subtitle, description, imageUrl, imageAlt, buttonText, buttonUrl, reverse, stats, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-5 sm:py-16 lg:py-24" data-astro-cid-sih3fxci> <div class="container mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-sih3fxci> <div${addAttribute(`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:grid-flow-row-dense" : ""}`, "class")} data-astro-cid-sih3fxci> <!-- Caja de Texto Mejorada --> <div${addAttribute(`space-y-8 ${reverse ? "lg:col-start-2" : ""}`, "class")} data-astro-cid-sih3fxci> <!-- Header Section --> <div class="space-y-6" data-astro-cid-sih3fxci> <!-- Subtítulo con badge --> ${subtitle && renderTemplate`<div class="inline-flex items-center" data-astro-cid-sih3fxci> <span class="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg" data-astro-cid-sih3fxci> <svg class="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-sih3fxci> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-sih3fxci></path> </svg> ${subtitle} </span> </div>`} <!-- Título principal con gradiente --> <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight" data-astro-cid-sih3fxci> ${title} </h2> <!-- Descripción mejorada --> <p class="text-xl text-gray-600 leading-relaxed font-light max-w-xl" data-astro-cid-sih3fxci> ${description} </p> </div> <!-- Stats Section (si se proporcionan) --> ${stats && stats.length > 0 && renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 gap-6 py-6 border-y border-gray-200" data-astro-cid-sih3fxci> ${stats.map((stat) => renderTemplate`<div class="text-center" data-astro-cid-sih3fxci> <div class="text-3xl md:text-4xl font-bold text-red-600 mb-1" data-astro-cid-sih3fxci> ${stat.number} </div> <div class="text-sm font-medium text-gray-600 uppercase tracking-wide" data-astro-cid-sih3fxci> ${stat.label} </div> </div>`)} </div>`} <!-- Features List (si se proporcionan) --> ${features && features.length > 0 && renderTemplate`<div class="space-y-4" data-astro-cid-sih3fxci> <h3 class="text-lg font-semibold text-gray-900 mb-4" data-astro-cid-sih3fxci>¿Por qué elegir Auto Loa?</h3> <div class="grid grid-cols-1 gap-3" data-astro-cid-sih3fxci> ${features.map((feature) => renderTemplate`<div class="flex items-start space-x-3" data-astro-cid-sih3fxci> <div class="flex-shrink-0 mt-1" data-astro-cid-sih3fxci> <div class="w-6 h-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center" data-astro-cid-sih3fxci> <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-sih3fxci> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-sih3fxci></path> </svg> </div> </div> <div class="flex-1" data-astro-cid-sih3fxci> <span class="text-gray-900 font-semibold text-base" data-astro-cid-sih3fxci>${feature}</span> </div> </div>`)} </div> </div>`} <!-- Testimonial o Value Proposition --> <div class="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200" data-astro-cid-sih3fxci> <div class="flex items-start space-x-4" data-astro-cid-sih3fxci> <div class="flex-shrink-0" data-astro-cid-sih3fxci> <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center" data-astro-cid-sih3fxci> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sih3fxci> <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" data-astro-cid-sih3fxci></path> </svg> </div> </div> <div data-astro-cid-sih3fxci> <h4 class="text-lg font-bold text-gray-900 mb-2" data-astro-cid-sih3fxci>Experiencia de confianza</h4> <p class="text-gray-700 text-sm leading-relaxed" data-astro-cid-sih3fxci>
Con más de 10 años en el mercado automotriz, hemos ayudado a más de 5,000 familias a encontrar su auto ideal. Nuestro compromiso es ofrecerte transparencia, calidad y el mejor servicio al cliente.
</p> </div> </div> </div> <!-- Botón de acción mejorado --> ${buttonText && buttonUrl && renderTemplate`<div class="pt-6" data-astro-cid-sih3fxci> <a${addAttribute(buttonUrl, "href")} class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500/25 shadow-xl" data-astro-cid-sih3fxci> ${buttonText} <svg class="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sih3fxci> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-sih3fxci></path> </svg> </a> </div>`} </div> <!-- Caja de Imagen Mejorada --> <div${addAttribute(`relative ${reverse ? "lg:col-start-1" : ""}`, "class")} data-astro-cid-sih3fxci> <!-- Composición de imágenes estilo galería --> <div class="relative" data-astro-cid-sih3fxci> <!-- Imagen principal grande --> <div class="relative" data-astro-cid-sih3fxci> <div class="aspect-w-4 aspect-h-3 overflow-hidden rounded-3xl shadow-2xl" data-astro-cid-sih3fxci> <img${addAttribute(imageUrl, "src")}${addAttribute(imageAlt, "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-sih3fxci> </div> </div> <!-- Badge de experiencia (estilo de la imagen de referencia) --> <div class="absolute top-6 right-6 bg-black/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 animate-float-slow" data-astro-cid-sih3fxci> <div class="text-white text-center" data-astro-cid-sih3fxci> <div class="text-2xl font-bold mb-1" data-astro-cid-sih3fxci>+10</div> <div class="text-xs uppercase tracking-wider opacity-90" data-astro-cid-sih3fxci>años</div> <div class="text-xs font-medium" data-astro-cid-sih3fxci>experiencia</div> </div> </div> <!-- Elementos decorativos flotantes --> <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 blur-xl -z-10 animate-pulse-slow" data-astro-cid-sih3fxci></div> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-15 blur-2xl -z-10 animate-float-reverse" data-astro-cid-sih3fxci></div> </div> <!-- Tarjeta flotante con información adicional --> <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 max-w-xs hidden lg:block z-10 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-float" data-astro-cid-sih3fxci> <div class="space-y-3" data-astro-cid-sih3fxci> <div class="flex items-center space-x-2" data-astro-cid-sih3fxci> <div class="flex space-x-1" data-astro-cid-sih3fxci> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<svg class="w-4 h-4 text-yellow-400 fill-current hover:scale-110 transition-transform duration-200" viewBox="0 0 20 20" data-astro-cid-sih3fxci> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-sih3fxci></path> </svg>`)} </div> <span class="text-sm font-semibold text-gray-700" data-astro-cid-sih3fxci>4.9</span> </div> <p class="text-sm text-gray-600 font-medium" data-astro-cid-sih3fxci>Satisfacción del cliente</p> <p class="text-xs text-gray-500" data-astro-cid-sih3fxci>Basado en +1,200 reseñas verificadas</p> </div> </div> <!-- Tarjeta flotante con garantía (reposicionada) --> <div class="absolute top-1/2 -left-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 shadow-xl max-w-44 hidden lg:block z-10 transform -translate-y-1/2 hover:scale-105 hover:-translate-x-2 transition-all duration-500 animate-float-reverse" data-astro-cid-sih3fxci> <div class="text-white" data-astro-cid-sih3fxci> <div class="flex items-center space-x-2 mb-2" data-astro-cid-sih3fxci> <svg class="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-sih3fxci> <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-sih3fxci></path> </svg> <span class="text-sm font-bold" data-astro-cid-sih3fxci>Garantía</span> </div> <p class="text-xs font-medium" data-astro-cid-sih3fxci>12 meses incluidos</p> <p class="text-xs opacity-90" data-astro-cid-sih3fxci>En todos nuestros vehículos</p> </div> </div> </div> </div> </div> </section> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/text-and-image/TextImage.astro", void 0);

const $$Astro = createAstro();
const $$BannerStock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BannerStock;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full bg-[#020617] relative min-h-[100px]" data-astro-cid-unrifklh> <div class="banner-content" data-astro-cid-unrifklh> <h2 data-astro-cid-unrifklh>${title}</h2> <a href="/vehicles" class="arrows-container" data-astro-cid-unrifklh> <div class="arrow" data-astro-cid-unrifklh></div> <div class="arrow" data-astro-cid-unrifklh></div> <div class="arrow" data-astro-cid-unrifklh></div> </a> </div> </div> `;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/banner-stock/BannerStock.astro", void 0);

const falabella = new Proxy({"src":"/_astro/Banco-falabella.DTS2ExTT.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/brands/Banco-falabella.png";
							}
							
							return target[name];
						}
					});

const santander = new Proxy({"src":"/_astro/Santander-finance.BZo1ncfv.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/brands/Santander-finance.png";
							}
							
							return target[name];
						}
					});

const tanner = new Proxy({"src":"/_astro/Tanner.H2AG_xyw.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/brands/Tanner.png";
							}
							
							return target[name];
						}
					});

const unidad = new Proxy({"src":"/_astro/Unidad-financiera.Dz3LXELw.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/brands/Unidad-financiera.png";
							}
							
							return target[name];
						}
					});

const venpu = new Proxy({"src":"/_astro/Venpu.DRgKrJZR.png","width":225,"height":90,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/assets/brands/Venpu.png";
							}
							
							return target[name];
						}
					});

const $$Brand = createComponent(($$result, $$props, $$slots) => {
  const brands = [
    {
      name: "Banco Falabella",
      logo: falabella,
      alt: "Banco Falabella Logo"
    },
    {
      name: "Santander Finance",
      logo: santander,
      alt: "Tanner Logo"
    },
    {
      name: "Tanner",
      logo: tanner,
      alt: "Santander Logo"
    },
    {
      name: "Unidad",
      logo: unidad,
      alt: "Unidad Logo"
    },
    {
      name: "Venpu",
      logo: venpu,
      alt: "Venpu Logo"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-24 sm:py-32"> <div class="max-w-7xl mx-auto px-6 lg:px-8"> <h2 class="text-center font-semibold text-black text-2xl sm:text-4xl">Nuestros Partners</h2> <div class="mx-auto mt-10 grid grid-cols-2 items-center gap-x-4 gap-y-10 sm:grid-cols-5 lg:grid-cols-5"> ${brands.map((brand) => renderTemplate`<div class="flex items-center justify-center"> ${renderComponent($$result, "Image", $$Image, { "class": " w-full object-contain", "src": brand.logo ?? "", "alt": brand.alt ?? "", "width": 220, "height": 90 })} </div>`)} </div> </div> </div>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/banner-brand/Brand.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Mar\xEDa Gonz\xE1lez",
      description: "Excelente servicio, encontr\xE9 el auto perfecto para mi familia. El proceso fue r\xE1pido y transparente.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Rodr\xEDguez",
      description: "Muy profesionales y honestos. Me ayudaron a conseguir el mejor precio y la financiaci\xF3n ideal.",
      rating: 4,
      avatar: "CR"
    },
    {
      name: "Ana Mart\xEDnez",
      description: "Incre\xEDble atenci\xF3n al cliente. El auto lleg\xF3 en perfectas condiciones y justo como lo prometieron.",
      rating: 5,
      avatar: "AM"
    }
  ];
  const truncateText = (text, maxLength = 120) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  };
  return renderTemplate`${maybeRenderHead()}<section class="relative py-16 bg-[#020617]"> <div class="absolute inset-0 z-0"${addAttribute({
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000"
  }, "style")}></div> <!-- Content container --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Header --> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-white mb-4">
Lo que dicen nuestros clientes
</h2> <p class="text-lg text-gray-300 max-w-2xl mx-auto">
Trabajamos con aliados financieros confiables para ofrecerte el mejor servicio.
</p> </div> <!-- Testimonials Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials.map((testimonial) => renderTemplate`<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"> <!-- Avatar and Name --> <div class="flex items-center mb-4"> <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-lg"> ${testimonial.avatar} </div> <div class="ml-4"> <h3 class="font-semibold text-gray-900">${testimonial.name}</h3> <!-- Stars Rating --> <div class="flex items-center"> ${renderStars(testimonial.rating).map((isFilled) => renderTemplate`<svg${addAttribute(`w-4 h-4 ${isFilled ? "text-yellow-400" : "text-gray-300"}`, "class")} fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} <span class="ml-2 text-sm text-gray-600">(${testimonial.rating}/5)</span> </div> </div> </div> <!-- Description --> <blockquote class="text-gray-700 italic">
"${truncateText(testimonial.description, 120)}"
</blockquote> </div>`)} </div> </div> </section>`;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/testimonials/Testimonials.astro", void 0);

const FeaturedCars = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchFeaturedCars = async () => {
    try {
      const autos = await getFeaturedCars();
      setVehicles(autos.map((auto) => ({ vehicle: auto })));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFeaturedCars();
  }, []);
  const isLoopEnabled = vehicles.length > 4;
  return /* @__PURE__ */ jsxs("section", { className: "py-0 md:py-5 bg-white text-black", children: [
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 mb-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2", children: "Destacados" }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-gray-600", children: "Tenemos una amplia variedad de vehículos usados y de todas las marcas" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-5", children: /* @__PURE__ */ jsx(
      Swiper,
      {
        modules: [Navigation, Autoplay],
        spaceBetween: 30,
        slidesPerView: 4,
        pagination: { clickable: true },
        autoplay: {
          delay: 3e3,
          // Tiempo entre cada cambio de diapositiva (en ms)
          disableOnInteraction: false
          // Continúa el autoplay incluso si el usuario interactúa
        },
        loop: isLoopEnabled,
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          639: {
            slidesPerView: 1
          },
          865: {
            slidesPerView: 2
          },
          1e3: {
            slidesPerView: 3
          },
          1500: {
            slidesPerView: 4
          },
          1700: {
            slidesPerView: 4
          }
        },
        children: vehicles.map(({ vehicle }) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx("div", { className: "py-8", children: /* @__PURE__ */ jsx(VehicleCard, { vehicle }) }) }, vehicle.id))
      }
    ) })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AutoLoa - Tu automotora de confianza", "description": "Compra y vende veh\xEDculos 4x4 con confianza y seguridad. Descubre nuestro cat\xE1logo y cont\xE1ctanos para m\xE1s informaci\xF3n." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", HeroSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/hero-slider/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturedCars", FeaturedCars, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/components/featured-cars/FeaturedCars", "client:component-export": "FeaturedCars" })} ${renderComponent($$result2, "TextImage", $$TextImage, { "title": "\xBFPor qu\xE9 elegirnos?", "subtitle": "", "description": "Confianza, rapidez y flexibilidad. Accede a tasas preferenciales y cuotas adaptadas a tus posibilidades. En AutoLoa, hacemos que comprar o vender tu auto sea simple y seguro.", "imageUrl": "/frontis-autoloa.webp", "imageAlt": "Imagen de un coche en exhibici\xF3n", "buttonText": "Explorar Veh\xEDculos", "buttonUrl": "", "reverse": false })} ${renderComponent($$result2, "BannerStock", $$BannerStock, { "title": "Ver stock completo" })} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Brand", $$Brand, {})} ` })}`;
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/index.astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
