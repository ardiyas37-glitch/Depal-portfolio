import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Search from "./pages/Search";
import Contact from "./pages/Contact";

import { BlogProvider } from "./context/BlogContext";

export default function App() {
  return (
    <BlogProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Projects */}
          <Route path="/projects" element={<Projects />} />

          {/* Articles */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />

          {/* Categories */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:slug" element={<CategoryDetail />} />

          {/* Search */}
          <Route path="/search" element={<Search />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BlogProvider>
  );
}

function NotFound() {
  return (
    <div className="container state-msg" style={{ padding: "96px 0" }}>
      <span className="eyebrow">404</span>

      <h2>Halaman tidak ditemukan</h2>

      <p>
        Halaman yang kamu cari tidak tersedia.
      </p>
    </div>
  );
}