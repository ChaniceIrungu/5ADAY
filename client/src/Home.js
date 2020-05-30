import React from "react";

const Home = () => {
  const header = "5 Daily and more... Reach your Goal";
  const image =
    "https://www.juiceplus.com/content/juiceplusblog/en/2019/3/the-ultimate-fruit-and-vegetable-season-calendar/_jcr_content/par/image_1788290349.img.jpg/155317905";

  return (
    <div className="text-center bg-light">
      <h2 className="header">{header}</h2>
      <img className="card-img-top" src={image} alt="" />
    </div>
  );
};

export default Home;
