import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const projectId = 'f3xjmlbv';
export const dataset = 'production';
export const apiVersion = '2024-06-04'; // today's date

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN in production for faster response
});

const builder = imageUrlBuilder(client);

// Helper function to get image URLs from Sanity image objects
export function urlFor(source: any) {
  return builder.image(source);
}

// Interfaces
export interface Cake {
  _id: string;
  name: string;
  slug: { current: string };
  image: any;
  description: string;
  price: number;
  weightOptions: string[];
  category: string;
}

// Queries
export async function getFeaturedCakes(): Promise<Cake[]> {
  return client.fetch(`*[_type == "cake"][0...4] | order(_createdAt desc)`);
}

export async function getAllCakes(): Promise<Cake[]> {
  return client.fetch(`*[_type == "cake"] | order(_createdAt desc)`);
}

export async function getCakeById(id: string): Promise<Cake | null> {
  return client.fetch(`*[_type == "cake" && _id == $id][0]`, { id });
}
