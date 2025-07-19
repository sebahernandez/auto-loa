import { c as createComponent, e as createAstro, a as renderTemplate, r as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BnzDu_kD.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BHnlGvpK.mjs';
import { b as fetchAllVehicles, a as formatNameForURL, g as getCarsByIds, f as formatPrice } from '../../chunks/fetchSliders_DENCwVZw.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  const { name } = Astro2.params || {};
  const autos = await fetchAllVehicles();
  const foundVehicle = autos.find(
    (v) => formatNameForURL(v.name) === name
  );
  if (!foundVehicle) {
    throw new Error(`No se encontr\xF3 el veh\xEDculo con nombre: ${name}`);
  }
  const response = await getCarsByIds({ id: String(foundVehicle.id) });
  if (!response || !response.status) {
    throw new Error(`No se encontr\xF3 el veh\xEDculo con ID: ${foundVehicle.id}`);
  }
  const vehicle = response.data;
  const formattedPrice = formatPrice(vehicle.price);
  const vehicleImages = vehicle.imageGallery && vehicle.imageGallery.length > 0 ? vehicle.imageGallery.map((img) => {
    if (typeof img === "string") return img;
    if (typeof img === "object" && img !== null) {
      return img.imageUrl || img.url || vehicle.imageUrl;
    }
    return vehicle.imageUrl;
  }).filter(Boolean) : [vehicle.imageUrl].filter(Boolean);
  const ogImage = vehicleImages[0];
  return renderTemplate(_a || (_a = __template(["", ` <script>
  document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    let currentPage = 0;
    const thumbnailsPerPage = 6;
    
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-btn');
    const currentIndexSpan = document.getElementById('current-index');
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    
    const totalImages = thumbnails.length;
    const totalPages = Math.ceil(totalImages / thumbnailsPerPage);
    
    // Funci\xF3n para mostrar/ocultar thumbnails seg\xFAn la p\xE1gina
    function showThumbnailsPage(page) {
      if (page < 0 || page >= totalPages) return;
      
      currentPage = page;
      
      thumbnails.forEach((thumbnail, index) => {
        const startIndex = page * thumbnailsPerPage;
        const endIndex = startIndex + thumbnailsPerPage;
        
        if (index >= startIndex && index < endIndex) {
          thumbnail.classList.remove('hidden');
        } else {
          thumbnail.classList.add('hidden');
        }
      });
      
      // Actualizar estado de los botones
      updateNavigationButtons();
    }
    
    // Funci\xF3n para actualizar el estado de los botones de navegaci\xF3n
    function updateNavigationButtons() {
      if (scrollUpBtn) {
        scrollUpBtn.disabled = currentPage === 0;
      }
      if (scrollDownBtn) {
        scrollDownBtn.disabled = currentPage === totalPages - 1;
      }
    }
    
    // Funci\xF3n para scroll en thumbnails (paginaci\xF3n)
    function scrollThumbnails(direction) {
      if (direction === 'up' && currentPage > 0) {
        showThumbnailsPage(currentPage - 1);
      } else if (direction === 'down' && currentPage < totalPages - 1) {
        showThumbnailsPage(currentPage + 1);
      }
    }
    
    // Funci\xF3n para asegurar que el thumbnail activo est\xE9 visible
    function scrollToActiveThumbnail(index) {
      if (!thumbnailsContainer || !thumbnails[index]) return;
      
      // Calcular en qu\xE9 p\xE1gina deber\xEDa estar el thumbnail
      const targetPage = Math.floor(index / thumbnailsPerPage);
      
      // Si el thumbnail no est\xE1 en la p\xE1gina actual, cambiar a la p\xE1gina correcta
      if (targetPage !== currentPage) {
        showThumbnailsPage(targetPage);
      }
    }
    
    // Funci\xF3n para cambiar la imagen principal
    function changeMainImage(imageSrc, index) {
      if (!mainImage || index < 0 || index >= totalImages) return;
      
      currentImageIndex = index;
      
      // Cambiar la imagen principal con fade effect
      mainImage.style.opacity = '0.5';
      setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
      }, 150);
      
      // Actualizar thumbnails
      thumbnails.forEach((thumbnail, i) => {
        const isActive = i === index;
        thumbnail.classList.remove('border-blue-500', 'ring-2', 'ring-blue-200', 'border-gray-100', 'hover:border-blue-300');
        if (isActive) {
          thumbnail.classList.add('border-blue-500', 'ring-2', 'ring-blue-200');
        } else {
          thumbnail.classList.add('border-gray-100', 'hover:border-blue-300');
        }
      });
      
      // Actualizar contador
      if (currentIndexSpan) {
        currentIndexSpan.textContent = index + 1;
      }
      
      // Asegurar que el thumbnail activo est\xE9 visible
      scrollToActiveThumbnail(index);
    }
    
    // Event listeners para thumbnails
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image-src');
        if (imageSrc) {
          changeMainImage(imageSrc, index);
        }
      });
    });
    
    // Event listeners para scroll de thumbnails
    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', () => scrollThumbnails('up'));
    }
    
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => scrollThumbnails('down'));
    }
    
    // Scroll con rueda del mouse en thumbnails
    if (thumbnailsContainer) {
      thumbnailsContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 'down' : 'up';
        scrollThumbnails(delta);
      });
    }
    
    // Navegaci\xF3n con teclado solo para thumbnails
    document.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'ArrowUp':
          e.preventDefault();
          scrollThumbnails('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          scrollThumbnails('down');
          break;
      }
    });
    
    // Inicializar vista de thumbnails
    if (totalImages > 0) {
      showThumbnailsPage(0);
    }
    
    // Funcionalidad de zoom para la imagen principal
    if (mainImage) {
      mainImage.addEventListener('click', function() {
        // Crear modal de zoom
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 cursor-pointer';
        
        const zoomedImage = document.createElement('img');
        zoomedImage.src = this.src;
        zoomedImage.className = 'max-w-full max-h-full object-contain cursor-default transition-transform duration-300';
        zoomedImage.onclick = (e) => e.stopPropagation();
        
        // Controles de navegaci\xF3n en el modal
        let modalImageIndex = currentImageIndex;
        
        // Bot\xF3n anterior en modal
        const modalPrevBtn = document.createElement('button');
        modalPrevBtn.innerHTML = \`
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        \`;
        modalPrevBtn.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 z-10';
        modalPrevBtn.style.display = totalImages > 1 ? 'block' : 'none';
        
        // Bot\xF3n siguiente en modal
        const modalNextBtn = document.createElement('button');
        modalNextBtn.innerHTML = \`
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        \`;
        modalNextBtn.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 z-10';
        modalNextBtn.style.display = totalImages > 1 ? 'block' : 'none';
        
        // Funci\xF3n para cambiar imagen en el modal
        const changeModalImage = (direction) => {
          if (direction === 'next') {
            modalImageIndex = (modalImageIndex + 1) % totalImages;
          } else if (direction === 'prev') {
            modalImageIndex = (modalImageIndex - 1 + totalImages) % totalImages;
          }
          
          const newImageSrc = thumbnails[modalImageIndex]?.getAttribute('data-image-src');
          if (newImageSrc) {
            zoomedImage.style.opacity = '0.5';
            setTimeout(() => {
              zoomedImage.src = newImageSrc;
              zoomedImage.style.opacity = '1';
              
              // Actualizar tambi\xE9n la imagen principal y thumbnails en segundo plano
              changeMainImage(newImageSrc, modalImageIndex);
              
              // Actualizar info de la imagen
              imageInfo.innerHTML = \`<p class="text-lg font-semibold">\${thumbnails[modalImageIndex]?.querySelector('img')?.alt || 'Imagen del veh\xEDculo'}</p><p class="text-sm opacity-75">Imagen \${modalImageIndex + 1} de \${totalImages}</p>\`;
            }, 150);
          }
        };
        
        // Event listeners para botones de navegaci\xF3n del modal
        modalPrevBtn.onclick = (e) => {
          e.stopPropagation();
          changeModalImage('prev');
        };
        
        modalNextBtn.onclick = (e) => {
          e.stopPropagation();
          changeModalImage('next');
        };
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '\u2715';
        closeButton.className = 'absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all z-10';
        
        const imageInfo = document.createElement('div');
        imageInfo.className = 'absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center z-10';
        imageInfo.innerHTML = \`<p class="text-lg font-semibold">\${mainImage.alt}</p><p class="text-sm opacity-75">Imagen \${currentImageIndex + 1} de \${totalImages}</p>\`;
        
        // Hint de navegaci\xF3n (solo si hay m\xE1s de una imagen)
        const navigationHint = document.createElement('div');
        if (totalImages > 1) {
          navigationHint.className = 'modal-navigation-hint';
          navigationHint.innerHTML = 'Usa \u2190 \u2192 para navegar';
          
          // Ocultar el hint despu\xE9s de 3 segundos
          setTimeout(() => {
            if (navigationHint.parentNode) {
              navigationHint.style.opacity = '0';
              setTimeout(() => {
                if (navigationHint.parentNode) {
                  navigationHint.parentNode.removeChild(navigationHint);
                }
              }, 300);
            }
          }, 3000);
        }
        
        // Cerrar modal
        const closeModal = () => {
          if (document.body.contains(modal)) {
            document.body.removeChild(modal);
            document.body.classList.remove('modal-open');
            // Remover event listeners del teclado espec\xEDficos del modal
            document.removeEventListener('keydown', handleModalKeydown);
          }
        };
        
        // Navegaci\xF3n con teclado en el modal
        const handleModalKeydown = (e) => {
          switch(e.key) {
            case 'ArrowLeft':
              e.preventDefault();
              if (totalImages > 1) changeModalImage('prev');
              break;
            case 'ArrowRight':
              e.preventDefault();
              if (totalImages > 1) changeModalImage('next');
              break;
            case 'Escape':
              e.preventDefault();
              closeModal();
              break;
          }
        };
        
        modal.addEventListener('click', closeModal);
        closeButton.addEventListener('click', (e) => {
          e.stopPropagation();
          closeModal();
        });
        
        // Agregar event listener para teclado
        document.addEventListener('keydown', handleModalKeydown);
        
        modal.appendChild(zoomedImage);
        modal.appendChild(modalPrevBtn);
        modal.appendChild(modalNextBtn);
        modal.appendChild(closeButton);
        modal.appendChild(imageInfo);
        if (totalImages > 1) {
          modal.appendChild(navigationHint);
        }
        document.body.appendChild(modal);
        document.body.classList.add('modal-open');
      });
    }
  });
<\/script> `], ["", ` <script>
  document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    let currentPage = 0;
    const thumbnailsPerPage = 6;
    
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-btn');
    const currentIndexSpan = document.getElementById('current-index');
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    
    const totalImages = thumbnails.length;
    const totalPages = Math.ceil(totalImages / thumbnailsPerPage);
    
    // Funci\xF3n para mostrar/ocultar thumbnails seg\xFAn la p\xE1gina
    function showThumbnailsPage(page) {
      if (page < 0 || page >= totalPages) return;
      
      currentPage = page;
      
      thumbnails.forEach((thumbnail, index) => {
        const startIndex = page * thumbnailsPerPage;
        const endIndex = startIndex + thumbnailsPerPage;
        
        if (index >= startIndex && index < endIndex) {
          thumbnail.classList.remove('hidden');
        } else {
          thumbnail.classList.add('hidden');
        }
      });
      
      // Actualizar estado de los botones
      updateNavigationButtons();
    }
    
    // Funci\xF3n para actualizar el estado de los botones de navegaci\xF3n
    function updateNavigationButtons() {
      if (scrollUpBtn) {
        scrollUpBtn.disabled = currentPage === 0;
      }
      if (scrollDownBtn) {
        scrollDownBtn.disabled = currentPage === totalPages - 1;
      }
    }
    
    // Funci\xF3n para scroll en thumbnails (paginaci\xF3n)
    function scrollThumbnails(direction) {
      if (direction === 'up' && currentPage > 0) {
        showThumbnailsPage(currentPage - 1);
      } else if (direction === 'down' && currentPage < totalPages - 1) {
        showThumbnailsPage(currentPage + 1);
      }
    }
    
    // Funci\xF3n para asegurar que el thumbnail activo est\xE9 visible
    function scrollToActiveThumbnail(index) {
      if (!thumbnailsContainer || !thumbnails[index]) return;
      
      // Calcular en qu\xE9 p\xE1gina deber\xEDa estar el thumbnail
      const targetPage = Math.floor(index / thumbnailsPerPage);
      
      // Si el thumbnail no est\xE1 en la p\xE1gina actual, cambiar a la p\xE1gina correcta
      if (targetPage !== currentPage) {
        showThumbnailsPage(targetPage);
      }
    }
    
    // Funci\xF3n para cambiar la imagen principal
    function changeMainImage(imageSrc, index) {
      if (!mainImage || index < 0 || index >= totalImages) return;
      
      currentImageIndex = index;
      
      // Cambiar la imagen principal con fade effect
      mainImage.style.opacity = '0.5';
      setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
      }, 150);
      
      // Actualizar thumbnails
      thumbnails.forEach((thumbnail, i) => {
        const isActive = i === index;
        thumbnail.classList.remove('border-blue-500', 'ring-2', 'ring-blue-200', 'border-gray-100', 'hover:border-blue-300');
        if (isActive) {
          thumbnail.classList.add('border-blue-500', 'ring-2', 'ring-blue-200');
        } else {
          thumbnail.classList.add('border-gray-100', 'hover:border-blue-300');
        }
      });
      
      // Actualizar contador
      if (currentIndexSpan) {
        currentIndexSpan.textContent = index + 1;
      }
      
      // Asegurar que el thumbnail activo est\xE9 visible
      scrollToActiveThumbnail(index);
    }
    
    // Event listeners para thumbnails
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image-src');
        if (imageSrc) {
          changeMainImage(imageSrc, index);
        }
      });
    });
    
    // Event listeners para scroll de thumbnails
    if (scrollUpBtn) {
      scrollUpBtn.addEventListener('click', () => scrollThumbnails('up'));
    }
    
    if (scrollDownBtn) {
      scrollDownBtn.addEventListener('click', () => scrollThumbnails('down'));
    }
    
    // Scroll con rueda del mouse en thumbnails
    if (thumbnailsContainer) {
      thumbnailsContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 'down' : 'up';
        scrollThumbnails(delta);
      });
    }
    
    // Navegaci\xF3n con teclado solo para thumbnails
    document.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'ArrowUp':
          e.preventDefault();
          scrollThumbnails('up');
          break;
        case 'ArrowDown':
          e.preventDefault();
          scrollThumbnails('down');
          break;
      }
    });
    
    // Inicializar vista de thumbnails
    if (totalImages > 0) {
      showThumbnailsPage(0);
    }
    
    // Funcionalidad de zoom para la imagen principal
    if (mainImage) {
      mainImage.addEventListener('click', function() {
        // Crear modal de zoom
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 cursor-pointer';
        
        const zoomedImage = document.createElement('img');
        zoomedImage.src = this.src;
        zoomedImage.className = 'max-w-full max-h-full object-contain cursor-default transition-transform duration-300';
        zoomedImage.onclick = (e) => e.stopPropagation();
        
        // Controles de navegaci\xF3n en el modal
        let modalImageIndex = currentImageIndex;
        
        // Bot\xF3n anterior en modal
        const modalPrevBtn = document.createElement('button');
        modalPrevBtn.innerHTML = \\\`
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        \\\`;
        modalPrevBtn.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 z-10';
        modalPrevBtn.style.display = totalImages > 1 ? 'block' : 'none';
        
        // Bot\xF3n siguiente en modal
        const modalNextBtn = document.createElement('button');
        modalNextBtn.innerHTML = \\\`
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        \\\`;
        modalNextBtn.className = 'absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 z-10';
        modalNextBtn.style.display = totalImages > 1 ? 'block' : 'none';
        
        // Funci\xF3n para cambiar imagen en el modal
        const changeModalImage = (direction) => {
          if (direction === 'next') {
            modalImageIndex = (modalImageIndex + 1) % totalImages;
          } else if (direction === 'prev') {
            modalImageIndex = (modalImageIndex - 1 + totalImages) % totalImages;
          }
          
          const newImageSrc = thumbnails[modalImageIndex]?.getAttribute('data-image-src');
          if (newImageSrc) {
            zoomedImage.style.opacity = '0.5';
            setTimeout(() => {
              zoomedImage.src = newImageSrc;
              zoomedImage.style.opacity = '1';
              
              // Actualizar tambi\xE9n la imagen principal y thumbnails en segundo plano
              changeMainImage(newImageSrc, modalImageIndex);
              
              // Actualizar info de la imagen
              imageInfo.innerHTML = \\\`<p class="text-lg font-semibold">\\\${thumbnails[modalImageIndex]?.querySelector('img')?.alt || 'Imagen del veh\xEDculo'}</p><p class="text-sm opacity-75">Imagen \\\${modalImageIndex + 1} de \\\${totalImages}</p>\\\`;
            }, 150);
          }
        };
        
        // Event listeners para botones de navegaci\xF3n del modal
        modalPrevBtn.onclick = (e) => {
          e.stopPropagation();
          changeModalImage('prev');
        };
        
        modalNextBtn.onclick = (e) => {
          e.stopPropagation();
          changeModalImage('next');
        };
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '\u2715';
        closeButton.className = 'absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all z-10';
        
        const imageInfo = document.createElement('div');
        imageInfo.className = 'absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center z-10';
        imageInfo.innerHTML = \\\`<p class="text-lg font-semibold">\\\${mainImage.alt}</p><p class="text-sm opacity-75">Imagen \\\${currentImageIndex + 1} de \\\${totalImages}</p>\\\`;
        
        // Hint de navegaci\xF3n (solo si hay m\xE1s de una imagen)
        const navigationHint = document.createElement('div');
        if (totalImages > 1) {
          navigationHint.className = 'modal-navigation-hint';
          navigationHint.innerHTML = 'Usa \u2190 \u2192 para navegar';
          
          // Ocultar el hint despu\xE9s de 3 segundos
          setTimeout(() => {
            if (navigationHint.parentNode) {
              navigationHint.style.opacity = '0';
              setTimeout(() => {
                if (navigationHint.parentNode) {
                  navigationHint.parentNode.removeChild(navigationHint);
                }
              }, 300);
            }
          }, 3000);
        }
        
        // Cerrar modal
        const closeModal = () => {
          if (document.body.contains(modal)) {
            document.body.removeChild(modal);
            document.body.classList.remove('modal-open');
            // Remover event listeners del teclado espec\xEDficos del modal
            document.removeEventListener('keydown', handleModalKeydown);
          }
        };
        
        // Navegaci\xF3n con teclado en el modal
        const handleModalKeydown = (e) => {
          switch(e.key) {
            case 'ArrowLeft':
              e.preventDefault();
              if (totalImages > 1) changeModalImage('prev');
              break;
            case 'ArrowRight':
              e.preventDefault();
              if (totalImages > 1) changeModalImage('next');
              break;
            case 'Escape':
              e.preventDefault();
              closeModal();
              break;
          }
        };
        
        modal.addEventListener('click', closeModal);
        closeButton.addEventListener('click', (e) => {
          e.stopPropagation();
          closeModal();
        });
        
        // Agregar event listener para teclado
        document.addEventListener('keydown', handleModalKeydown);
        
        modal.appendChild(zoomedImage);
        modal.appendChild(modalPrevBtn);
        modal.appendChild(modalNextBtn);
        modal.appendChild(closeButton);
        modal.appendChild(imageInfo);
        if (totalImages > 1) {
          modal.appendChild(navigationHint);
        }
        document.body.appendChild(modal);
        document.body.classList.add('modal-open');
      });
    }
  });
<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": `${vehicle.name} - Auto Loa`, "description": `${vehicle.name} - ${formattedPrice}`, "image": ogImage, "data-astro-cid-ajdznhba": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto py-[80px] md:py-[120px] px-5 md:px-10" data-astro-cid-ajdznhba> <nav class="text-sm text-gray-600 py-3" data-astro-cid-ajdznhba> <a href="/" class="hover:text-blue-600" data-astro-cid-ajdznhba>Inicio</a> <span class="mx-2" data-astro-cid-ajdznhba>></span> <a href="/catalogo" class="hover:text-blue-600" data-astro-cid-ajdznhba>Vehículos</a> <span class="mx-2" data-astro-cid-ajdznhba>></span> <span class="text-gray-900" data-astro-cid-ajdznhba>${vehicle.name}</span> </nav> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-ajdznhba> <!-- Columna Izquierda - Galería de Imágenes --> <div class="lg:col-span-2" data-astro-cid-ajdznhba> <div class="bg-white rounded-lg shadow-sm border-gray-200 border p-4 mb-6" data-astro-cid-ajdznhba> <!-- Galería con Thumbnails al lado izquierdo --> <div class="flex gap-4" data-astro-cid-ajdznhba> <!-- Thumbnails Verticales --> ${vehicleImages.length > 1 && renderTemplate`<div class="flex flex-col w-20 md:w-24" data-astro-cid-ajdznhba> <!-- Botón de scroll hacia arriba --> ${vehicleImages.length > 6 && renderTemplate`<button id="scroll-up-btn" class="w-full bg-white hover:bg-gray-50 text-gray-700 py-2 rounded-t border border-gray-100 transition-colors shadow-sm mb-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Ver imágenes anteriores" data-astro-cid-ajdznhba> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ajdznhba> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" data-astro-cid-ajdznhba></path> </svg> </button>`} <div class="flex flex-col gap-2 thumbnail-viewport" id="thumbnails-container" data-astro-cid-ajdznhba> ${vehicleImages.map((image, index) => renderTemplate`<button type="button"${addAttribute(`thumbnail-btn w-full h-16 md:h-20 rounded border-2 transition-all duration-200 overflow-hidden flex-shrink-0 ${index === 0 ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-100 hover:border-blue-300"} ${index >= 6 ? "hidden" : ""}`, "class")}${addAttribute(index, "data-index")}${addAttribute(image, "data-image-src")}${addAttribute(`Ver imagen ${index + 1}`, "aria-label")} data-astro-cid-ajdznhba> <img${addAttribute(image, "src")}${addAttribute(`${vehicle.name} - Miniatura ${index + 1}`, "alt")} class="w-full h-full object-cover" data-astro-cid-ajdznhba> </button>`)} </div> <!-- Botón de scroll hacia abajo --> ${vehicleImages.length > 6 && renderTemplate`<button id="scroll-down-btn" class="w-full bg-white hover:bg-gray-50 text-gray-700 py-2 rounded-b border border-gray-100 transition-colors shadow-sm mt-1 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Ver más imágenes" data-astro-cid-ajdznhba> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ajdznhba> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-ajdznhba></path> </svg> </button>`} </div>`} <!-- Imagen Principal --> <div class="relative flex-1" data-astro-cid-ajdznhba> <img id="main-image"${addAttribute(vehicleImages[0], "src")}${addAttribute(`${vehicle.name} - Imagen principal`, "alt")} class="w-full h-full object-cover rounded-lg cursor-zoom-in transition-transform duration-300" data-astro-cid-ajdznhba> <!-- Contador de Imágenes --> ${vehicleImages.length > 1 && renderTemplate`<div class="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm" data-astro-cid-ajdznhba> <span id="current-index" data-astro-cid-ajdznhba>1</span> / ${vehicleImages.length} </div>`} </div> </div> </div> <!-- Características del Vehículo --> <div class="bg-white rounded-lg shadow-sm border-gray-200 border p-6 mb-6" data-astro-cid-ajdznhba> <h2 class="text-2xl font-bold mb-4 text-gray-900" data-astro-cid-ajdznhba>Características</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-ajdznhba> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>📅</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Año</p> <p class="font-semibold" data-astro-cid-ajdznhba>${vehicle.year || "N/A"}</p> </div> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>🚗</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Kilometraje</p> <p class="font-semibold" data-astro-cid-ajdznhba>${vehicle.miles?.toLocaleString()} km</p> </div> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>⛽</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Combustible</p> <p class="font-semibold" data-astro-cid-ajdznhba>${vehicle.fuelType}</p> </div> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>⚙️</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Transmisión</p> <p class="font-semibold" data-astro-cid-ajdznhba>${vehicle.transmission}</p> </div> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>📍</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Ubicación</p> <p class="font-semibold" data-astro-cid-ajdznhba>${vehicle.vendedor?.sucursal || "No especificada"}</p> </div> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-gray-400" data-astro-cid-ajdznhba>🏷️</span> <div data-astro-cid-ajdznhba> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Estado</p> <p${addAttribute(`font-semibold ${vehicle.available ? "text-green-600" : "text-red-600"}`, "class")} data-astro-cid-ajdznhba> ${vehicle.available ? "Disponible" : "Vendido"} </p> </div> </div> </div> </div> <!-- Descripción --> <div class="bg-white rounded-lg shadow-sm border-gray-200 border p-6" data-astro-cid-ajdznhba> <h2 class="text-2xl font-bold mb-4 text-gray-900" data-astro-cid-ajdznhba>Descripción</h2> <div class="prose max-w-none text-gray-700" data-astro-cid-ajdznhba> <p class="mb-4" data-astro-cid-ajdznhba> ${vehicle.description || `Este ${vehicle.name} es una excelente opci\xF3n para quienes buscan un veh\xEDculo confiable y con gran desempe\xF1o. Con ${vehicle.miles?.toLocaleString()} kil\xF3metros recorridos y motor ${vehicle.fuelType}, representa una oportunidad \xFAnica en el mercado.`} </p> <p data-astro-cid-ajdznhba>
El vehículo cuenta con transmisión ${vehicle.transmission} y se encuentra en excelentes condiciones. 
              Ideal para uso familiar o trabajo, combina comodidad, seguridad y eficiencia en un solo paquete.
</p> </div> </div> </div> <!-- Columna Derecha - Información de Compra --> <div class="lg:col-span-1" data-astro-cid-ajdznhba> <div class="sticky top-6" data-astro-cid-ajdznhba> <!-- Card de Precio y Compra --> <div class="bg-white rounded-lg shadow-sm border-gray-200 border p-6 mb-6" data-astro-cid-ajdznhba> <div class="mb-4" data-astro-cid-ajdznhba> <h1 class="text-2xl font-bold text-gray-900 mb-2" data-astro-cid-ajdznhba>${vehicle.name}</h1> ${vehicle.available ? renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" data-astro-cid-ajdznhba>
✓ Disponible
</span>` : renderTemplate`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800" data-astro-cid-ajdznhba>
✗ Vendido
</span>`} </div> <div class="mb-6" data-astro-cid-ajdznhba> <p class="text-3xl font-bold text-gray-900" data-astro-cid-ajdznhba>${formattedPrice}</p> <p class="text-sm text-gray-600" data-astro-cid-ajdznhba>Precio final</p> </div> <a href="/contacto"${addAttribute(`w-full font-bold py-3 px-4 rounded-lg transition-colors text-center block ${vehicle.available ? "bg-green-600 hover:bg-green-700 text-white" : "bg-gray-400 text-gray-600 cursor-not-allowed"}`, "class")} data-astro-cid-ajdznhba>
Contactar vendedor
</a> </div> <!-- Medios de Pago --> <div class="bg-white rounded-lg shadow-sm border-gray-200 border p-6" data-astro-cid-ajdznhba> <h3 class="text-lg font-bold mb-4" data-astro-cid-ajdznhba>Medios de pago</h3> <div class="space-y-3" data-astro-cid-ajdznhba> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-green-500" data-astro-cid-ajdznhba>✓</span> <span class="text-sm" data-astro-cid-ajdznhba>Efectivo</span> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-green-500" data-astro-cid-ajdznhba>✓</span> <span class="text-sm" data-astro-cid-ajdznhba>Transferencia bancaria</span> </div> <div class="flex items-center space-x-2" data-astro-cid-ajdznhba> <span class="text-green-500" data-astro-cid-ajdznhba>✓</span> <span class="text-sm" data-astro-cid-ajdznhba>Financiamiento disponible</span> </div> </div> </div> </div> </div> </div> </main> ` }));
}, "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/vehiculos/[name].astro", void 0);

const $$file = "/Users/sebaprogrammer/Desktop/proyectos/proyectos-venpu/auto-loa/src/pages/vehiculos/[name].astro";
const $$url = "/vehiculos/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
