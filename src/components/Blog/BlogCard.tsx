import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "../../blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg border border-gray-100"
    >
      {/* Cover */}
      <div className="relative overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute top-4 left-4 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {post.category}
        </span>

        {/* Featured */}
        {post.featured && (
          <span className="absolute top-4 right-4 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-white shadow-lg">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">

          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            {post.published}
          </div>

          <div className="flex items-center gap-1">
            <Clock size={16} />
            {post.readTime}
          </div>

        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-bold text-primaryDark transition-colors group-hover:text-primary">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="mb-6 leading-7 text-gray-600">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">

          <p className="font-medium text-gray-700">
            {post.author}
          </p>

          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center gap-2 font-semibold text-primary transition group-hover:gap-3"
          >
            Read More
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </motion.article>
  );
}