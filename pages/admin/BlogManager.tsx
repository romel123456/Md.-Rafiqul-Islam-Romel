
import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { BlogPost } from '../../types';

const BlogManager: React.FC = () => {
  const { blogPosts, setBlogPosts } = useAppContext();
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(blogPosts.filter(p => p.id !== id));
    }
  };
  
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingPost) return;
    
    if (blogPosts.find(p => p.id === editingPost.id)) {
        setBlogPosts(blogPosts.map(p => p.id === editingPost.id ? editingPost : p));
    } else {
        setBlogPosts([...blogPosts, editingPost]);
    }
    setEditingPost(null);
  }
  
  const handleNewPost = () => {
      setEditingPost({ id: Date.now().toString(), slug: '', title: '', author: '', date: new Date().toISOString().split('T')[0], imageUrl: 'https://picsum.photos/seed/new/800/400', excerpt: '', content: '', tags: [] });
  }

  if (editingPost) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {editingPost.id.length > 5 ? 'Edit Post' : 'New Post'}
            </h1>
            <form onSubmit={handleSave} className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                 <input type="text" value={editingPost.title} onChange={e => setEditingPost({...editingPost, title: e.target.value})} placeholder="Title" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                 <input type="text" value={editingPost.slug} onChange={e => setEditingPost({...editingPost, slug: e.target.value})} placeholder="Slug" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                 <textarea value={editingPost.excerpt} onChange={e => setEditingPost({...editingPost, excerpt: e.target.value})} placeholder="Excerpt" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                 <textarea value={editingPost.content} rows={10} onChange={e => setEditingPost({...editingPost, content: e.target.value})} placeholder="Content" className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                 <div className="flex gap-4">
                    <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">Save Post</button>
                    <button type="button" onClick={() => setEditingPost(null)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-opacity-90">Cancel</button>
                 </div>
            </form>
        </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Manage Blog Posts</h1>
        <button onClick={handleNewPost} className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
            Add New Post
        </button>
      </div>
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {blogPosts.map((post) => (
              <tr key={post.id} className="text-gray-800 dark:text-gray-200">
                <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.author}</td>
                <td className="px-6 py-4 whitespace-nowrap">{post.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => setEditingPost(post)} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-900 dark:hover:text-indigo-200">Edit</button>
                  <button onClick={() => handleDelete(post.id)} className="ml-4 text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogManager;
