import ImgCarousel from "./Components/Carousel/ImgCarousel";
import Facilities from "./Components/Facilities/Facilities";
import { Footer } from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import News from "./Components/News/News";
import Rooms from "./Components/Rooms/Rooms";

function App() {
  return (
    <div>
      <Menu />
      <ImgCarousel />
      <Facilities />
      <Rooms />
      <News />
      <Footer />
    </div>
  );
}

export default App;
