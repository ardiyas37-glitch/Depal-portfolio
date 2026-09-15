import { useEffect, useRef, useState } from "react";

/**
 * Reveal — lightweight scroll-reveal via IntersectionObserver
 * Props:
 *  as: element type
 *  delay: number (ms) -> stagger
 *  y: translate distance (px) default 18 on mobile 14
 *  threshold: IO threshold
 *  once: reveal once (default true)
 *  className: extra classes
 */
export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  y = 30,
  threshold = 0.15,
  once = true,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const revealStyle = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
    ...style,
  };

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={revealStyle}
      {...rest}
    >
      {children}
    </Tag>
  );
}
