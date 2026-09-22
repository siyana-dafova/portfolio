import React from "react";
import Button from "../../ui/Button";
import { DownloadIcon, MailIcon } from "lucide-react";
import { profile } from "@/data/profile";

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button
        href={profile.cv}
        download="Siyana-Dafova-CV.pdf"
        variant="default"
        size="lg"
      >
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download CV
      </Button>
      <Button href="#contact" variant="outline" size="lg">
        <MailIcon className="mr-2 h-4 w-4" />
        Contact Me
      </Button>
    </div>
  );
};

export default HeroButtons;
