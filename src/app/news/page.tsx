'use client';

import { useState } from 'react';
import { Input ,Button} from '@/components';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'New Water Treatment Technology',
    date: '2024-01-15',
    category: 'Technology',
    summary: 'Introducing our latest water treatment technology that revolutionizes...',
    image: '/news/tech-1.jpg'
  },
  {
    id: 2,
    title: 'Environmental Impact Report',
    date: '2024-01-10',
    category: 'Environment',
    summary: 'Recent studies show significant improvements in water quality...',
    image: '/news/env-1.jpg'
  },
];

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md max-w-xs"
        >
          <option value="all">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Environment">Environment</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map(news => (
          <div key={news.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Image placeholder */}
              <div className="w-full h-48 bg-gray-200"></div>
            </div>
            <div className="p-4">
              <span className="text-sm text-blue-600">{news.category}</span>
              <h2 className="text-xl font-semibold mt-2">{news.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{news.date}</p>
              <p className="mt-2 text-gray-700">{news.summary}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {}}
              >
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}