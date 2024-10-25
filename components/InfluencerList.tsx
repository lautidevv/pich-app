'use client';

interface Influencer {
  id: number;
  name: string;
  platform: string;
  followers: number;
  category: string;
}

interface InfluencerListProps {
  influencers: Influencer[];
  isLoading: boolean;
}

export function InfluencerList({ influencers, isLoading }: InfluencerListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4">
      {influencers?.map((influencer) => (
        <div
          key={influencer.id}
          className="p-4 border rounded shadow hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold">{influencer.name}</h2>
          <div className="text-gray-600">
            <p>Platform: {influencer.platform}</p>
            <p>Category: {influencer.category}</p>
            <p>Followers: {influencer.followers.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}