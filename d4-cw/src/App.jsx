import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <Navbar />
      <div className='bg-blue-50'>
        <Quote />
      </div>
      <Footer />
    </>
  );
}

export default App;