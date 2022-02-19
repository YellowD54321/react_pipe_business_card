import googleIcon from "../images/google_logo.png";
import gamerIcon from "../images/gamer_logo.png";
import pixivIcon from "../images/pixiv_logo.png";
import redditIcon from "../images/reddit_logo.png";

function Contact_region() {
  return (
    <footer>
      <a
        className="google-logo"
        href="https://www.google.com/search?q=deca+dence+pipe&sxsrf=APq-WBv_B9CvQQA-D4y78HHhSlt-jjQWDw:1643656143747&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj5o9Kk2Nz1AhUYBd4KHQZRBFgQ_AUoAXoECAIQAw&biw=1440&bih=757&dpr=1"
      >
        <img src={googleIcon} alt="" />
      </a>
      <a
        className="gamer-logo"
        href="https://ani.gamer.com.tw/animeVideo.php?sn=16176"
      >
        <img src={gamerIcon} alt="" />
      </a>
      <a
        className="pixiv-logo"
        href="https://www.pixiv.net/tags/%E3%83%87%E3%82%AB%E3%83%80%E3%83%B3%E3%82%B9"
      >
        <img src={pixivIcon} alt="" />
      </a>
      <a
        className="reddit-logo"
        href="https://www.reddit.com/r/Deca_Dence/comments/itts6w/a_long_shot_theory_about_pipe/"
      >
        <img src={redditIcon} alt="" />
      </a>
    </footer>
  );
}
export default Contact_region;
