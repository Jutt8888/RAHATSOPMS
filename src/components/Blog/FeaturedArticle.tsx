import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { BlogPost } from "../../blog";

interface FeaturedArticleProps {
  post: BlogPost;
}

export default function FeaturedArticle({ post }: FeaturedArticleProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Background Image */}
      <img
        src={post.cover}
        alt={post.title}
        className="h-[550px] w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-3xl px-10 md:px-16 text-white">

          <span className="inline-block rounded-full bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-widest">
            Featured Article
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/90">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/80">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {post.published}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime}
            </div>

            <div>
              By <strong>{post.author}</strong>
            </div>

          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <Link
            to={`/blog/${post.slug}`}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold text-white transition hover:scale-105 hover:shadow-xl"
          >
            Read Article
            <ArrowRight size={20} />
          </Link>

        </div>
      </div>
    </motion.section>
  );
}