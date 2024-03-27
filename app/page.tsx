// Import utility function for fetching project data from CMS
import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  // Fetch all projects from CMS on the server
  const projects = await getProjects();

  return (
    <main>
      {projects.map((project) => (
        <div key={project._id}>{project.name}</div>
      ))}
    </main>
  );
}
