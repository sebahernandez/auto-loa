import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Import slide images
import slide01 from "../../assets/slide-01.png";
import slide02 from "../../assets/slide-02.png";
import slide03 from "../../assets/slide-03.png";
import slide04 from "../../assets/slide-04.png";
import slide05 from "../../assets/slide-05.png";

interface SlideData {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

const slideImages: SlideData[] = [
  {
    src: slide01.src,
    alt: "Interior moderno de automóvil",
    title: "Auto Loa",
    subtitle: "Tu próximo auto te está esperando",
  },
  {
    src: slide02.src,
    alt: "Automóvil de lujo en carretera",
    title: "Calidad Premium",
    subtitle: "Los mejores vehículos del mercado",
  },
  {
    src: slide03.src,
    alt: "Concesionario de automóviles",
    title: "Amplio Inventario",
    subtitle: "Miles de opciones para elegir",
  },
  {
    src: slide04.src,
    alt: "Auto eléctrico cargando",
    title: "Futuro Sostenible",
    subtitle: "Vehículos eléctricos e híbridos",
  },
  {
    src: slide05.src,
    alt: "Llaves de automóvil",
    title: "Financiamiento Fácil",
    subtitle: "Planes de pago que se adaptan a ti",
  },
];

const HeroSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Add custom styles for red arrows and dots
    const style = document.createElement("style");
    style.textContent = `
      /* Custom red navigation arrows */
      .swiper-button-next,
      .swiper-button-prev {
        color: #dc2626 !important; /* red-600 */
      }

      .swiper-button-next:hover,
      .swiper-button-prev:hover {
        color: #b91c1c !important; /* red-700 */
      }

      /* Custom red pagination dots */
      .swiper-pagination-bullet {
        background: #dc2626 !important; /* red-600 */
        opacity: 0.5 !important;
      }

      .swiper-pagination-bullet-active {
        background: #dc2626 !important; /* red-600 */
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="hero-section py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          centeredSlides={true}
          grabCursor={true}
          watchOverflow={true}
          className="w-full h-full"
          onSlideChange={() => {
            console.log("Slide changed");
          }}
          onInit={() => {
            console.log("Hero Swiper initialized");
          }}
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-80 sm:h-96 md:h-[450px] lg:h-[500px] overflow-hidden rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] shadow-2xl">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                  <div className="container mx-auto px-6 sm:px-8 lg:px-[130px]">
                    <div className="max-w-full sm:max-w-2xl lg:max-w-3xl text-white">
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 lg:mb-8 leading-relaxed opacity-90">
                        {slide.subtitle}
                      </p>
                      <a
                        href="/catalogo"
                        className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base lg:text-lg rounded-md sm:rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        Ver Stock
                        <svg
                          className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSlider;
