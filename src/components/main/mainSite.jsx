import React from "react";
import Hero from "./hero/Hero";
import BrandLogos from "./brandLogos/brandLogos";
import LearnMoreCard from "./learnMoreCard/learnMoreCard";
import FeatureCard from "./featureCard/featureCard";
import SkillsList from "../skillsList/skillsList";

export default function MainSite() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <SkillsList/>
      <LearnMoreCard />
      <FeatureCard/>
    </>
  );
}
