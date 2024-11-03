import React, {lazy} from "react";
import "../index.scss";

import Header from "../components/Header";
import Footer from "../components/Footer";

const TwoApp = lazy(() => import("two/App"));


const Two = () => {
    return (
        <div className="text-3xl mx-auto max-w-6xl">
            <Header />
            <div className="con">
                <TwoApp />
            </div>
            <Footer />
        </div>
    );
};

export default Two;