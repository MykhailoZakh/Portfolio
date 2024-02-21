import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";

export default function FooterNav() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Mykhailo Zakharkiv™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://www.linkedin.com/in/mykhailo-zakharkiv-359832286/"
              icon={BsLinkedin}
            />
            <FooterIcon
              href="https://github.com/MykhailoZakh"
              icon={BsGithub}
            />
            <FooterIcon
              href="https://stackoverflow.com/users/22684216/mykhailo-zakharkiv"
              icon={BsStackOverflow}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
