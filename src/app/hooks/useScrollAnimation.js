import { useEffect, useRef, useState } from "react";

/**
 * Custom hook para animar elementos cuando aparecen en el viewport
 * @param {Object} options - Opciones de configuración
 * @param {number} options.threshold - Porcentaje de visibilidad necesario (0-1). Default: 0.2
 * @param {boolean} options.triggerOnce - Si la animación solo debe activarse una vez. Default: true
 * @returns {Array} [ref, isVisible] - Ref para el elemento y estado de visibilidad
 *
 * @example
 * const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });
 *
 * return (
 *   <div ref={ref} className={isVisible ? "animate-fade-up" : "opacity-0"}>
 *     Contenido
 *   </div>
 * );
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.2, triggerOnce = true } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Si triggerOnce es true, dejamos de observar después de la primera vez
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          // Si triggerOnce es false, ocultamos el elemento cuando sale del viewport
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}
