import { WorkClient } from "@/components/work/Client";
import { WorkClosing } from "@/components/work/Closing";
import { WorkHeader } from "@/components/work/Header";
import { WorkOther } from "@/components/work/Other";
import { WorkPractice } from "@/components/work/Practice";
import { WorkTools } from "@/components/work/WorkTool";
import React from "react";

export const Work = () => {
  return (
    <div>
      <WorkHeader />
      <WorkClient />
      <WorkPractice />
      <WorkTools />
      <WorkOther />
      <WorkClosing />
    </div>
  );
};
