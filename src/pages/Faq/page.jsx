import { useRef } from "react";
import VoipFAQ from "../../components/Faq";
import Faqheader from "./components/Faqheader";
import Navbar from "../../components/Navbar";

const FaqPage = () => {
  const registerRef = useRef(null);

  const faqRef = useRef(null);

  return (
    <div>
<Navbar registerRef={registerRef} />
      <Faqheader faqRef={faqRef} />

      <div ref={faqRef}>
        <VoipFAQ />
      </div>
    </div>
  );
};

export default FaqPage;