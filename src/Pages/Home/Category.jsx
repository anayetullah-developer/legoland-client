import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const [category, setCategory] = useState("cars");
  const [toys, setToys] = useState([]);
  console.log(toys);
  const handleCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    fetch(`https://lego-marketplace-server.vercel.app/toys/${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  return (
    <div className="container my-5 py-5">
      <Tabs>
        <TabList className="bg-secondary rounded">
          <Tab onClick={() => handleCategory("cars")}>Cars</Tab>
          <Tab onClick={() => handleCategory("figures")}>Figures</Tab>
          <Tab onClick={() => handleCategory("architecture")}>Architecture</Tab>
        </TabList>

        <TabPanel className="text-center mt-5">
          <h6>Shop Legoland Toys</h6>
          <h1>Lego Cars</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4">
                {toys.map(toy => <CategoryCard key={toy._id} toy={toy}/>)}
            </div>
        </TabPanel>
        <TabPanel className="text-center mt-5">
          <h6>Shop Legoland Toys</h6>
          <h1>Shop Lego Figures</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4">
                {toys.map(toy => <CategoryCard key={toy._id} toy={toy}/>)}
            </div>
        </TabPanel>
        <TabPanel className="text-center mt-5">
          <h6>Shop Legoland Toys</h6>
          <h1>Shop Lego Architecture</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 mt-4">
                {toys.map(toy => <CategoryCard key={toy._id} toy={toy}/>)}
            </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
