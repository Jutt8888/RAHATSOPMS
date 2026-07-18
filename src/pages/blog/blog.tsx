import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { BLOGS } from "../../blog";
import FeaturedArticle from "../../components/Blog/FeaturedArticle";
import BlogCard from "../../components/Blog/BlogCard";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const featured = BLOGS.find((post) => post.featured);

  const categories = [
    "All",
    ...new Set(BLOGS.map((post) => post.category)),
  ];

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="pt-28 pb-20">

      {/* Hero */}

      <section className="max-w-7xl mx-auto px-6 text-center mb-16">

        <span className="uppercase tracking-[0.35em] text-secondary text-sm font-semibold">
          Rahat SOPMS
        </span>

        <h1 className="mt-5 text-5xl md:text-6xl font-display font-bold text-primaryDark">
          Medical Research Journal
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
          Explore research articles, clinical experiences,
          medical philosophy, herbal knowledge,
          and the latest developments in
          <span className="font-semibold">
            {" "}
            Rehat Simple Organopathic Medical Science.
          </span>
        </p>

      </section>

      {/* Featured */}

      {featured && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <FeaturedArticle post={featured} />
        </section>
      )}

      {/* Search */}

      <section className="max-w-7xl mx-auto px-6 mb-10">

        <div className="relative max-w-xl mx-auto">

          <Search
            className="absolute left-5 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-14 pr-6 shadow-sm focus:border-primary focus:outline-none"
          />

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 mb-16">

        <div className="flex flex-wrap justify-center gap-3">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-3 transition

                ${
                  category === item
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                }
              `}
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      {/* Blog Grid */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="mb-8">

          <h2 className="text-3xl font-display text-primaryDark font-bold">
            Latest Articles
          </h2>

          <p className="text-gray-500 mt-2">
            {filteredBlogs.length} article
            {filteredBlogs.length !== 1 && "s"} found
          </p>

        </div>

        {filteredBlogs.length === 0 ? (

          <div className="py-24 text-center">

            <h3 className="text-2xl font-semibold text-primaryDark">
              No Articles Found
            </h3>

            <p className="mt-4 text-gray-500">
              Try another search or category.
            </p>

          </div>

        ) : (

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {filteredBlogs.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
              />
            ))}

          </div>

        )}

      </section>

    </main>
  );
}