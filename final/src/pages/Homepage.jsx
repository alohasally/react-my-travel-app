import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <div>
          <h2>You travel the world.</h2>
          <h1>
            Keep track of your adventures <br />
            on My Travel List
          </h1>
        </div>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. <br /> Never forget your wonderful experiences, <br />
          and show your friends how you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
