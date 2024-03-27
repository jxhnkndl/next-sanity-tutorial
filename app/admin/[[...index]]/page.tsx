'use client'

// This route is where the Sanity Studio gets served
// It has to be a client component because it requires a client interaction

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}