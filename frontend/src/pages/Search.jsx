import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import SearchBar from "../components/SearchBar";
import Loading from "../components/Loading";
import { searchArticles } from "../services/api";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    let isMounted = true;
    setIsLoading(true);

    searchArticles(query).then((data) => {
      if (isMounted) {
        setResults(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [query]);

  function handleSearch(newQuery) {
    setSearchParams({ q: newQuery });
  }

  return (
    <div className="container">
      <div className="search-hero">
        <span className="eyebrow">Pencarian</span>

        <h1>Cari artikel</h1>

        <SearchBar
          initialValue={query}
          onSearch={handleSearch}
          autoFocus
        />
      </div>

      <div
        className="section"
        style={{ paddingTop: "var(--space-5)" }}
      >
        {query && (
          <span className="search-results-count">
            {isLoading
              ? "Mencari..."
              : `${results.length} hasil untuk "${query}"`}
          </span>
        )}

        {isLoading ? (
          <Loading label="Mencari artikel" />
        ) : query && results.length === 0 ? (
          <div className="state-msg">
            <p>
              Tidak ada artikel yang cocok dengan pencarian Anda.
              Coba gunakan kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="grid grid-3">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}