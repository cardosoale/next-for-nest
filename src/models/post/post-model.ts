import { PublicUserDto } from '@/lib/user/schemas';

export type PostModel = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
};

export type PostModelFromApi = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string;
  published: boolean;
  created_at: string;
  updated_at: string;
  author: PublicUserDto;
};
