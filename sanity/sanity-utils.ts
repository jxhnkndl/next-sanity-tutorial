import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId } from './env';

import { Project } from '@/types/project';

// Create client for reading data out of CMS
// This funtion will RETURN a promise that resolves to an array of Projects
// Defining the type here will make getProjects() usable anywhere without
export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });

  // Fetch data from the CMS using the GROQ query language
  // * means fetch all
  // [_type == 'project] means fetch all documents in the project collection
  // The "slug" is its own data type that contains the relevant data in the .current property
  // "image" is also its own data type with an asset property that stores the image URL
  // Using the -> means to extract a certain property from the object

  return client.fetch(
    groq`*[_type == 'project']{
      _id,
      createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}
