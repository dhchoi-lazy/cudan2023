import LoremIpsum from "react-lorem-ipsum";
import Gyeyu from "./Gyeyu";
import NetworkBar from "./networkBar.svg";
import { GridNormal, GridHighlight, GridContainer } from "../Layout";
import PsiConcept from "./PsiConcept";
import ct from "./ct.png";
export default function Method() {
  return (
    <section id="method">
      <GridContainer>
        <GridNormal>
          <h1 className="text-4xl">
            3. Method: Measuring Career Success of Yangban
          </h1>
          <h3>
            Who succeeded matters in history. How can we measure how successful
            the government officials were in the Joseon dynasty?
          </h3>
          <ol className="list-decimal ml-5 space-y-2">
            <li className="text-base text-black">
              Constructing a social network and identifying key figures
            </li>
            <li className="text-base text-black">
              Creating a universally accepted metric to quantify the success of
              the Yangban
            </li>
          </ol>
        </GridNormal>
        <GridHighlight>
          <Gyeyu />
        </GridHighlight>
        <GridNormal>
          <div className="flex flex-row items-center">
            <img width={300} src={NetworkBar} />
            <div className="flex">
              <ul>
                <li>
                  Prince Suyang, who was an uncle, deposed his 11-year-old
                  nephew, King Danjong
                </li>
                <li>
                  This network was constructed using individuals' communication
                  history, obtained from the Annals of one month before and
                  after the 'Gyeyujeongnan' incident in 1453.
                </li>
                <li>
                  Those who succeeded in the rebellion had high Eigenvector
                  centrality rankings, and those who were executed due to the
                  rebellion had slightly higher Betweenness centrality rankings
                  in comparison.
                </li>
              </ul>
            </div>
          </div>
          <p>
            As a narrative format, the Annals certainly depicts events and
            characters worthy of action-packed dramatization. One example
            involves Joseon's 6th king Danjong who ascended to the throne at the
            age of ten. A year into his reign in 1453, he was overthrown by his
            ambitious uncle Suyang was ultimately demoted to a prince, then was
            executed in exile after a failed counter-revolt by his supporters
            still in the government. Another of Danjong's uncles, Anpyeong, also
            competed for power but was defeated and executed by Suyang. Official
            depictions of assassinations in broad daylight and shifting
            alliances during this period have already provided ample material
            for popular storytelling for TV and movies in Korea, but now the
            digitized records enable us to analyze and visualize the event
            quantitatively with ease. For instance, we can study how the major
            characters associated themselves socially (and by extension, aligned
            politically) during the upheaval and its implications in the
            aftermath using network analysis.
          </p>
        </GridNormal>

        <GridNormal>
          <h3 className="text-2xl font-bold">
            2. Creating a universally accepted metric to quantify the success of
            the Yangban
          </h3>
          <PsiConcept />
        </GridNormal>
        <GridHighlight>
          <h1 className="text-2xl font-bold">
            Constructed Yangban Career Trajectories
          </h1>
          <img src={ct} width="100%" style={{ margin: "0 auto" }} />
        </GridHighlight>
      </GridContainer>
    </section>
  );
}
