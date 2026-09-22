import { HomeContact } from "@/components/home/contact";
import { HomeEducation } from "@/components/home/Education";
import { HomeHero } from "@/components/home/Hero";
import { HomeHire } from "@/components/home/hireMe";
import { HomeBestProjects } from "@/components/home/projects";
import { HomeToolkit } from "@/components/home/ToolKit";
import { HomeWhatIDo } from "@/components/home/WhatiDo";
import React from "react";

export const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeWhatIDo />
      <HomeBestProjects />
      <HomeToolkit />
      <HomeEducation />
      <HomeHire />
      <HomeContact />
    </div>
  );
};
