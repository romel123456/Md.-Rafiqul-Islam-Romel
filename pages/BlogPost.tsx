
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts } = useAppContext();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="text-center py-20 text-gray-900 dark:text-white">Post not found.</div>;
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary tracking-wide uppercase">{post.tags.join(' / ')}</p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-5xl">{post.title}</h1>
          <div className="mt-6 flex justify-center items-center">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
            <span className="mx-2 text-gray-500 dark:text-gray-400">&middot;</span>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
          </div>
        </div>

        <img className="mt-12 rounded-lg shadow-lg w-full aspect-video object-cover" src={post.imageUrl} alt={post.title} />

        <div className="mt-12 prose prose-lg dark:prose-invert mx-auto text-gray-600 dark:text-gray-300">
          <p>{post.content}</p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Posts</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {relatedPosts.map(related => (
              <Link to={`/blog/${related.slug}`} key={related.id} className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition">
                <p className="text-sm text-primary font-semibold">{related.tags.join(', ')}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{related.title}</h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
