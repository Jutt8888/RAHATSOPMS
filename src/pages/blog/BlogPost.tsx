import { Link, useParams } from "react-router-dom";
import { CalendarDays, Clock, ArrowLeft, ArrowRight, UserRound } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BLOGS } from "../../blog";
import ShareButtons from "../../components/Blog/ShareButtons";
import BlogCard from "../../components/Blog/BlogCard";

export default function BlogPost() {
  const { slug } = useParams();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const post = BLOGS.find((item) => item.slug === slug);

  if (!post) return <NotFound />;

  const relatedPosts = BLOGS.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50" style={{ scaleX }} />

      {/* Hero Section */}
      <section className="pt-28 px-6 max-w-5xl mx-auto">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={post.cover}
          alt={post.title}
          className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
        />
        
        <div className="mt-12 text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">{post.category}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold text-primaryDark leading-tight">
            {post.title}
          </h1>
          
          <div className="mt-8 flex justify-center gap-8 text-primaryDark/60 font-medium">
            {[ { Icon: CalendarDays, text: post.published }, { Icon: Clock, text: post.readTime }, { Icon: UserRound, text: post.author } ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-sm"><item.Icon size={16} /> {item.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section - Using 'prose' for professional typography */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div 
          className="prose prose-lg md:prose-xl prose-primary max-w-none text-primaryDark/80 leading-[1.8]
          [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-primary/5 [&_blockquote]:px-6 [&_blockquote]:py-1 [&_blockquote]:italic
          [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-primaryDark [&_h2]:mt-12 [&_h2]:mb-6
          [&_li]:mb-3"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>

      {/* Footer Elements */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="border-t pt-10">
          <h3 className="font-bold text-lg mb-4">Share this research</h3>
          <ShareButtons />
        </div>
      </section>
    </main>
  );
}

const NotFound = () => (
  <div className="pt-40 text-center px-6">
    <h1 className="text-4xl font-bold text-primaryDark">Article Not Found</h1>
    <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold">
      <ArrowLeft size={18} /> Back to Blog
    </Link>
  </div>
);