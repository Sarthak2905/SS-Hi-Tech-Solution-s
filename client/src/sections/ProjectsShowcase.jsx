import { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Card from '../components/Card.jsx';
import Badge from '../components/Badge.jsx';
import Button from '../components/Button.jsx';
import { projects, projectCategories } from '../data/projects.js';
import { cn } from '../utils/cn.js';
import SnapRow, { SnapItem } from '../components/SnapRow.jsx';

const statusTone = { Completed: 'accent', 'In Progress': 'warning', Concept: 'neutral' };

function ProjectVisual({ project }) {
    if (project.coverImage) {
        return (
            <img
                src={project.coverImage}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="aspect-[16/10] w-full rounded-lg object-cover"
            />
        );
    }
    return (
        <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-lg border border-ink-700 bg-ink-950">
            <div aria-hidden="true" className="bg-grid absolute inset-0" />
            <span className="relative text-xs font-medium text-paper-muted">Screenshot coming soon</span>
        </div>
    );
}

export function ProjectCard({ project }) {
    return (
        <Card interactive className="relative flex h-full flex-col gap-4">
            <ProjectVisual project={project} />
            <div className="flex flex-wrap items-center gap-2">
                <Badge tone={statusTone[project.projectStatus] || 'neutral'}>{project.projectStatus}</Badge>
                <Badge>{project.category}</Badge>
            </div>
            <h3 className="text-xl font-semibold">
                <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:content-[''] hover:text-accent">
                    {project.title}
                </Link>
            </h3>
            <p className="text-paper-muted">{project.shortDescription}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Technologies">
                {project.technologies.map((t) => (
                    <li key={t} className="rounded-md bg-ink-800 px-2.5 py-1 text-xs text-paper-muted">
                        {t}
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default function ProjectsShowcase({ showHeading = true }) {
    const [category, setCategory] = useState('All');
    const visible = projects.filter((p) => category === 'All' || p.category === category);

    return (
        <Section>
            {showHeading && (
                <SectionHeading
                    eyebrow="Projects"
                    title="Selected work and prototypes"
                    description="Each project is labeled by its real status: completed, in progress, or concept."
                />
            )}

            {/* Phone: one scrollable row of chips. Larger screens: wraps. */}
            <div
                role="group"
                aria-label="Filter projects by category"
                className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {projectCategories.map((c) => (
                    <button
                        key={c}
                        type="button"
                        aria-pressed={category === c}
                        onClick={() => setCategory(c)}
                        className={cn(
                            'min-h-11 shrink-0 whitespace-nowrap rounded-full border px-5 text-sm font-medium transition-colors',
                            category === c
                                ? 'border-accent bg-accent text-black'
                                : 'border-ink-600 text-paper hover:border-accent hover:text-accent'
                        )}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {visible.length ? (
                <SnapRow label="Projects" className="mt-6 md:grid-cols-2">
                    {visible.map((p) => (
                        <SnapItem key={p.slug}>
                            <ProjectCard project={p} />
                        </SnapItem>
                    ))}
                </SnapRow>
            ) : (
                <p className="mt-8 text-paper-muted">No projects in this category yet.</p>
            )}

            <div className="mt-8">
                <Button to="/projects" variant="secondary" icon className="w-full sm:w-auto">
                    View All Projects
                </Button>
            </div>
        </Section>
    );
}