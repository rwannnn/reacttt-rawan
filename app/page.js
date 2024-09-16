"use client";
import Image from "next/image";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/page";
import Cat from "./components/Cat/page";
import Projects from "./components/Projects/page";
import Review from "./components/Review/page";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Nav />
        <Cat />
        <Projects />
        <Review />
        <Footer />
      </main>
    </div>
  );
}
