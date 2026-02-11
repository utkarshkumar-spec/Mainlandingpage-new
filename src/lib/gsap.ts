import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch {
    // no-op: avoids duplicate registration errors
  }
}

export { gsap, ScrollTrigger };
