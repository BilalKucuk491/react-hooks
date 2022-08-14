import { Link } from "react-router-dom";
import { url } from "../../utils";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
   
import { Helmet } from "react-helmet";

export default function Blog() {

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");


  useEffect(()=>{
    searchParams.set("search",search);
   
    setSearchParams(Object.fromEntries([...searchParams]))
  },[search])

  const posts = [
    {
      id: 1,
      title: "post 1",
      url: "post-1",
    },
    {
      id: 2,
      title: "post 2",
      url: "post-2-turkey-antalya-belek-beaches",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <input type="text" defaultValue={search} onChange={e=>setSearch(e.target.value)} />
      blog sayfası
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link
              to={url("home.blog.post", {
                id: post.id,
                url: post.url,
              })}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
