import { GitBranch, Link, Mail } from 'lucide-react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import LanguageTag from './components/LanguageTag'
import ProjectCard from './components/ProjectCard'
import { projectsBySlug, projectsData } from './data/projectsData'

const languages = [
  'English (C2)',
  'Arabic (Native)',
  'Spanish (C1-B2)',
  'Mandarin (A2-B1)',
  'French (A2-B1)',
]

function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border bg-page/95">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#about" className="text-sm font-semibold tracking-wide text-textStrong">
            omaralhusayn.com
          </a>
          <ul className="flex items-center gap-5 text-sm font-medium text-textStrong">
            <li>
              <a className="transition-colors hover:text-accent-deep" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-accent-deep" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-accent-deep" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20">
        <section id="about" className="scroll-mt-28 border-b border-border pb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Portfolio
          </p>
          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-textStrong sm:text-6xl">
            Omar Alhusayn
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 sm:text-lg">
            I&apos;m 18, self-taught, and still learning every day while building
            hardware and software projects.
          </p>

          <div className="mt-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.17em] text-textStrong">
              Languages
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {languages.map((language) => (
                <LanguageTag key={language} label={language} />
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 border-b border-border py-16">
          <div className="mb-10 flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
              Work
            </p>
            <h2 className="text-3xl font-black tracking-tight text-textStrong sm:text-4xl">
              Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.shortDescription}
                website={project.website}
                detailPath={`/projects/${project.slug}`}
                mediaLabel={`${project.title} cover image`}
                coverImage={project.coverImage}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-textStrong sm:text-4xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 sm:text-lg">
            Open to collaborations, freelance work, and ambitious ideas.
          </p>

          <ul className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <li>
              <a
                href="https://github.com/omar1k1h1"
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-semibold text-textStrong transition hover:border-accent hover:bg-accent-soft"
              >
                <GitBranch size={17} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omaralhusayn/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-semibold text-textStrong transition hover:border-accent hover:bg-accent-soft"
              >
                <Link size={17} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:omaralhusayn@gmail.com"
                aria-label="Send an email"
                className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-accent/40 px-5 py-3 text-sm font-semibold text-textStrong transition hover:border-accent hover:bg-accent-soft"
              >
                <Mail size={17} />
                Email
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

function ProjectPage() {
  const { slug } = useParams()
  const project = projectsBySlug[slug]

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border bg-page/95">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="text-sm font-semibold tracking-wide text-textStrong">
            omaralhusayn.com
          </a>
          <a href="/#projects" className="text-sm font-medium text-textStrong hover:text-accent-deep">
            Back to Projects
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-16">
        <section className="border-b border-border pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Learn More
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-textStrong sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 sm:text-lg">
            {project.description}
          </p>
          {project.website ? (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center rounded-full border border-accent/45 px-5 py-2.5 text-sm font-semibold text-textStrong transition hover:bg-accent-soft"
            >
              Visit Website
            </a>
          ) : null}
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black tracking-tight text-textStrong">Media</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {project.videos.map((video) => (
              <article key={video.src} className="rounded-2xl border border-accent/25 bg-white p-4">
                <video
                  className="h-auto w-full rounded-xl border border-accent/20"
                  controls
                  preload="metadata"
                  aria-label={video.label}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-page text-text antialiased">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
