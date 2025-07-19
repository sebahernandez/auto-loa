import { jsxs, jsx } from 'react/jsx-runtime';
import { f as formatPrice, a as formatNameForURL } from './fetchSliders_DENCwVZw.mjs';

function VehicleCard({ vehicle }) {
  const formattedPrice = formatPrice(vehicle.price);
  return /* @__PURE__ */ jsxs("div", { className: "group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("a", { href: `/vehiculos/${formatNameForURL(vehicle.name)}`, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: vehicle.imageUrl,
          alt: vehicle.name,
          className: "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: vehicle.available ? /* @__PURE__ */ jsx("div", { className: "bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg", children: "✓ Disponible" }) : /* @__PURE__ */ jsx("div", { className: "bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg", children: "✕ Vendido" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 text-md leading-tight line-clamp-2 mb-1 h-10", children: /* @__PURE__ */ jsx(
        "a",
        {
          href: `/vehiculos/${formatNameForURL(vehicle.name)}`,
          className: "hover:text-gray-700 transition-colors",
          children: vehicle.name
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between text-sm text-gray-600 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "🚗" }),
          /* @__PURE__ */ jsxs("span", { children: [
            vehicle.miles?.toLocaleString(),
            " km"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "⛽" }),
          /* @__PURE__ */ jsx("span", { children: vehicle.fuelType })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "⚙️" }),
          /* @__PURE__ */ jsx("span", { children: vehicle.transmission })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Precio" }),
          /* @__PURE__ */ jsx("p", { className: "text-[16px] font-bold text-gray-900", children: formattedPrice })
        ] }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `/vehiculos/${formatNameForURL(vehicle.name)}`,
            className: "bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-[11px] font-medium transition-colors duration-200 shadow-sm hover:shadow-md",
            children: "Ver más"
          }
        )
      ] })
    ] })
  ] });
}

export { VehicleCard as V };
