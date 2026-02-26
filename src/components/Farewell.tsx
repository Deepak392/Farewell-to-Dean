import { motion } from 'motion/react';

export default function Farewell() {
  return (
    <section className="h-screen flex items-center justify-center bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 2 }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white/90 mb-8 tracking-wide">
            Farewell.
          </h2>
          <div className="w-24 h-px bg-gold-400 mx-auto mb-8 opacity-50" />
          <p className="text-xl md:text-2xl text-gold-300/80 font-light tracking-widest uppercase">
            From the Students of Sai University
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
