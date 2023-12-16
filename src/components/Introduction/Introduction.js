import { useRef, useLayoutEffect, useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";

import { GridNormal, GridHighlight, GridContainer } from "../Layout";

import Bureaucracy from "./Bureaucracy";
import Gwageo from "./Gwageo";
import S1 from "./introduction1.png";
import S2 from "./introduction2.png";
import S3 from "./introduction3.png";
import S4 from "./introduction4.png";
import S5 from "./introduction5.png";
import S6 from "./introduction6.png";
import Netflix from "./kingdom.jpg";
import NorthKorea from "./north_korea.jpg";
import { ReactComponent as Historymap } from "./historymap.svg";
import { ReactComponent as Timeline } from "./timeline.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import gsap from "gsap";
import Joseon from "./Joseon";
import Yangban from "./yangban.svg";

const images = [S4, S5, S6, S1, S2, S3];
export default function Introduction() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(DrawSVGPlugin);
  const joseonRef = useRef();
  const tl = gsap.timeline();
  const deck1Ref = useRef(null);
  const deck2Ref = useRef(null);
  const deck3Ref = useRef(null);

  useEffect(() => {
    if (deck1Ref.current && deck2Ref.current) {
      const deck1 = new Reveal(deck1Ref.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        progress: false,
        keyboardCondition: "focused",
      });
      const deck2 = new Reveal(deck2Ref.current, {
        embedded: true,
        width: window.innerWidth,
        height: window.innerHeight,
        keyboardCondition: "focused",
      });
      const deck3 = new Reveal(deck3Ref.current, {
        embedded: true,
        keyboardCondition: "focused",
      });

      deck1.initialize();
      deck2.initialize();
      deck3.initialize();
    }
  }, []);

  useLayoutEffect(() => {
    tl.fromTo(
      "path#china",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo(
      "path#japan",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo(
      "path#joseon",
      { drawSVG: "0%" },
      { duration: 1, drawSVG: "100%" }
    );
    tl.fromTo("text", { autoAlpha: 0 }, { autoAlpha: 1 }, "+=1");
    ScrollTrigger.create({
      trigger: joseonRef.current,
      start: "top center",
      end: "center center",
      scrub: true,
      animation: tl,
      markers: false,
    });
  }, []);

  return (
    <>
      <section id="introduction">
        <h1 className="text-4xl">1. Introduction</h1>
        <h1 id="joseonMap" className="text-2xl font-bold">
          Joseon
        </h1>
        <div className="reveal deck3" ref={deck3Ref}>
          <div className="slides">
            <section>
              <section>
                <img src={Netflix} alt="kingdom" />
              </section>

              <section>
                <img src={NorthKorea} alt="north korea" />
              </section>
            </section>
          </div>
        </div>
        <GridContainer>
          <GridNormal>
            <div>
              <Historymap ref={joseonRef} />
              <Timeline />
            </div>
          </GridNormal>
          <GridNormal>
            <h2 className="text-2xl font-bold">Yangban</h2>
            <div style={{ display: "flex" }}>
              <img width="40%" src={Yangban} />
              <ul className="list-disc ml-5 space-y-2">
                <li className="list-disc">
                  <p className="text-lg">
                    Joseon's <i>de facto</i> noble class (but they are NOT
                    noble)
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    The term <b>Yangban</b> combines 양(兩) meaning 'two' and
                    반(班) signifying 'group', referring to both literary (문반;
                    文班) and military (무반; 武班) officials. However, this
                    definition is misleading as Yangban status was based on
                    social norms, characterized by its subjective and fluid
                    nature, not strictly legal classification
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    Attaining Yangban status required more than passing the
                    Gwageo; crucial was societal recognition within local
                    communities, which distinguished Yangban families from
                    non-Yangban ones. The status was fluid, allowing families to
                    transition between Yangban and commoner status.
                  </p>
                </li>
                <li className="list-disc">
                  <p className="text-lg">
                    Despite debates over the precise formation period of the
                    Yangban class, especially before the early 16th century in
                    Joseon society, its distinct social entity is acknowledged.
                    Ascension to this class necessitated passing the{" "}
                    <b>Gwageo</b> and demonstrating proficiency in Confucian
                    philosophy, particularly in the Mungwa exams, as a testament
                    to merit and dedication to public service.
                  </p>
                </li>
              </ul>
            </div>
          </GridNormal>
          <h2 className="text-2xl font-bold">Gwageo and Bureaucracy</h2>
          <GridHighlight>
            <div style={{ height: "20vh" }}></div>
            <div className="reveal deck1" ref={deck1Ref}>
              <div className="slides">
                <section>
                  <Gwageo />
                </section>
                <section>
                  <Bureaucracy />
                </section>
              </div>
            </div>
          </GridHighlight>
          <div className="reveal deck2" ref={deck2Ref}>
            <div className="slides">
              {images.map((image, index) => (
                <section key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </section>
              ))}
            </div>
          </div>
        </GridContainer>
      </section>
    </>
  );
}
