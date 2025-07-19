// src/pages/api/og/[filename].ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  console.log('=== OG Image API Called ===');
  console.log('Full params object:', params);
  console.log('Request URL:', request.url);
  
  const { filename } = params;
  console.log(`Requested filename: ${filename}`);
  console.log(`Filename type: ${typeof filename}`);
  
  if (!filename) {
    console.log('ERROR: Filename is missing');
    return new Response("Filename missing", { status: 400 });
  }
  
  // Opcionalmente puedes validar extensión
  const safeFilename = filename.replace(/[^a-zA-Z0-9.\-_]/g, "");
  console.log(`Original filename: ${filename}`);
  console.log(`Safe filename: ${safeFilename}`);
  
  // Puedes construir el path según necesites
  const imageUrl = `https://venpu-files.nyc3.cdn.digitaloceanspaces.com/283/${safeFilename}`;
  console.log(`Constructed image URL: ${imageUrl}`);

  try {
    console.log('Attempting to fetch image...');
    const response = await fetch(imageUrl);
    console.log(`Fetch response status: ${response.status}`);
    console.log(`Fetch response ok: ${response.ok}`);
    
    if (!response.ok) {
      console.log('ERROR: Image not found or fetch failed');
      return new Response("Image not found", { status: 404 });
    }
    
    const buffer = await response.arrayBuffer();
    console.log(`Buffer size: ${buffer.byteLength} bytes`);
    console.log('Successfully returning image with headers:', {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000",
    });
    
    return new Response(buffer, {
      headers: {
        "Content-Type": "image/jpeg", // puedes detectar según extensión si necesitas
        "Cache-Control": "public, max-age=31536000",
      },
    });
  } catch (err) {
    console.log('CATCH ERROR:', err);
    return new Response("Error fetching image", { status: 500 });
  }
};
