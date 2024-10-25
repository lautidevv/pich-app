'use client';

import { useState } from 'react';
import { trpc } from '@/utils/trpc';
import { SearchFilters } from '@/components/SearchFilters';
import { InfluencerList } from '@/components/InfluencerList';

export default function Home() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    platform: '',
    category: '',
  });

  const { data: influencers, isLoading } = trpc.searchInfluencers.useQuery(filters);

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Influencer Search</h1>
        <SearchFilters onSearch={setFilters} />
        <InfluencerList influencers={influencers || []} isLoading={isLoading} />
      </div>
    </main>
  );
}