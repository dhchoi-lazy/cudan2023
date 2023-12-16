import * as d3 from "d3";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ReactComponent as TCS } from "./tcs.svg";
import { useGSAP } from "@gsap/react";
export default function PsiConcept() {
  const ref = useRef();
  const tcs = ref.current;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(DrawSVGPlugin);

    // useGSAP(() => {
    // use scoped selectors
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current.querySelector("#base"),
      { autoAlpha: 0 },
      { autoAlpha: 1, ease: "power1.inOut" }
    );
    tl.fromTo("#passingGwageo", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl1", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#firstAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl2", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line1", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl3", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line2", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl4", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#line3", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#cl5", { drawSVG: "0%" }, { duration: 1, drawSVG: "100%" });
    tl.fromTo("#lastAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#lastAppearance", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#area", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    tl.fromTo("#totalSuccess", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");

    ScrollTrigger.create({
      trigger: "#tcs",
      start: "top bottom",
      end: "top center",
      scrub: true,
      // pin: true,
      animation: tl,
    }); // or refs
    // });
  }, []);

  return (
    <div ref={ref}>
      <h3 className="font-bold text-xl">
        Concept of Total Success Index ( ψ )
      </h3>

      <ul className="list-disc ml-5 space-y-2">
        <li className="text-base">
          Success can be defined as "the real or perceived achievements that
          individuals have accumulated as a result of their work
          experience."(Judge, 1999)
        </li>
        <li className="text-base">
          We can sum the Yangban's grade(r) at a fixed interval to obtain the
          Total Success Index (ψ). Due to r=1 being the highest grade and 18 the
          lowest, we actually sum 19-r so that the larger the ψ the larger the
          success, and also since the Yangbans are not mentioned at a
          universally fixed interval, in practice we take the area under the
          curve (AUC) that joins grades of the Yangbans at the time of
          appearance.
        </li>
      </ul>
      <TCS id="tcs" />
    </div>
  );
}
