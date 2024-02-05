import { useState, useEffect } from "react";

export default function Home() {
  const [article, setArticle] = useState();

  useEffect(() => {
    async function gerArticle() {
      const res = await fetch("http://localhost:4000/api/blogs");
      const data = await res.json();
      setArticle(data);
    }

    gerArticle();
  }, []);

  return (
    <div>
      <p>{article?.title}</p>
    </div>
  );
}
