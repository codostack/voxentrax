import Content4 from "./components/Content1";
import VoipHeader from "./components/ServiceHeader";
import ServiceContent2 from "./components/Content2";
import RegistrationPage from "../../components/Contactform";
import { useRef } from "react";
import Navbar from "../../components/Navbar";

export default function Services() {

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
      <div ref={contentRef}>
        <Content4 />
      </div>
      <RegistrationPage formRef={registerRef} />
      <ServiceContent2 />
    </div>
  );
}