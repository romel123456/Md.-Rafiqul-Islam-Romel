
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const BlogList: React.FC = () => {
  const { blogPosts } = useAppContext();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            SolverCircle Blog
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Insights, trends, and articles from our team of experts.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">
                    {post.tags.join(', ')}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{post.author}</span>
                    <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/seed/${post.author}/40/40`} alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                    <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
