import { Contact } from "./components/section/Contact";
import { Education } from "./components/section/Education";
import { Footer } from "./components/section/Footer";
import { Home } from "./components/section/Home";
import Navbar from "./components/section/Navbar";
import { Process } from "./components/section/Process";
import { ToolKit } from "./components/section/ToolKit";
import { Work } from "./components/section/Work";
// "Work", "ToolKit", "Process", "Education", "Contact"
export default function App() {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Home />
      <Work />
      <ToolKit />
      <Process />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
