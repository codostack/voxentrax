import VoipFAQ from "../../components/Faq";
import Content1 from "./components/Content1";
import Ourservices from "./components/Ourservices";
import VoipHeader from "./components/Header";
import WorldMap from "./components/WorldMap";
import RegistrationPage from "../../components/Contactform";

export default function Home() {
  return (
    <div>
      <VoipHeader />
      <WorldMap />
      <Content1 />
      <RegistrationPage />
      <Ourservices />
      <VoipFAQ />
    </div>
  );
}