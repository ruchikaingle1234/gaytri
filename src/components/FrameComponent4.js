import { useMemo } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className={styles.eosIconsaiParent} style={frameDivStyle}>
      <img className={styles.eosIconsai} alt="" src={eosIconsai} />
      <h3 className={styles.costReduce} style={costReduceStyle}>
        <p className={styles.p}>{prop}</p>
        <p className={styles.costReduce1}>{costReduce}</p>
      </h3>
      <div className={styles.zeroOverheadIn}>{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default FrameComponent4;
