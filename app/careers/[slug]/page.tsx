import { notFound } from 'next/navigation';
import Image from 'next/image';
import { jobOpenings } from '@/src/data';
import { Briefcase, MapPin, Clock, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import JobDetailClient from '@/components/careers/JobDetailClient';

// Set dynamic to force-static for static export
export const dynamic = 'force-static';

// Generate static params for all job openings
export function generateStaticParams() {
  return jobOpenings.map((job) => ({
    slug: job.slug,
  }));
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  // Find the job based on the slug
  const job = jobOpenings.find((job) => job.slug === params.slug);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // If job not found, return 404
  if (!job) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center">
        <Image
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
          alt={job.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-[#214842]/70"></div>
        <div className="relative z-10 container-custom text-white">
          <h1 className="mb-4">{job.title}</h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="border-b">
        <div className="container-custom">
          <Breadcrumbs
            items={[
              { label: 'Careers', href: '/careers' },
              { label: job.title, href: `/careers/${job.slug}`, isCurrent: true },
            ]}
          />
        </div>
      </section>

      {/* Job Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-1">
              <Briefcase size={18} className="text-[#258F67]" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={18} className="text-[#258F67]" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={18} className="text-[#258F67]" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={18} className="text-[#258F67]" />
              <span>Posted: {formatDate(job.postedDate)}</span>
            </div>
          </div>

          {/* Pass the job data to the client component */}
          <JobDetailClient job={job} />
        </div>
      </section>
    </>
  );
}
