import { useEffect, useState } from "react";
import dataStories from "../../shared/jsons/stories.json";
import dataCategory from "../../shared/jsons/category.json";
import dataBestSeller from "../../shared/jsons/card.json";
import dataNews from "../../shared/jsons/news.json";
import dataAddress from "../../shared/jsons/address.json";
import { IoIosArrowForward } from "react-icons/io";
import { IStories } from "../../shared/interfaces/stories.interfaces";
import styles from "./index.module.scss";
import Stories from "./components/Stories/Index";
import Header from "./components/Header/Index";
import Category from "./components/Category/Index";
import { ICategory } from "../../shared/interfaces/category.interface";
import Cards from "./components/Cards/Index";
import { ICard } from "../../shared/interfaces/cards.interface";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import News from "./components/News";
import { INews } from "../../shared/interfaces/news.interface";
import Address from "./components/Address/Index";
import { IAddress } from "../../shared/interfaces/address.interface";
import Footer from "./components/Footer/Index";

export default function HomePage() {
  const [stories, setStories] = useState<IStories[]>();
  const [category, setCategory] = useState<ICategory[]>();
  const [seller, setSeller] = useState<ICard[]>();
  const [auction, setAuction] = useState<ICard[]>();
  const [news, setNews] = useState<INews[]>();
  const [address, setAddress] = useState<IAddress[]>();
  useEffect(() => {
    setStories(dataStories);
    setCategory(dataCategory);
    setSeller(dataBestSeller[0]);
    setAuction(dataBestSeller[1]);
    setNews(dataNews);
    setAddress(dataAddress);
  }, []);
  return (
    <>
      <Header />
      <main className="container">
        <section className={styles.stories}>
          {stories &&
            stories.map((data) => {
              return <Stories name={data.name} img={data.img} />;
            })}
        </section>
        <section className={styles.category}>
          <header className={styles.category__title}>
            <h2>Категории</h2>
          </header>
          <div className={styles.category__content}>
            {category &&
              category.map((data) => {
                return (
                  <Category
                    title={data.title}
                    count={data.count}
                    img={data.img}
                  />
                );
              })}
          </div>
        </section>
        <section className={styles.seller}>
          <header className={styles.seller__title}>
            <h2>Хиты продаж</h2>
          </header>
          <div className={styles.seller__swiper}>
            <button id="leftArrow">
              <IoIosArrowForward />
            </button>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              pagination={{
                el: "#containerForPagination",
                type: "bullets",
                bulletClass: "pagination",
                bulletActiveClass: "pagination-ative",
                clickable: true,
              }}
              navigation={{
                nextEl: "#rightArrow",
                prevEl: "#leftArrow",
              }}
              modules={[Pagination, Navigation, Keyboard]}
              className="seller-swiper"
              keyboard={true}
              breakpoints={{
                1280: {
                  slidesPerView: 6,
                },
                768: {
                  slidesPerView: 4,
                },
                480: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
            >
              {seller &&
                seller.map((data) => {
                  return (
                    <SwiperSlide>
                      <Cards
                        img={data.img}
                        title={data.title}
                        price={data.price}
                        pertinence={data.pertinence}
                        set={data.set}
                        old_price={data.old_price}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div id="containerForPagination"></div>
            <button id="rightArrow">
              <IoIosArrowForward />
            </button>
          </div>
        </section>
        <section className={styles.news}>
          <header>
            <h2>Новости</h2>
          </header>
          <div className={styles.news__swiper}>
            <button id="leftArrowNews">
              <IoIosArrowForward />
            </button>
            <Swiper
              slidesPerView={6}
              spaceBetween={17}
              pagination={{
                el: "#containerForPaginationNews",
                type: "bullets",
                bulletClass: "paginationNews",
                bulletActiveClass: "pagination-ativeNews",
                clickable: true,
              }}
              navigation={{
                nextEl: "#rightArrowNews",
                prevEl: "#leftArrowNews",
              }}
              modules={[Pagination, Navigation, Keyboard]}
              className="news-swiper"
              keyboard={true}
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
            >
              {news &&
                news.map((data) => {
                  return (
                    <SwiperSlide>
                      <News
                        img={data.img}
                        title={data.title}
                        discount={data.discount}
                        ilustration={data.ilustration}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div id="containerForPaginationNews"></div>
            <button id="rightArrowNews">
              <IoIosArrowForward />
            </button>
          </div>
        </section>
        <section className={styles.auction}>
          <header className={styles.auction__title}>
            <h2>Аукционные товары</h2>
          </header>
          <div className={styles.auction__swiper}>
            <button id="leftArrowAuction">
              <IoIosArrowForward />
            </button>
            <Swiper
              slidesPerView={6}
              spaceBetween={10}
              pagination={{
                el: "#containerForPaginationAuction",
                type: "bullets",
                bulletClass: "paginationAuction",
                bulletActiveClass: "pagination-ativeAuction",
                clickable: true,
              }}
              navigation={{
                nextEl: "#rightArrowAuction",
                prevEl: "#leftArrowAuction",
              }}
              modules={[Pagination, Navigation, Keyboard]}
              className="auction-swiper"
              keyboard={true}
              breakpoints={{
                1280: {
                  slidesPerView: 6,
                },
                768: {
                  slidesPerView: 4,
                },
                480: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
            >
              {auction &&
                auction.map((data) => {
                  return (
                    <SwiperSlide>
                      <Cards
                        img={data.img}
                        title={data.title}
                        price={data.price}
                        pertinence={data.pertinence}
                        set={data.set}
                        old_price={data.old_price}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div id="containerForPaginationAuction"></div>
            <button id="rightArrowAuction">
              <IoIosArrowForward />
            </button>
          </div>
        </section>
        <section className={styles.address}>
          <header>
            <h2>Адреса магазинов</h2>
          </header>
          <div className={styles.address__swiper}>
            <Swiper
              slidesPerView={6}
              spaceBetween={17}
              pagination={{
                el: "#containerForPaginationAddress",
                type: "bullets",
                bulletClass: "paginationAddress",
                bulletActiveClass: "pagination-ativeAddress",
                clickable: true,
              }}
              navigation={{
                nextEl: "#rightArrowAddress",
                prevEl: "#leftArrowAddress",
              }}
              modules={[Pagination, Navigation, Keyboard]}
              className="address-swiper"
              keyboard={true}
              breakpoints={{
                1280: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                300: {
                  slidesPerView: 1,
                },
              }}
            >
              {address &&
                address.map((data) => {
                  return (
                    <SwiperSlide>
                      <Address
                        time={data.time}
                        address={data.address}
                        link={data.link}
                        phone={data.phone}
                      />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
            <div id="containerForPaginationAddress"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
