import About from "./components/About/About";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import PopUp from "./components/PopUp/PopUp";
import Story from "./components/SectionStory/Story";
import Tours from "./components/Tours/Tours";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Features />
      <Tours />
      <Story />
      <Form />
      <Footer />
      <PopUp />
    </>
  );
}

export default App;
