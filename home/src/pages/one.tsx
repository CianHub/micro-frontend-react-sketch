import React from "react";
import "../index.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {App as AboutApp} from "about/App";

export const One = () => {
    return (
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <div className="con">
                <AboutApp />
            </div>
            <Footer />
        </div>
    );
};
