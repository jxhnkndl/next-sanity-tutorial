import Image from 'next/image';
import Link from 'next/link';

// Import utility function for fetching project data from CMS
import { getProjects } from '@/sanity/sanity-utils';

export default async function Home() {
  // Fetch all projects from CMS on the server
  const projects = await getProjects();

  console.log(projects);

  return (
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrabold'>
        Hello, I&apos;m{' '}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          J.K.
        </span>
        !
      </h1>

      <p className='mt-3 text-xl text-gray-600'>
        Hi everyone! Thanks for visiting my site.
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

      <div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            className='border-gray-500 border rounded-lg p-1'
            key={project._id}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='hover:scale-[1.05] transition-all object-cover rounded-lg border border-gray-500'
              />
            )}
            <div className='font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
