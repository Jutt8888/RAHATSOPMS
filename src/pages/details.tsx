import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FOUNDERS_LEGACY } from '../content';

export default function FounderPage() {
  const { slug } = useParams();
  const founder = FOUNDERS_LEGACY.find((f) => f.slug === slug);

  if (!founder) return <div className="pt-32 text-center text-primaryDark">Profile not found.</div>;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-8">
            <img src={founder.image} alt={founder.name} className="w-full rounded-3xl shadow-2xl border border-primary/10" />
            
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 space-y-4">
              <h4 className="font-bold uppercase tracking-widest text-xs">Professional Profile</h4>
              <div className="flex flex-wrap gap-2">
                {founder.profession?.map((p: string) => (
                  <span key={p} className="text-xs bg-white px-3 py-1 rounded-full border border-primary/10">{p}</span>
                ))}
              </div>
              <div className="text-sm space-y-2 pt-2">
                <p><strong>Born:</strong> {founder.birth?.year} · {founder.birth?.place}</p>
                <p><strong>Father:</strong> {founder.father}</p>
                <p><strong>Passed:</strong> {founder.death?.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8 space-y-16">
          <div className="border-b border-primary/10 pb-10">
            <span className="text-secondary uppercase tracking-[0.25em] text-xs font-semibold">{founder.tagline}</span>
            <h1 className="font-display text-5xl mt-3 text-primaryDark">{founder.name}</h1>
            <h2 className="text-2xl text-primary/70 font-display mt-2">{founder.urduName}</h2>
            <p className="text-xl text-primary mt-4 italic">{founder.title}</p>
          </div>

          <div className="space-y-12">
            <section><h2 className="text-2xl font-display mb-4">Introduction</h2><p className="leading-relaxed">{founder.intro}</p></section>
            
            <section className="bg-primary/5 p-8 rounded-3xl">
              <h2 className="text-2xl font-display mb-6">Education & Training</h2>
              <ul className="space-y-3">
                {founder.education?.map((item: string) => <li key={item} className="flex gap-2 text-sm"><span>✦</span> {item}</li>)}
              </ul>
            </section>

            {/* Mentor Section */}
            <section className="border-l-4 border-primary/20 pl-6">
              <h2 className="text-2xl font-display mb-2">Mentor</h2>
              <h3 className="font-bold text-lg">{founder.mentor?.name}</h3>
              <p className="text-sm text-primary/70 mb-2">Since {founder.mentor?.since} ({founder.mentor?.duration})</p>
              <p className="text-sm italic">{founder.mentor?.description}</p>
            </section>

            <section><h2 className="text-2xl font-display mb-4">Research Journey</h2><p>{founder.researchJourney}</p></section>

            <section>
              <h2 className="text-2xl font-display mb-6">Major Research Questions</h2>
              <ul className="grid gap-3">
                {founder.majorQuestions?.map((q: string) => <li key={q} className="border-b border-primary/10 pb-2 text-sm">• {q}</li>)}
              </ul>
            </section>

            <section className="bg-secondary/10 p-8 rounded-3xl">
              <h2 className="text-2xl font-display mb-3">{founder.majorContribution?.title}</h2>
              <p className="text-sm italic mb-2">Introduced: {founder.majorContribution?.year}</p>
              <p>{founder.majorContribution?.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-6">Published Works & Journals</h2>
              <p className="mb-6 text-sm">{founder.publications}</p>
              <div className="grid gap-4">
                {founder.books?.map((b: any) => (
                  <div key={b.title} className="p-5 border rounded-2xl">
                    <h3 className="font-bold text-primaryDark">{b.title}</h3>
                    <p className="text-sm mt-1">{b.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Students & Supporters */}
            <section className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-display mb-4">Notable Students</h2>
                <div className="flex flex-wrap gap-2">
                  {founder.students?.map((s: string) => <span key={s} className="bg-primary/5 text-xs px-3 py-1 rounded-full">{s}</span>)}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-display mb-4">Supporters</h2>
                <div className="flex flex-wrap gap-2">
                  {founder.supporters?.map((s: string) => <span key={s} className="bg-secondary/5 text-xs px-3 py-1 rounded-full">{s}</span>)}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display mb-4">Legacy & Farewell</h2>
              <p className="leading-relaxed mb-4">{founder.legacy}</p>
              <p className="italic text-sm text-primary/80 mb-6">{founder.deathSummary}</p>
              <blockquote className="border-l-4 border-secondary pl-6 italic text-lg text-primaryDark">
                "{founder.quote}"
              </blockquote>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}