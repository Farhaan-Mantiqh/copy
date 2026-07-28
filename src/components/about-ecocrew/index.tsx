import EcocrewJourney from './ecocrew-journey';
import LandingText from './landing-text';
import ProblemSolutionReward from './problem-solution';
// import Founders from './founders';

export default function AboutEcocrew(): JSX.Element {
  return (
    <>
      <LandingText />
      <div className="mx-auto max-w-screen-2xl">
        <ProblemSolutionReward />
        <EcocrewJourney />
        {/* <Founders /> */}
      </div>
    </>
  );
}
