/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import { CardWrapper } from "./Components/CardWrapper";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Banner />
      <CardWrapper />
      <Footer />
    </div>
  );
}

export default App;
