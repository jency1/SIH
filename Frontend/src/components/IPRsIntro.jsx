import styles from "./IPRsIntro.module.css";
import IPRs from "./IPRs";
import { NavLink } from "react-router-dom";


function StartupIntro() {
  return (
    <>
      <div className={styles["flex-container"]}>
        <div className={styles["fundings-title"]}>
          Intellectual Property Rights
        </div>
        <div className={styles["iprInfo"]}>
          <h4>
            Gujarat IPR Connect is a dedicated platform designed to support and
            enhance Intellectual Property Rights (IPR) for startups. It provides
            essential resources for understanding and managing IPR, including
            access to expert advice, streamlined registration processes, and
            enforcement support. By connecting startups with IP professionals,
            legal experts, and enforcement agencies, Gujarat IPR Connect aims to
            facilitate the protection of innovations, foster collaboration, and
            ensure that intellectual property is safeguarded effectively. This
            initiative supports startups in securing their ideas and
            technologies, ultimately driving growth and global competitiveness.
          </h4>
        </div>
        <IPRs />
      </div>
      <NavLink to="/iprhomepage" > <div sty>Know more about IPR</div></NavLink>
    </>
  );
}

export default StartupIntro;
