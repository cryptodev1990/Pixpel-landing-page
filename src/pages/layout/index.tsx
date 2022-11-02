import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Router from "../../routes";

function Landing() {
  return (
    <div className="relative flex flex-col w-full h-screen min-h-screen bg-main">
      <main className="flex-1 overflow-y-scroll">
        <Header />
        <Router />
        <Footer />
      </main>
    </div>
  );
};

export default Landing;