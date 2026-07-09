/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  subCategory?: string;
  tags?: string[];
  options?: string[];
  image?: string;
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  content: string[];
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'ambiance' | 'plating' | 'lifestyle' | 'chef';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  timeSlot: string;
  image: string;
}
