import { useRef } from "react";

import ContactForm from "./components/ContactForm";
import GermanyMap from "./components/map";
import SocialLanding from "./components/Contactheader";
import Navbar from "../../components/Navbar";

const ContactPage = () => {
  const formRef = useRef(null);

  return (
    <div>
      <Navbar registerRef={formRef} />
      <SocialLanding formRef={formRef} />
      <GermanyMap />

      {/* FORM TARGET */}
      <div ref={formRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;