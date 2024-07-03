import Cards from "@/components/Cards";
import Email from "@/components/Email";
import Navbar from "@/components/Navbar";
import Newcloths from "@/components/Newcloths";
import Products from "@/components/Products";
import Sales from "@/components/Sales"
import Customer from '@/components/Customer'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Sales/>
    <Cards/>
    <Newcloths/>
    <Products/>
    <Email/>
    <Customer/>
    <Footer/>
    </>
    );
}
