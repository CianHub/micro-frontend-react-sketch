import React, {lazy} from "react";
import "../index.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutApp = lazy(() => import("about/App"));


const One = () => {
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

export default One;