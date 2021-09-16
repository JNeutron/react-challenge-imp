import React from 'react';
import "./App.css"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Posts from "./features/posts/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
