import VoipFAQ from "../../components/Faq";
import Content1 from "./components/Content1";
import Ourservices from "./components/Ourservices";
import VoipHeader from "./components/Header";
import RegistrationPage from "../../components/Contactform";

export default function Home() {
  return (
    <div>
      <VoipHeader />
      {/* <Countriesdeal /> */}
      <Content1 />
      <RegistrationPage />
      <Ourservices />
      <VoipFAQ />
    </div>
  );
}