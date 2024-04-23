import React from "react";
import Navbar from "../components/navbar/Navbar";
import MainCarousel from "../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/homeSectionCorousel/HomeSectionCarousel";
import Mens_kurta from '../components/homeSectionCorousel/Data'
import Footer from "../components/footer/Footer";
import Product from "../components/products/Product";
import ProductCard from "../components/products/ProductCard";
function Home() {
  return (
    <>
    <div className="">
    
    </div>
      
      <div  >
      <MainCarousel />
      </div>
      <div className="border py-10">
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Men's shoes"}/>
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Men's shirt"}/>
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Womens's saree"}/>
        <HomeSectionCarousel Data = {Mens_kurta} sectionName={"Womens's Dress"}/>
        
      </div>

      

    </>
  );
}

export default Home;
