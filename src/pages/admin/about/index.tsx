import { Card, PanelContent } from "@/components";
import React from "react";

const About = () => {
  return (
    <PanelContent
      title="About"
      menu="Data Master"
      submenu="About"
      headerContent
    >
      <Card title="About">About</Card>
    </PanelContent>
  );
};

export default About;
