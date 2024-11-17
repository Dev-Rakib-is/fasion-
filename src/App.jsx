import "./App.css";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Images from "./components/Images";
import logo from "./assets/Logo.png";
import Menu from "./components/Menu";
import Heading from "./components/Heading";
import Button from "./components/Button";
import BannerImg from "./assets/BannerImg.png";
import Product1 from "./assets/Product1.png";
import Product2 from "./assets/Product2.png";
import Product3 from "./assets/Product3.png";
import AboutusImg from "./assets/AboutusImg.png";
import Dot from "./assets/Dot.png";
import ProductPrice1 from "./assets/ProductPrice1.png";
import ProductPrice2 from "./assets/ProductPrice2.png";

function App() {
  return (
    <>
    {/* Header Part Start */}
      <nav className={"bg-[#FAE3B6]"}>
        <Container className={" pt-6 pb-[117px] max-w-[1320px] "}>
          <Flex className={"items-center justify-between"}>
            <div className="">
              <Images src={logo} alt={logo} />
            </div>
            <div className="">
              <Flex
                className={
                  "gap-[76px] font-pop font-medium text-[16px] text-black"
                }
              >
                <Menu mTex={"Men"} />
                <Menu mTex={"Woman"} />
                <Menu mTex={"Kids"} />
                <Menu mTex={"Collection"} />
                <Menu mTex={"Trends"} />
              </Flex>
            </div>
            <div className="">
              <Flex className={"gap-3"}>
                <Button
                  btnText={"Login"}
                  className={
                    "w-[121px] h-[57px] bg-headerBg rounded-[10px] border shadow-lg border-[#FDBB57] hover:bg-[#FDBB57] text-6 font-semibold font-pop  "
                  }
                />
                <Button
                  btnText={"Sign up"}
                  className={
                    "w-[121px] h-[57px] bg-headerBg rounded-[10px] border shadow-lg border-[#FDBB57] hover:bg-[#FDBB57] text-6 font-semibold font-pop text-[#050505]"
                  }
                />
              </Flex>
            </div>
          </Flex>
        </Container>
      </nav>
       {/* Header Part Start */}
       {/* Banner Part Start */}
      <div className="bg-[#FAE3B6] ">
        <Container className={"py-14 max-w-[1270px]"}>//j
          <Flex>
            <div className="w-1/2">
              <Heading
                text={"Find The Best Fashion Style For You"}
                as={"h1"}
                className={
                  "font-pop font-semibold text-[#000000] text-[64px] pr-[90px] pb-[36px]"
                }
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
                }
                as={"p"}
                className={
                  "font-pop pb-[78px] pr-[96px] font-regular text-[#000000] text-[22px]"
                }
              />
              <Button
                btnText={"SHOP NOW"}
                className={
                  "w-[319px] h-[86px] text-white bg-black rounded-[10px] hover:bg-[#FDBB57] hover:text-black text-6 font-semibold font-pop"
                }
              />
            </div>
            <div className="w-1/2">
              <Images src={BannerImg} alt={BannerImg} />
            </div>
          </Flex>
        </Container>
      </div>
       {/* Header Part End */}
       {/* Collection Part Start */}
      <div className="pt-[100px] pb-[100px]">
        <Container className={"max-w-[1270px]"}>
          <Heading
            text={"New Collection"}
            as={"h3"}
            className={
              "pb-[100px] text-center font-bold text-[64px] text-black"
            }
          />
          <Flex className={"gap-[30px] flex-wrap justify-center relative"}>
            <div className="relative">
              <Images src={Product1} alt={Product1} className={"w-full"} />
              <Button
                btnText={"Sweater"}
                className={
                  "w-[315px] h-[57px] absolute left-1/2 bottom-[40px] -translate-x-1/2 bg-white text-black  rounded-[10px] font-pop font-regular text-[24px]"
                }
              />
            </div>
            <div className="relative">
              <Images src={Product2} alt={Product2} className={"w-full"} />
              <Button
                btnText={"Jeans"}
                className={
                  "w-[315px] h-[57px] absolute left-1/2 bottom-[40px] -translate-x-1/2 bg-white text-black  rounded-[10px] font-pop font-regular text-[24px]"
                }
              />
            </div>
            <div className="relative">
              <Images src={Product3} alt={Product3} className={"w-full"} />
              <Button
                btnText={"Baskets"}
                className={
                  "w-[315px] h-[57px] absolute left-1/2 bottom-[40px] -translate-x-1/2 bg-white text-black  rounded-[10px] font-pop font-regular text-[24px]"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
       {/* Collection Part End */}
       {/* About Part Start */}
      <div className="">
        <Container className={"max-w-[1320px]"}>
          <Flex className={""}>
            <div className="w-1/2 relative">
              <Images
                src={AboutusImg}
                alt={AboutusImg}
                className={"w-full absolute"}
              />
            </div>
            <div className="w-1/2">
              <Images src={Dot} alt={Dot} className={"ml-[-85px] mt-[-50px]"} />
              <Heading
                text={"Best Fashion Since 2010"}
                as={"h3"}
                className={
                  "text-[64px] pl-[124px] text-black font-bold font-pop pb-[63px]"
                }
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
                }
                as={"p"}
                className={
                  "text-[24px] pl-[124px] pr-[78px] text-black font-semibold font-pop pb-[132px]"
                }
              />
              <div className="bg-[#FEECC8] flex rounded-[20px] h-[280px] w-[793px] ml-[-160px] mt-[-90px] justify-center ">
                <Flex className={"items-center gap-[18px]"}>
                  <div className="">
                    <Heading
                      text={"2010"}
                      as={"h3"}
                      className={"text-[64px] font-bold text-black font-pod"}
                    />
                    <Heading
                      text={"Founded"}
                      as={"p"}
                      className={"text-[28px] font-medium text-black font-pop"}
                    />
                  </div>
                  <div className="border-r-[1px] h-[143px] border-black"></div>
                  <div className="">
                    <Heading
                      text={"5000+"}
                      as={"h3"}
                      className={"text-[64px] font-bold text-black font-pod"}
                    />
                    <Heading
                      text={"Product Sold"}
                      as={"p"}
                      className={"text-[28px] font-medium text-black font-pop"}
                    />
                  </div>
                  <div className="border-r-[1px] h-[143px] border-black"></div>
                  <div className="">
                    <Heading
                      text={"4500+"}
                      as={"h3"}
                      className={"text-[64px] font-bold text-black font-pod"}
                    />
                    <Heading
                      text={"Best Reviews"}
                      as={"p"}
                      className={"text-[28px] font-medium text-black font-pop"}
                    />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
       {/* About Part End */}
       {/* Product Part Start */}
      <div className="bg-[#CFA485] mt-[124px]">
        <Container className={"max-w-[1250px]"}>
          <Flex className={"gap-[31px] pt-[56px] pb-[221px]"}>
            <div className="w-[457px] h-[601px]">
             <div className="relative">
             <Images src={Dot} alt={Dot} className={'absolute bottom-[-25px] left-[120px] z-[-1]'}/>
             </div>
              <Heading
                text={"Best Seller Product"}
                as={"h3"}
                className={"font-pop font-bold text-[64px] text-white"}
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
                }
                as={"p"}
                className={"text-[24px] text-white font-pop font-bold"}
              />
              <Button
                btnText={"Learn MORE"}
                className={
                  "w-[319px] h-[86px] bg-black rounded-[10px] hover:bg-[#FDBB57] text-white font-pop font-bold text-[24px] mt-[40px] hover:text-black"
                }
              />
            </div>
            <Flex className={"gap-[31px]"}>
              <div>
                <Images src={ProductPrice1} alt={ProductPrice1} />
                <div className="bg-white pl-[14px] pt-[14px]">
                  <svg
                    width="123"
                    height="21"
                    viewBox="0 0 123 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.3741 0.243042L11.4313 7.21422H18.0887L12.7028 11.5226L14.76 18.4938L9.3741 14.1854L3.9882 18.4938L6.04543 11.5226L0.659531 7.21422H7.31687L9.3741 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M35.4536 0.243042L37.5108 7.21422H44.1681L38.7822 11.5226L40.8395 18.4938L35.4536 14.1854L30.0677 18.4938L32.1249 11.5226L26.739 7.21422H33.3963L35.4536 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M61.5329 0.243042L63.5901 7.21422H70.2475L64.8616 11.5226L66.9188 18.4938L61.5329 14.1854L56.147 18.4938L58.2042 11.5226L52.8183 7.21422H59.4757L61.5329 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M87.6125 0.243042L89.6697 7.21422H96.3271L90.9412 11.5226L92.9984 18.4938L87.6125 14.1854L82.2266 18.4938L84.2838 11.5226L78.8979 7.21422H85.5553L87.6125 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M113.692 0.243042L115.749 7.21422H122.406L117.021 11.5226L119.078 18.4938L113.692 14.1854L108.306 18.4938L110.363 11.5226L104.977 7.21422H111.635L113.692 0.243042Z"
                      fill="#FFAF37"
                    />
                  </svg>
                  <Heading text={"Sweater Shirt"} as={"h5"}  className={'font-semibold font-pop text-[22px] text-black'}/>
                  <Flex className={"gap-[31px]"}>
                    <Heading text={'$45.99'} as={'h5'} className={'text-6 font-pop font-regular text-[#C4C4C4]'}/>
                    <Heading text={'$45.99'} as={'h5'} className={'text-6 font-pop font-regular text-black'}/>
                  </Flex>
                </div>
              </div>
              <div>
                <Images src={ProductPrice2} alt={ProductPrice2} />
                <div className="bg-white pl-[14px] pt-[14px]">
                  <svg
                    width="123"
                    height="21"
                    viewBox="0 0 123 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.3741 0.243042L11.4313 7.21422H18.0887L12.7028 11.5226L14.76 18.4938L9.3741 14.1854L3.9882 18.4938L6.04543 11.5226L0.659531 7.21422H7.31687L9.3741 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M35.4536 0.243042L37.5108 7.21422H44.1681L38.7822 11.5226L40.8395 18.4938L35.4536 14.1854L30.0677 18.4938L32.1249 11.5226L26.739 7.21422H33.3963L35.4536 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M61.5329 0.243042L63.5901 7.21422H70.2475L64.8616 11.5226L66.9188 18.4938L61.5329 14.1854L56.147 18.4938L58.2042 11.5226L52.8183 7.21422H59.4757L61.5329 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M87.6125 0.243042L89.6697 7.21422H96.3271L90.9412 11.5226L92.9984 18.4938L87.6125 14.1854L82.2266 18.4938L84.2838 11.5226L78.8979 7.21422H85.5553L87.6125 0.243042Z"
                      fill="#FFAF37"
                    />
                    <path
                      d="M113.692 0.243042L115.749 7.21422H122.406L117.021 11.5226L119.078 18.4938L113.692 14.1854L108.306 18.4938L110.363 11.5226L104.977 7.21422H111.635L113.692 0.243042Z"
                      fill="#FFAF37"
                    />
                  </svg>
                  <Heading text={"Sweater Shirt"} as={"h5"}  className={'font-semibold font-pop text-[22px] text-black'}/>
                  <Flex className={"gap-[31px]"}>
                    <Heading text={'$45.99'} as={'h5'} className={'text-6 font-pop font-regular text-[#C4C4C4]'}/>
                    <Heading text={'$45.99'} as={'h5'} className={'text-6 font-pop font-regular text-black'}/>
                  </Flex>
                </div>
              </div>
            </Flex>
          </Flex>
        </Container>
      </div>
       {/* Product Part End */}
    </>
  );
}

export default App;
//Sign up
