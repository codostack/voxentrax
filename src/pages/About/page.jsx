import Aboutheader from "./components/Aboutheader"
import Content3 from "./components/Content1"
import AboutUsContent2 from "./components/Content2"
import RegistrationPage from "../../components/Contactform"
import { useRef } from "react"
import Navbar from "../../components/Navbar"

const AboutPage = () => {
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
      <Aboutheader
        onGetStarted={scrollToRegister}
        onLearnMore={scrollToContent}
      />
      <div ref={contentRef}>
        <Content3 />
      </div>

      <RegistrationPage formRef={registerRef} />

      <AboutUsContent2 />
    </div>
  )
}

export default AboutPage