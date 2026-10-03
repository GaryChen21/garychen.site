import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SOCIAL_LINKS } from "@/config/Identity";

gsap.registerPlugin(ScrollTrigger);

const SubHeader = () => {
  const containerRef = useRef<any>(null);
  const threadsRef = useRef<any>(null);
  const instagramRef = useRef<any>(null);

  useEffect(() => {
    if (!threadsRef.current || !instagramRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([threadsRef.current, instagramRef.current], {
        opacity: 0,
        y: 100
      });

      // Animation timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          pin: true,
          scrub: 1,
          // markers: true
        }
      })
        .to(threadsRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          immediateRender: false,
          zIndex: 2
        }, "-=0.5")
        .to(threadsRef.current?.querySelectorAll('.animate-text'), {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
          zIndex: 2
        }, ">-0.5")
        .to(threadsRef.current, {
          opacity: 0,
          y: -100,
          duration: 1,
          immediateRender: false,
          zIndex: 0
        }, "+=1")
        .to(instagramRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          immediateRender: false,
          zIndex: 3
        }, "-=1")
        .to(instagramRef.current?.querySelectorAll('.animate-text'), {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.7)",
          immediateRender: false,
          zIndex: 3
        }, ">-0.5")
        .to(instagramRef.current, {
          opacity: 0,
          y: -100,
          duration: 1,
          immediateRender: false,
          zIndex: 0
        }, "+=1");
    });

    return () => ctx.revert();
  }, []);

  return (

    <>
      <div
        ref={containerRef}
        className="relative w-full min-h-[200vh] flex flex-col items-center"
      >
        <div
          ref={threadsRef}
          className="flex flex-col items-center justify-center space-y-4 absolute  -translate-y-1/2"
        >
          <div className="relative w-full px-4 md:px-0">
            <h3 className="sr-only">Follow my Threads</h3>
            <div
              aria-hidden="true"
              className="flex items-center justify-center flex-wrap gap-2 md:gap-3 max-w-[90vw] md:max-w-none mx-auto"
            >
              {"Follow My Threads".split(" ").map((word, i) => (
                <div key={i} className="flex items-center justify-center">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={`${i}-${charIndex}`}
                      className="animate-text text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold opacity-0 scale-0 transform inline-block"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <a
            href={SOCIAL_LINKS.threads}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white rounded-full text-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 text-black"
          >
            Visit Threads Profile
          </a>
        </div>

        <div
          ref={instagramRef}
          className="flex flex-col items-center justify-center space-y-4 absolute  -translate-y-1/2"
        >
          <div className="relative w-full px-4 md:px-0">
            <h3 className="sr-only">Connect my Instagram</h3>
            <div
              aria-hidden="true"
              className="flex items-center justify-center flex-wrap gap-2 md:gap-3 max-w-[90vw] md:max-w-none mx-auto"
            >
              {"Follow My Instagram".split(" ").map((word, i) => (
                <div key={i} className="flex items-center justify-center">
                  {word.split("").map((char, charIndex) => (
                    <span
                      key={`${i}-${charIndex}`}
                      className="animate-text text-3xl sm:text-4xl md:text-6xl lg:text-9xl font-bold opacity-0 scale-0 transform inline-block"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white rounded-full text-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 text-black"
          >
            Visit Instagram Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default SubHeader;