import React from "react";
import "../index.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const Two = () => {
    return (
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <div className="con">
                Two
            </div>
            <Footer />
        </div>
    );
};
