import { PortableTextBlock } from "sanity";

// Define the shape of the project type
export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  // Rich text content is stored as an array of portable text blocks
  content: PortableTextBlock[];
}