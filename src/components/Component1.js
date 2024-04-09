import styles from "./Component1.module.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  ellipse2,
  theresaWebb,
  hRManagerAmazon,
}) => {
  return (
    <div className={styles.component16}>
      <div className={styles.reworkHasBeen}>{reworkHasBeenAGreatWayToM}</div>
      <div className={styles.ellipseParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={ellipse2}
        />
        <div className={styles.container}>
          <h3 className={styles.theresaWebb}>{theresaWebb}</h3>
          <div className={styles.hrManagerAmazon}>{hRManagerAmazon}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
