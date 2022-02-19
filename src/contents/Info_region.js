import fandomIcon from "../images/fandom_icon.jpg";
import youtubeIcon from "../images/youtube_icon.png";

function Info_region() {
  return (
    <div className="info">
      <div className="name-region">
        <h1 className="name">Pipe</h1>
        <h3 className="race">Gadoll</h3>
        <h4 className="title">Best weird dog ever</h4>
      </div>
      <div className="introduce-button">
        <a className="wiki-btn" href="https://deca-dence.fandom.com/wiki/Pipe">
          <img src={fandomIcon} alt="" />
          <p>wiki</p>
        </a>
        <a
          className="youtube-btn"
          href="https://www.youtube.com/watch?v=SbI5D_SFS4c"
        >
          <img src={youtubeIcon} alt="" />
          <p>youtube</p>
        </a>
      </div>
      <div className="information-paragraph">
        <div className="about">
          <h2>About</h2>
          <p>
            Pipe is pale beige. He has six legs that end in a salmon pink color.
            He has two bulging eyes with light red pupils, and blue-and-white
            ringed irises.
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <p>
            Pipe can shoot small puffs of steam through a hole located on top of
            the head. The only other Gadoll with this ability is Gadoll Alpha.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info_region;
