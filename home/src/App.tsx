import React from "react";
import "./index.scss";
import {createRoot} from 'react-dom/client';

import Header from "./components/Header";
import Footer from "./components/Footer";
import {App as AboutApp} from "about/App";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">
      <AboutApp />
    </div>
    <Footer />
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);