import { createContext, useContext, useEffect, useState } from "react";
import { getArticles, getCategories } from "../services/api";

const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      const [articlesData, categoriesData] = await Promise.all([
        getArticles(),
        getCategories()
      ]);

      if (isMounted) {
        setArticles(articlesData);
        setCategories(categoriesData);
        setIsLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  const value = { articles, categories, isLoading };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}
