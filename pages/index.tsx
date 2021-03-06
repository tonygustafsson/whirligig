import type { NextPage } from "next";
import Head from "next/head";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useScreen from "../hooks/useScreen";

const carouselItems = [
  { name: "Test 1" },
  { name: "Test 2" },
  { name: "Test 3" },
  { name: "Test 4" },
  { name: "Test 5" },
  { name: "Test 6" },
  { name: "Test 7" },
  { name: "Test 8" },
  { name: "Test 9" },
  { name: "Test 10" },
  { name: "Test 11" },
  { name: "Test 12" },
  { name: "Test 13" },
  { name: "Test 14" },
];

const Home: NextPage = () => {
  const { isMobile } = useScreen();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Carousel</h1>

        <Carousel
          slideWidth={isMobile ? 450 : 312}
          showArrows={!isMobile}
          showDots={true}
        >
          {carouselItems.map((item, index) => {
            return (
              <CarouselItem key={`Carousel_item_${index}`} name={item.name} />
            );
          })}
        </Carousel>
      </main>
    </div>
  );
};

export default Home;
