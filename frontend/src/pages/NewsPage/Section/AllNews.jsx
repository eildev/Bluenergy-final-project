import Container from "../../../components/dynamic/Container/Container";
import AllNewsCard from "../../../element/AllNewsCard";
// import { newsCardData } from "../../../data/newsCardData";
import { useEffect, useState } from "react";
import port from "../../../lib/port";

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = port("news");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setNews(data.allData));
  }, []);

  return (
    <Container bgColor="bg-secondary">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 gap-5">
        {news.map((data) => (
          <AllNewsCard data={data} key={data.id} />
        ))}
      </div>
    </Container>
  );
};

export default AllNews;
