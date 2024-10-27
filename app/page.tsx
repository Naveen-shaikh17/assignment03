import Link from "next/link";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const Home = () => {
  return (
    <><div>
      <Header></Header>
      <br></br>
      <h1 className={"text-center italic font-bold	 decoration-teal-100	"}> HOME PAGE</h1>
      <br></br>
      <br></br>

      <p className={"text-center  border-dotted border-white		"}>YOU ARE CURRENTLY ON HOME PAGE.
        <br></br>
        FOR MORE INFO YOU CAN NAVIGATE TO CONTACT US OR MY PORTFOLIO.
        <br></br>
        HOPE YOU ENJOYED YOUR VISIT.
      </p>
      <br>
      </br>
      <br></br>
       
      <ul>
        <li> <Link href="/contact-us"> ~CONTACT US</Link></li>

        <br></br>
        <li> <Link href="/portfolio">  ~PORTFOLIO </Link></li>
      </ul>


    </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> <Footer></Footer></>
      

    );
    }
    export default Home;
