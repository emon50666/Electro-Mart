import banner_1 from '../../assets/images/banner_1.png'
import banner_2 from '../../assets/images/banner_2.png'
import banner_3 from '../../assets/images/banner_3.png'



const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={banner_1 } 
      className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2  transform justify-between">
      <a href="#slide4" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600 ">❮</a>
      <a href="#slide2" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
        src={banner_2}
        className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600">❮</a>
      <a href="#slide3" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={banner_3}
      className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600">❮</a>
      <a href="#slide1" className="btn btn-circle bg-orange-500 text-white border-none hover:bg-orange-600">❯</a>
    </div>
  </div>
 
</div>
        </div>
    );
};

export default Banner;