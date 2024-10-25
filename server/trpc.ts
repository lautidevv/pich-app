import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const mockInfluencers = [
  {
    id: 1,
    name: 'John Doe',
    platform: 'Instagram',
    followers: 100000,
    category: 'Lifestyle',
  },
  {
    id: 2,
    name: 'Jane Smith',
    platform: 'TikTok',
    followers: 500000,
    category: 'Fashion',
  },
  // Add more mock data as needed
];

export const appRouter = t.router({
  searchInfluencers: t.procedure
    .input(
      z.object({
        searchTerm: z.string(),
        platform: z.string(),
        category: z.string(),
      })
    )
    .query(({ input }) => {
      let results = [...mockInfluencers];

      if (input.searchTerm) {
        results = results.filter((inf) =>
          inf.name.toLowerCase().includes(input.searchTerm.toLowerCase())
        );
      }

      if (input.platform) {
        results = results.filter((inf) => inf.platform === input.platform);
      }

      if (input.category) {
        results = results.filter((inf) => inf.category === input.category);
      }

      return results;
    }),
});

export type AppRouter = typeof appRouter;