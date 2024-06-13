import Container from "../../../components/dynamic/Container/Container";
import ImageBox from "../../../components/dynamic/ImageBox/ImageBox";
import Button from "../../../element/Button";
import Header from "../../../element/Header";
import IconStatus from "../../../element/IconStatus";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import NewsBox from "../../../element/NewsBox";
import { motion } from "framer-motion";
import { fadeIn } from "../../../lib/variants";
import Image from "../../../element/Image";
import { useEffect, useState } from "react";
import port from "../../../lib/port";
import path from "../../../lib/path";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.allData.slice(0, 4)));
  }, []);
  const [news2, setNews2] = useState([]);
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews2(data.allData.slice(0, 1)));
  }, []);
  return (
    <Container>
      <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
        {news2.map((news) => (
          <motion.div
            key={news.id}
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:pr-20 sm:hidden lg:block block"
          >
            <div className="mb-5 pt-20 border-t-2 border-primary">
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
              <p className="uppercase mb-5">November 3, 2023 In Power Plant</p>
              <Header className="mb-5">{news.title}</Header>
              <p className="mb-5">{news.description.slice(0, 200)}</p>

              <Link to={"/news/" + news.id}>
                <Button
                  title="Read more"
                  className="bg-primary text-white font-normal"
                ></Button>
              </Link>
            </div>
          </motion.div>
        ))}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:pl-20"
        >
          <div className="bg-secondary w-full rounded-md shadow-sm p-10">
            <Header className="mb-10 text-white">Recent Post</Header>
            <div className="grid gap-5">
              {news.map((data) => (
                <NewsBox key={data.id} data={data} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default NewsLetter;
