import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

import { BlogProvider } from "./context/BlogContext";

function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(timer);
  }, [location.pathname]);

  return (
    <div
      className={visible ? "page-fade-in" : "page-fade-in page-fade-in-hidden"}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <BlogProvider>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PageTransition><Home /></PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition><About /></PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition><Projects /></PageTransition>
            }
          />
          <Route
            path="/certificates"
            element={
              <PageTransition><Certificates /></PageTransition>
            }
          />
          <Route
            path="/articles"
            element={
              <PageTransition><Articles /></PageTransition>
            }
          />
          <Route
            path="/articles/:slug"
            element={
              <PageTransition><ArticleDetail /></PageTransition>
            }
          />
          <Route
            path="/categories"
            element={
              <PageTransition><Categories /></PageTransition>
            }
          />
          <Route
            path="/categories/:slug"
            element={
              <PageTransition><CategoryDetail /></PageTransition>
            }
          />
          <Route
            path="/search"
            element={
              <PageTransition><Search /></PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition><Contact /></PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition><NotFound /></PageTransition>
            }
          />
        </Route>
      </Routes>
    </BlogProvider>
  );
}

function NotFound() {
  return (
    <div
      className="container state-msg"
      style={{ padding: "96px 0" }}
    >
      <span className="eyebrow">404</span>

      <h2>Halaman tidak ditemukan</h2>

      <p>
        Halaman yang kamu cari tidak tersedia.
      </p>
    </div>
  );
}