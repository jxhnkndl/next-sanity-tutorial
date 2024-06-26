// This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...index]]/page.tsx` route.

// The /admin/[[index]]/page.tsx ensures that any route including the admin endpoint redirects to the Sanity Studio

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schemas';

export default defineConfig({
  // This the URL where the embedded Sanity studio will live
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
