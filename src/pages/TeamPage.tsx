import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FOUNDERS_LEGACY } from '../content';
import { PageTransition } from "../components/PageTransition";
// Define container and item animations
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TeamPage() {
    return (
        <PageTransition>
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-display text-center mb-16 text-primaryDark"
                >
                    Our Legacy
                </motion.h1>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {FOUNDERS_LEGACY.map((founder) => (
                        <motion.div key={founder.slug} variants={item}>
                            <Link to={`/founder/${founder.slug}`}>
                                <div className="border border-primary/20 rounded-3xl p-8 hover:shadow-2xl transition-all bg-white group hover:-translate-y-2 duration-300">
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-32 h-32 rounded-full mb-6 object-cover shadow-md"
                                    />
                                    <h2 className="text-2xl font-bold text-primaryDark">{founder.name}</h2>
                                    <p className="text-secondary mt-2">{founder.tagline}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </PageTransition>
    );
}