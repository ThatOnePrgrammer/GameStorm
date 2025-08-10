// ./components/SplitText.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({
  text,
  className = "",
  delay = 0.1,
  duration = 0.6,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  rootMargin = "-100px",
  onLetterAnimationComplete,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      from,
      {
        ...to,
        ease,
        duration,
        stagger: 0.05,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start: `top+=${parseInt(rootMargin)} bottom`,
          toggleActions: "play none none reverse",
          once: true,
        },
        onComplete: onLetterAnimationComplete,
      }
    );
  }, [delay, duration, ease, from, to, rootMargin, onLetterAnimationComplete]);

  return (
    <div ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
