import VoipFAQ from "../../components/Faq";
import Aboutcontent from "./components/Aboutcontent";
import Content1 from "./components/Content1";
import Countriesdeal from "./components/Countriesdeal";
import Ourservices from "./components/Ourservices";
import VoipHeader from "./components/Header";

export default function Home() {
  return (
    <div>
      <VoipHeader />
      <Countriesdeal />
      <Content1 />
      <Aboutcontent />
      <Ourservices />
      <VoipFAQ />
    </div>
  );
}