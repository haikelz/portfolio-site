import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Paragraph } from "./ui/typography";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center p-4">
      <div className="w-full max-w-xl flex justify-between items-center">
        <Paragraph className="font-bold text-sm">
          ©2024 Haikel Ilham Hakim
        </Paragraph>
        <div className="space-x-4 flex justify-center items-center">
          <Link to="https://github.com/haikelz" target="_blank">
            <GithubIcon size={20} />
          </Link>
          <Link to="https://www.linkedin.com/in/haikel" target="_blank">
            <LinkedinIcon size={20} />
          </Link>
          <Link to="https://www.facebook.com/kelgfx" target="_blank">
            <FacebookIcon size={20} />
          </Link>
          <Link to="https://www.instagram.com/ekel.ps/" target="_blank">
            <InstagramIcon size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
