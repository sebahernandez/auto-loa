// src/pages/api/og/[filename].ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const { filename } = params;
  if (!filename) {
    return new Response("Filename missing", { status: 400 });
  }
  // Opcionalmente puedes validar extensión
  const safeFilename = filename.replace(/[^a-zA-Z0-9.\-_]/g, "");
  // Puedes construir el path según necesites
  const imageUrl = `https://venpu-files.nyc3.cdn.digitaloceanspaces.com/283/${safeFilename}`;

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return new Response("Image not found", { status: 404 });
    }
    const buffer = await response.arrayBuffer();
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/jpeg", // puedes detectar según extensión si necesitas
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (err) {
    return new Response("Error fetching image", { status: 500 });
  }
};
