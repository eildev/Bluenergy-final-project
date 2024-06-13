import Container from "../../../components/dynamic/Container/Container";
import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { AiTwotoneLike } from "react-icons/ai";
import Button from "../../../element/Button";
import { FaEye } from "react-icons/fa6";
import IconStatus from "../../../element/IconStatus";
import NewsDate from "../../../element/NewsDate";
import ImageBoxWithPlayButton from "../../../element/ImageBoxWithPlayButton";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import image1 from "../../../assets/img/news/news-1.jpg";
import image2 from "../../../assets/img/news/news-2.jpg";
import image3 from "../../../assets/img/news/news-3.jpg";
import image4 from "../../../assets/img/news/news-4.jpg";
// import image5 from "../../../assets/img/news/news-5.jpg";
// import image6 from "../../../assets/img/news/news-6.jpeg";
import { useEffect, useState } from "react";
import port from "../../../lib/port";
import path from "../../../lib/path";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => setNews(responseData.allData.slice(0, 1)));
  }, []);

  const [news2, setNews2] = useState({});
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        const [, secondElement] = responseData.allData;
        setNews2(secondElement);
      });
  }, []);

  // console.log(news2);
  return (
    <Container bgColor="bg-body">
      <SectionHeader
        sectionHeaderContainerClassNames="text-center mb-10"
        sectionHeaderHeadingClassNames=""
        sectionHeaderSpanClassName="bg-primary mx-auto my-3"
        sectionHeaderParagraphClassName=""
        title="Latest News"
        description="Global initiative surpasses target for planting trees, raising hope for restoring lost forests and combating climate change"
        borderBottom={true}
        headerDescription={true}
      />

      <div className="flex lg:justify-between flex-col lg:flex-row lg:items-start gap-10">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="h-[450px] lg:w-[45%] w-full relative"
        >
          <div className="relative sm:h-[70%] h-full">
            <ImageBoxWithPlayButton className="w-full h-full relative">
              <IconStatus>
                <span className="flex items-center gap-1 text-lg">
                  <FaEye /> 200298
                </span>

                <span className="flex items-center gap-1 text-lg ">
                  <AiTwotoneLike /> 2020
                </span>
              </IconStatus>
              <Image src={image1} alt="news image" />
            </ImageBoxWithPlayButton>
          </div>
          <div className="hidden sm:block">
            <div className="grid items-center grid-cols-3 gap-3 my-3 h-[30%] ">
              <div>
                <div className="mb-2 h-[80%]">
                  <ImageBox className="w-full h-[100px]">
                    <Image src={image2} alt="news image" />
                  </ImageBox>
                </div>
                <div className="h-[20%]">
                  <Button
                    className="bg-primary text-white text-[12px]"
                    title="view all"
                  />
                </div>
              </div>
              <div className="h-full w-full">
                <ImageBox className="w-full h-full">
                  <Image src={image3} alt="news image" />
                </ImageBox>
              </div>
              <div className="h-full w-full">
                <ImageBox className="w-full h-full">
                  <Image src={image4} alt="news image" />
                </ImageBox>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:w-[55%] w-full flex justify-between items-center gap-10 h-[500px] lg:-h-[430px]"
        >
          {news.map((data) => (
            <>
              <div key={data.id} className="sm:w-1/2 w-full h-full">
                <div className="w-full h-[70%]">
                  <ImageBox className="w-full h-full">
                    <Image src={path("news", data.image)} alt="news image" />
                  </ImageBox>
                </div>

                <div className="">
                  <NewsDate />
                  <Link
                    to={"/news/" + data.id}
                    className="my-3 text-2xl font-bold text-primary capitalize"
                  >
                    {data.title}
                  </Link>
                  <p className="text-xs">
                    {data.description ? data.description.slice(0, 150) : ""}
                  </p>
                </div>
              </div>
            </>
          ))}

          <div className="w-1/2 h-full hidden sm:block">
            <h3 className="mb-3 text-2xl font-bold text-primary capitalize">
              {news2.title}
            </h3>
            <div className="w-full h-[70%]">
              <ImageBox className="w-full h-full">
                <Image src={path("news", news2.image)} alt="news image" />
              </ImageBox>
            </div>
            <div className="">
              <NewsDate />
              <p className="text-xs">
                {news2.description ? news2.description.slice(0, 150) : ""}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default LatestNews;
