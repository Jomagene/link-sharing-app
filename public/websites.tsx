import CodeWarsIcon from "@/components/icons/CodeWars";
import DevToIcon from "@/components/icons/DevTo";
import FacebookIcon from "@/components/icons/Facebook";
import FreeCodeCampIcon from "@/components/icons/FreeCodeCamp";
import FrontendMentorIcon from "@/components/icons/FrontendMentor";
import GithubIcon from "@/components/icons/Github";
import GitlabIcon from "@/components/icons/Gitlab";
import HashnodeIcon from "@/components/icons/Hashnode";
import LinkedInIcon from "@/components/icons/LinkedIn";
import StackOverflowIcon from "@/components/icons/StackOverflow";
import TwitchIcon from "@/components/icons/Twitch";
import TwitterIcon from "@/components/icons/Twitter";
import YoutubeIcon from "@/components/icons/Youtube";
import React from "react";

let websites: {
  name: string;
  value: string;
  color: string;
  placeholder: string;
  src: React.JSX.Element;
}[] = [
  {
    name: "Github",
    value: "github",
    color: "#1A1A1A",
    placeholder: "e.g. https://www.github.com/jomagene",
    src: <GithubIcon />,
  },
  {
    name: "Frontend Mentor",
    value: "frontend-m",
    color: "#D9D9D9",
    placeholder: "e.g. https://www.frontendmentor.io/jomagene",
    src: <FrontendMentorIcon />,
  },
  {
    name: "Twitter",
    value: "twitter",
    color: "#43B7E9",
    placeholder: "e.g. https://x.com/jomagene",
    src: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    value: "linkedin",
    color: "#2D68FF",
    placeholder: "e.g. https://www.linkedin.com/in/jo%C3%ABl-magene/",
    src: <LinkedInIcon />,
  },
  {
    name: "YouTube",
    value: "youtube",
    color: "#EE3939",
    placeholder: "e.g. https://www.youtube.com/@joelmagene2968",
    src: <YoutubeIcon />,
  },
  {
    name: "Facebook",
    value: "facebook",
    color: "#2442AC",
    placeholder: "e.g. https://www.facebook.com/",
    src: <FacebookIcon />,
  },
  {
    name: "Twitch",
    value: "twitch",
    color: "#EE3FC8",
    placeholder: "e.g. https://www.twitch.com/",
    src: <TwitchIcon />,
  },
  {
    name: "Dev.to",
    value: "devto",
    color: "#333333",
    placeholder: "e.g. https://dev.to/jomagene",
    src: <DevToIcon />,
  },
  {
    name: "Codewars",
    value: "codewars",
    color: "#8A1A50",
    placeholder: "e.g. https://www.codewars.com/",
    src: <CodeWarsIcon />,
  },
  {
    name: "Freecodecamp",
    value: "freecodecamp",
    color: "#302267",
    placeholder: "e.g. https://freecodecamp.com/",
    src: <FreeCodeCampIcon />,
  },
  {
    name: "Gitlab",
    value: "gitlab",
    color: "#EB4925",
    placeholder: "e.g. https://gitlab.com/",
    src: <GitlabIcon />,
  },
  {
    name: "Hashnode",
    value: "hashnode",
    color: "#0330D1",
    placeholder: "e.g. https://hashnode.com/@Jomagene",
    src: <HashnodeIcon />,
  },
  {
    name: "Stackover-flow",
    value: "stackoverflow",
    color: "#EC7100",
    placeholder:
      "e.g. https://stackoverflow.com/users/23927830/jo%c3%abl-magene",
    src: <StackOverflowIcon />,
  },
];
export default websites;
