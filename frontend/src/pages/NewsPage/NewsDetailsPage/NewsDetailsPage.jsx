import { useParams } from "react-router-dom";
import Banner from "../../../components/dynamic/Banner/Banner";
import bannerImage from "../../../assets/img/banner/news-banner.jpg";
import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import IconStatus from "../../../element/IconStatus";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Image from "../../../element/Image";
import path from "../../../lib/path";
import Header from "../../../element/Header";
import { useEffect, useState } from "react";
import port from "../../../lib/port";
import NewsBox from "../../../element/NewsBox";

const NewsDetailsPage = () => {
  const { id } = useParams();

  // console.log(useParams());

  const [news, setNews] = useState({});
  useEffect(() => {
    const url = port("news/" + id);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data.allData));
  }, [id]);

  const [news2, setNews2] = useState([]);
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews2(data.allData.slice(0, 4)));
  }, []);

  // console.log(news);
  return (
    <>
      <Banner
        bannerImage={bannerImage}
        bannerText="At Bluenergy, we offer supply/trading, engineering consulting, and pioneering solutions in renewable energy and energy efficiency for a sustainable future."
        bannerTitle="News Details"
      />
      <Container>
        <div className="grid lg:gap-20 gap-10 md:grid-cols-3">
          <div className="col-span-2">
            <div className="">
              <div className="mb-5">
                <ImageBox className="relative h-[300px] w-full">
                  <IconStatus>
                    <span className="text-xl cursor-pointer">
                      <CiShare2 />
                    </span>
                    <span className="text-xl cursor-pointer">
                      <FaRegHeart />
                    </span>
                  </IconStatus>
                  <Image src={path("news", news.image)} />
                </ImageBox>
              </div>
              <div>
                <p className="uppercase mb-5">
                  November 3, 2023 In Power Plant
                </p>
                <Header className="mb-5">{news.title}</Header>
                <p className="mb-5">{news.description}</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full">
            <div className="w-full">
              <div className="bg-secondary w-full rounded-md shadow-sm p-10">
                <Header className="mb-10 text-white">Recent Post</Header>
                <div className="grid gap-5">
                  {news2.map((data) => (
                    <NewsBox key={data.id} data={data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NewsDetailsPage;
