'use client';

import { useState } from 'react';

interface SearchFiltersProps {
  onSearch: (filters: {
    searchTerm: string;
    platform: string;
    category: string;
  }) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (
    type: 'searchTerm' | 'platform' | 'category',
    value: string
  ) => {
    switch (type) {
      case 'searchTerm':
        setSearchTerm(value);
        break;
      case 'platform':
        setPlatform(value);
        break;
      case 'category':
        setCategory(value);
        break;
    }

    onSearch({
      searchTerm: type === 'searchTerm' ? value : searchTerm,
      platform: type === 'platform' ? value : platform,
      category: type === 'category' ? value : category,
    });
  };

  return (
    <div className="space-y-4 mb-8">
      <input
        type="text"
        placeholder="Search influencers..."
        className="w-full p-2 border rounded"
        value={searchTerm}
        onChange={(e) => handleChange('searchTerm', e.target.value)}
      />
      
      <div className="flex gap-4">
        <select
          className="p-2 border rounded"
          value={platform}
          onChange={(e) => handleChange('platform', e.target.value)}
        >
          <option value="">All Platforms</option>
          <option value="Instagram">Instagram</option>
          <option value="TikTok">TikTok</option>
          <option value="YouTube">YouTube</option>
        </select>
        
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => handleChange('category', e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Fashion">Fashion</option>
          <option value="Tech">Tech</option>
        </select>
      </div>
    </div>
  );
}