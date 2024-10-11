



const Banner = () => {
    return (
        <div> 
            <div className="carousel w-full lg:mt-16">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/xzVJwKZ/banner-1.png"
      className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2  transform justify-between">
      <a href="#slide4" className="btn btn-circle bg-transparent text-2xl  text-orange-500 border-none  hover:bg-transparent ">❮</a>
      <a href="#slide2" className="btn btn-circle bg-transparent  text-2xl text-orange-500 border-none  hover:bg-transparent ">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
        src="https://i.ibb.co.com/cT26xhf/banner-2.png"
        className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle bg-transparent text-2xl  text-orange-500 border-none hover:bg-transparent">❮</a>
      <a href="#slide3" className="btn btn-circle bg-transparent text-2xl  text-orange-500 border-none  hover:bg-transparent ">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/8XCTRFC/banner-3.png"
      className="w-full h-[370px] " />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle bg-transparent text-orange-500 text-2xl border-none hover:bg-transparent">❮</a>
      <a href="#slide1" className="btn btn-circle bg-transparent text-orange-500 text-2xl border-none hover:bg-transparent">❯</a>
    </div>
  </div>
 
</div>


       </div>
    );
};

export default Banner;