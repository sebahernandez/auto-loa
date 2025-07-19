function formatNameForURL(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

function formatPrice(price, locale = "es-CL", currency = "CLP") {
  const numericPrice = typeof price === "string" ? Number(price.replace(/[^\d]/g, "")) : price;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency
  }).format(numericPrice);
}

const getCarsByIds = async ({ id }) => {
  const token = "Vve0YvQezuSCZTEdzq9rQ8A4wyau2Rl0IWheI9898rjijcaJyAfyQJC0jiBBGvQI";
  const res = await fetch(`https://venpu.cl/api/cars/stock/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const vehiculo = await res.json();
  return vehiculo;
};
const getFeaturedCars = async () => {
  const token = "Vve0YvQezuSCZTEdzq9rQ8A4wyau2Rl0IWheI9898rjijcaJyAfyQJC0jiBBGvQI";
  const res = await fetch("https://venpu.cl/api/cars/destacados", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const { data: autos } = await res.json();
  return autos;
};
const fetchAllVehicles = async () => {
  const url = "https://venpu.cl/api/cars/stock";
  const token = "Vve0YvQezuSCZTEdzq9rQ8A4wyau2Rl0IWheI9898rjijcaJyAfyQJC0jiBBGvQI";
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (!res.ok) {
    console.error("Fetch error:", res.status, res.statusText);
    throw new Error("Network response was not ok");
  }
  const { data } = await res.json();
  return data;
};

export { formatNameForURL as a, fetchAllVehicles as b, getFeaturedCars as c, formatPrice as f, getCarsByIds as g };
