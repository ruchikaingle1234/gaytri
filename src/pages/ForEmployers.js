import Image1 from "../components/Image1";
import Logo from "../components/Logo";
import VariableSet from "../components/VariableSet";
import OptimizationAlgorithms from "../components/OptimizationAlgorithms";
import DataAggregator from "../components/DataAggregator";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import DataTransformer from "../components/DataTransformer";
import styles from "./ForEmployers.module.css";

const ForEmployers = () => {
  return (
    <div className={styles.forEmployers}>
      <section className={styles.imageParent}>
        <Image1 />
        <Logo />
      </section>
      <VariableSet />
      <OptimizationAlgorithms />
      <DataAggregator />
      <div className={styles.dataAggregator}>
        <div className={styles.simpleButton}>
          <div className={styles.bookADemo}>Book a Demo</div>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <DataTransformer />
      <section className={styles.hyperbolicHarmony}>
        <div className={styles.trigonometricTriad}>
          <div className={styles.optimizeYourHiringStrategyParent}>
            <h1 className={styles.optimizeYourHiring}>
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className={styles.discoverTheStrengths}>
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <div className={styles.ctaButton}>
            <div className={styles.requestYourFree}>
              Request Your Free Hiring Audit
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
