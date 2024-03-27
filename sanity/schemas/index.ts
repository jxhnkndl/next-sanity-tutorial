import { type SchemaTypeDefinition } from 'sanity';
import project from './project-schema';

// Consolidate all schemas into a single array to import into the Sanity config
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project],
};
