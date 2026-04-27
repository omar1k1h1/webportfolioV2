import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ProjectCard({ title, description, detailPath, website, coverImage, mediaLabel }) {
  return (
    <article className="group rounded-2xl border border-accent/25 bg-white p-5 transition-colors hover:border-accent/55">
      <img
        src={coverImage}
        alt={mediaLabel}
        className="mb-4 h-auto w-full rounded-xl border border-accent/20 object-cover"
        loading="lazy"
      />
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold leading-tight text-textStrong">{title}</h3>
          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-deep"
            >
              Visit
              <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
        <p className="text-sm leading-relaxed text-text">{description}</p>
        <Link
          to={detailPath}
          className="inline-flex items-center gap-1 text-sm font-semibold text-textStrong underline decoration-accent/60 underline-offset-4 hover:text-accent-deep"
        >
          Learn More
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
