import LoremIpsum from "react-lorem-ipsum";
import Bangmok from "./Bangmok";
import Sillok from "./Sillok";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import ggdj from "./ggdj.jpg";
import ajd from "./ajd.jpg";
import ajd2 from "./ajd2.png";
import bangmok2 from "./bangmok.png";
import bangmok from "./bangmok.jpg";
import government from "./government.png";
import ggdj2 from "./ggdj.png";
import React from "react";
import Age from "./Age";

import { useRef, useLayoutEffect, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Data() {
  const Cartogram = React.lazy(() => import("./Cartogram"));
  const numberRef = useRef();
  const dataRef = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".number", { fontSize: "50px" });
      const ntl = gsap.timeline({
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top center", // 요소의 상단이 뷰포트의 중앙에 도달하면 시작
          end: "+=400", // 요소의 하단이 뷰포트의 중앙에서 500px 떨어진 곳에 도달하면 끝
          scrub: true,
          id: "numbers",
          markers: false,
        },
      });
      ntl
        .from("#number1", {
          innerText: 0,
          snap: {
            innerText: 1,
          },
          ease: "power1.inOut",
        })
        .from("#number2", { innerText: 0, snap: { innerText: 1 } })
        .from("#number3", { innerText: 0, snap: { innerText: 1 } });
    }, dataRef.current);
    return () => ctx.revert();
  }, []);

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: "100px",
    },
    block: {
      width: "30%",
      textAlign: "center",
    },
    img: {
      width: "100%",
      height: "500px",
    },
    h3: {
      width: "100%",
      textAlign: "center",
    },
    p: {
      textAlign: "justify",
      // fontSize: "16px",
    },
  };
  return (
    <section id="data" ref={dataRef}>
      <GridContainer>
        <h1 className="text-4xl">2. Data Description</h1>
        <GridHighlight>
          <div style={styles.container}>
            <div style={styles.block}>
              <h3 style={styles.h3}>The Annals of Joseon Dynasty</h3>
              <img
                style={styles.img}
                src={ajd}
                alt="Annals of Joseon Dynasty"
              />

              <figcaption style={styles.p}>
                A chronological narrative of every king's notable actions and
                interactions on royal, economic, military, and other matters
                based on the minutes kept by <i>sagwan</i> (history officials)
                who were in proximity with the king at all times.
              </figcaption>
            </div>

            <div style={styles.block}>
              <h3 style={styles.h3}>Bangmok</h3>
              <img style={styles.img} src={bangmok} alt="Mungwa Bangmok" />

              <p style={styles.p}>
                Bangmok is the list of people who passed the Gwageo. Those who
                passed the exam in the Gwageo created this book to commemorate
                their success. For the Mungwa exam, records of all the previous
                exams are still present to this day.
              </p>
            </div>

            <div style={styles.block}>
              <h3 style={styles.h3}>Gyeonggukdaejeon:Ijeon</h3>
              <img style={styles.img} src={ggdj} alt="Gyeonggukdaejeon Ijeon" />

              <p style={styles.p}>
                Gyeonggukdaejeon is the constitution of Joseon. Among its
                contents, Ijeon describes the personnel system and the
                bureaucratic system.
              </p>
            </div>
          </div>
        </GridHighlight>
        <GridNormal>
          <h2 className="text-2xl">The Annals</h2>
          <img width="100%" src={ajd2} alt="Annals of Joseon Dynasty" />
        </GridNormal>
        <h2 ref={numberRef}>The volume of the Annaals</h2>
        <GridNormal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              margin: "20vh auto",
            }}
          >
            <p>
              <span className="number" id="number1">
                26
              </span>{" "}
              Monarchs
            </p>
            <p>
              <span className="number" id="number1">
                214
              </span>{" "}
              topics
            </p>
            <p>
              <span className="number" id="number2">
                60158
              </span>{" "}
              People appeared
            </p>

            <p>
              <span className="number" id="number2">
                183342{" "}
              </span>
              days (from August 5th, 1392 to August 14th 1894)
            </p>
            <p>
              <span className="number" id="number3">
                384279
              </span>{" "}
              articles
            </p>
          </div>
        </GridNormal>
        <h3 className="text-3lg">
          How many articles were produced daily by the king?
        </h3>
        <GridHighlight>
          <Sillok />
        </GridHighlight>

        <h2 className="text-3lg">Mungwa Bangmok</h2>
        <GridNormal>
          <div style={{ textAlign: "center" }}>
            <img width="80%" src={bangmok2} alt="Mungwa Bangmok" />
          </div>
          <p className="mt-10 mb-5 text-lg text-black">
            The Mungwa Bangmok contains the following information on each
            successful applicant:
          </p>

          <ol className="list-decimal ml-5 space-y-2">
            <li className="text-base text-gray-700">
              Exam information: Year of Gwageo, subtype of Gwageo taken, and
              initial rank, number of candidates
            </li>
            <li className="text-base text-gray-700">
              Personal information: Name, residence, birth year, past positions
              (one can take multiple Gwageo exams for expedited promotions)
            </li>
            <li className="text-base text-gray-700">
              Family information: Family clan, and the names of father, paternal
              grandfather, paternal great-grandfather, maternal grandfather, and
              brothers if they had passed Gwageo themselves
            </li>
          </ol>
          <table id="bangmok_table">
            <thead>
              <tr>
                <th>Affiliation of exam</th>
                <th>No. of exam conduction</th>
                <th>No. of remaining Bangmok</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mungwa</td>
                <td>804</td>
                <td>804</td>
              </tr>
              <tr>
                <td>Mugwa</td>
                <td>801</td>
                <td>138</td>
              </tr>
              <tr>
                <td>Miscellaneous</td>
                <td>233</td>
                <td>177</td>
              </tr>
            </tbody>
          </table>
        </GridNormal>
        <GridNormal>
          <h2>Gyeonggukdaejeon: Ijeon</h2>
          <img width="100%" src={ggdj2} alt="Gyeonggukdaejeon Ijeon" />
        </GridNormal>
        <GridNormal>
          <h2 className="text-2xl">Official grade table</h2>
          <table>
            <tbody>
              <tr>
                <th>Korean</th>
                <th>English</th>
                <th>Numeric Value</th>
              </tr>
              <tr>
                <td>정일품</td>
                <td>1st Rank</td>
                <td>18</td>
              </tr>
              <tr>
                <td>종일품</td>
                <td>Junior 1st Rank</td>
                <td>17</td>
              </tr>
              <tr>
                <td>정이품</td>
                <td>2nd Rank</td>
                <td>16</td>
              </tr>
              <tr>
                <td>종이품</td>
                <td>Junior 2nd Rank</td>
                <td>15</td>
              </tr>
              <tr>
                <td>정삼품</td>
                <td>3rd Rank</td>
                <td>14</td>
              </tr>
              <tr>
                <td>종삼품</td>
                <td>Junior 3rd Rank</td>
                <td>13</td>
              </tr>
              <tr>
                <td>정사품</td>
                <td>4th Rank</td>
                <td>12</td>
              </tr>
              <tr>
                <td>종사품</td>
                <td>Junior 4th Rank</td>
                <td>11</td>
              </tr>
              <tr>
                <td>정오품</td>
                <td>5th Rank</td>
                <td>10</td>
              </tr>
              <tr>
                <td>종오품</td>
                <td>Junior 5th Rank</td>
                <td>9</td>
              </tr>
              <tr>
                <td>정육품</td>
                <td>6th Rank</td>
                <td>8</td>
              </tr>
              <tr>
                <td>종육품</td>
                <td>Junior 6th Rank</td>
                <td>7</td>
              </tr>
              <tr>
                <td>정칠품</td>
                <td>7th Rank</td>
                <td>6</td>
              </tr>
              <tr>
                <td>종칠품</td>
                <td>Junior 7th Rank</td>
                <td>5</td>
              </tr>
              <tr>
                <td>정팔품</td>
                <td>8th Rank</td>
                <td>4</td>
              </tr>
              <tr>
                <td>종팔품</td>
                <td>Junior 8th Rank</td>
                <td>3</td>
              </tr>
              <tr>
                <td>정구품</td>
                <td>9th Rank</td>
                <td>2</td>
              </tr>
              <tr>
                <td>종구품</td>
                <td>Junior 9th Rank</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </GridNormal>
        <h1 className="text-3xl">
          Understanding the Socio-political Landscape of the Joseon Dynasty
        </h1>
        <GridHighlight>
          <h3 className="text-2xl">
            1. How many people became Yangban through the Gwageo system?
          </h3>
          <Bangmok />
        </GridHighlight>

        <GridHighlight>
          <h3 className="text-2xl">2. Where they come from?</h3>
          <Suspense fallback={null}>
            <Cartogram />
          </Suspense>
        </GridHighlight>

        <GridNormal>
          <h3 className="text-2xl">3. How long they did live?</h3>
          <Age />
        </GridNormal>
      </GridContainer>
    </section>
  );
}
