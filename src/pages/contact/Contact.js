import { SocialButton } from "./social-button/SocialButton";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { useNavigation } from "../../contexts/NavContext";
import { useEffect } from "react";

export const ContactPage = () => {
  const setCurrentPage = useNavigation()["setCurrentPage"];

  useEffect(() => {
    const unsubscribe = setCurrentPage("contact");

    return unsubscribe;
  }, [setCurrentPage]);

  return (
    <div className="flex-grow w-full h-full p-8 lg:px-32 lg:py-12">
      <div className="flex flex-col items-center md:items-stretch font-telex">
        <h1 className="text-3xl lg:text-6xl">Find me on the Web:</h1>
        <div className="w-min lg:p-16 flex flex-col gap-10 scale-75 sm:scale-100">
          <SocialButton
            href="https://joshuaibrom.com"
            buttonColor="bg-orange-400"
            icon={<MdWeb size={64} />}
            text="Personal Website"
          />
          <SocialButton
            href="https://github.com/sk3p7ic"
            buttonColor="bg-pink-400"
            icon={<FaGithub size={64} />}
            text="@sk3p7ic"
          />
          <SocialButton
            href="https://twitter.com/fizzedmr"
            buttonColor="bg-cyan-400"
            icon={<FaTwitter size={64} />}
            text="@FizzedMr"
          />
          <SocialButton
            href="https://linkedin.com/in/joshua-ibrom"
            buttonColor="bg-purple-400"
            icon={<FaLinkedin size={64} />}
            text="@Joshua-Ibrom"
          />
        </div>
      </div>
    </div>
  );
};
