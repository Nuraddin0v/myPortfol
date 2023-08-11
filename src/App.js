/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Section from "./components/Section";
import MyShelf from "./components/MyShelf";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
<link
  rel='stylesheet'
  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
  integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
  crossorigin='anonymous'
  referrerpolicy='no-referrer'
/>;
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/shelf' element={<MyShelf/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
