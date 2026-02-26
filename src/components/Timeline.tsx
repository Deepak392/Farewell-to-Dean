import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { timelineData } from '../data/content';
import SectionHeading from './SectionHeading';

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-32 px-6 relative bg-navy-900" id="journey">
      <div className="max-w-4xl mx-auto">
        <SectionHeading 
          title="The Journey" 
          subtitle="Sixteen years of unwavering dedication and transformative leadership."
        />

        <div className="relative mt-20" ref={containerRef}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 to-gold-600 -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-24">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-navy-900 border-2 border-gold-400 -translate-x-1/2 z-10" />

                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`w-full pl-12 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                  >
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 group">
                      <span className="text-gold-400 font-mono text-lg mb-2 block">{item.year}</span>
                      <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold-300 transition-colors">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
