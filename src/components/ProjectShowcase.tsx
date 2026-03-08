import { ArrowRight, Tag } from 'lucide-react';
import { projects } from '../data/products';

export default function ProjectShowcase() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-stone-500 text-sm font-semibold tracking-widest uppercase mb-3 block">Project Gallery</span>
            <h2 className="font-heading font-bold text-charcoal-900 text-4xl md:text-5xl leading-tight">
              Real Projects,<br />Real Results
            </h2>
            <p className="text-charcoal-500 mt-4 text-lg max-w-xl">
              From the bush to the beach, see how BuildersCo materials come to life across Australia.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-charcoal-700 font-semibold hover:text-charcoal-900 transition-colors group shrink-0"
          >
            View all projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href="#"
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${index === 0 ? 'md:row-span-2 md:col-span-1' : ''}`}
              style={{ minHeight: index === 0 ? '520px' : '280px' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.type}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-white font-bold text-lg leading-snug mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.materials.map((mat) => (
                    <span key={mat} className="inline-flex items-center gap-1 text-xs text-white/75 bg-white/10 border border-white/10 px-2 py-0.5 rounded-full">
                      <Tag size={9} />
                      {mat}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-200 group-hover:text-white transition-colors">
                  View project
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
