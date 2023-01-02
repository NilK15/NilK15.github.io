import "../styles/Samples.css";
import apiFetcherPic from "../imgs/apifetcher.png";
import youtubePic from "../imgs/youtube.png";

const Samples = () => {
  const YOUTUBE_URL = "https://nilk15.github.io/youtube-design-html-css-only/";
  const APIFETCHER_URL = "https://nilk15.github.io/react-multi-api-fetcher/";

  return (
    <section id="samplesSection" className="samplesSection">
      <header className="samplesHeader">Sample Projects</header>
      <main className="samplesMain">
        <div
          className="samplesProject"
          onClick={() => window.open(APIFETCHER_URL, "_blank")}
        >
          <div>
            <p>API Fetcher</p>
          </div>
          <img src={apiFetcherPic} alt="Nothing"></img>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className="samplesProject"
          onClick={() => window.open(YOUTUBE_URL, "_blank")}
        >
          <div style={{ backgroundColor: "transparent", color: "white" }}>
            <p>YouTube Design</p>
          </div>
          <img src={youtubePic} alt="Nothing"></img>
        </div>
        <div className="samplesProject">
          <div>
            <p>More Projects Coming Soon...</p>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Samples;
