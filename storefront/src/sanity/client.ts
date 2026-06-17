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
export interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  image: any;
  description: string;
  price: number;
  sizeOptions: string[];
  category: string;
}

// Queries
export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"][0...4] | order(_createdAt desc)`);
}

export async function getAllProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "product"] | order(_createdAt desc)`);
}

export async function getProductById(id: string): Promise<Product | null> {
  return client.fetch(`*[_type == "product" && _id == $id][0]`, { id });
}
