import { useRef } from "react";

import VoipFAQ from "../../components/Faq";
import Content1 from "./components/Content1";
import Ourservices from "./components/Ourservices";
import VoipHeader from "./components/Header";
import WorldMap from "./components/WorldMap";
import RegistrationPage from "../../components/Contactform";
import Navbar from "../../components/Navbar";

export default function Home() {
  const contentRef = useRef(null);
  const registerRef = useRef(null);

  // ✅ Scroll handlers
  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
<Navbar registerRef={registerRef} />
      <VoipHeader
        onGetStarted={scrollToRegister}
        onLearnMore={scrollToContent}
      />

      <WorldMap />

      {/* ✅ Learn More Target */}
      <div ref={contentRef}>
        <Content1 />
      </div>

        {/* ✅ Get Started Target */}
      <RegistrationPage formRef={registerRef} />

      <Ourservices />

      <VoipFAQ />
    </div>
  );
}