import Styles from "../css/footer.module.css";
interface FooterProps {}

/*
    <div className="z-50 absolute">
      <div className={Styles.footer}>
        <div className={Styles.screen}>
          <div className={Styles.screenImage}></div>
          <div className={Styles.screenOverlay}></div>
          <div className={Styles.screenContent}>Github: T-R-a-c-k</div>
        </div>
        <div className={Styles.footerItem}>
          <h1>About Me</h1>
          <p>something</p>
        </div>
        <div className={Styles.footerItem}>
          <h1>Contact</h1>
          <p>Email: tylerrack@rogers.com</p>
          <p>Phone: 289-893-2280</p>
          <p>LinkedIn: tylerrack16</p>
          <a href="https://github.com/T-R-a-c-k" color="red">
            GitHub: T-R-a-c-k
          </a>
        </div>
      </div>
    </div> */
const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerItem}>
        <div className={Styles.screen}>
          <div className={Styles.screenImage}></div>
          <div className={Styles.screenOverlay}></div>
          <div className={Styles.screenContent}>Github: T-R-a-c-k</div>
        </div>
      </div>
      <div className={Styles.footerItem}>
        <h1>About Me</h1>
        <p>something</p>
      </div>
      <div className={Styles.footerItem}>
        <h1>Contact</h1>
        <p>Email: tylerrack@rogers.com</p>
        <p>Phone: 289-893-2280</p>
        <p>LinkedIn: tylerrack16</p>
        <a href="https://github.com/T-R-a-c-k" color="red">
          GitHub: T-R-a-c-k
        </a>
      </div>
    </div>
  );
};

export default Footer;
