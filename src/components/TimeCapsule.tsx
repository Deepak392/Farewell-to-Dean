import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock } from 'lucide-react';

export default function TimeCapsule() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <section className="py-40 px-6 bg-navy-900 relative flex items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <AnimatePresence mode="wait">
          {!isUnlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full border border-gold-400/30 animate-ping" style={{ animationDuration: '3s' }} />
                <Lock className="text-gold-400" size={32} />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                One Last Message Awaits...
              </h2>
              <p className="text-white/60 mb-12 max-w-lg mx-auto">
                A digital time capsule containing the collective gratitude of the entire university community.
              </p>
              
              <button
                onClick={() => setIsUnlocked(true)}
                className="group relative px-8 py-4 bg-gold-500 text-navy-900 font-medium rounded-full overflow-hidden transition-transform hover:scale-105 cursor-pointer"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Open the Future <Unlock size={18} />
                </span>
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="relative"
            >
              {/* Confetti / Particles effect */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ 
                      opacity: 1, 
                      x: 0, 
                      y: 0, 
                      scale: 0 
                    }}
                    animate={{ 
                      opacity: 0,
                      x: (Math.random() - 0.5) * 500,
                      y: (Math.random() - 0.5) * 500,
                      scale: Math.random() * 2 + 1
                    }}
                    transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-gold-400"
                  />
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 1 }}
                className="p-12 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-50" />
                
                <h3 className="text-4xl md:text-6xl font-serif text-gold-400 mb-8 leading-tight">
                  "Your legacy will continue in every student you inspired."
                </h3>
                <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                  Leaders like you don't just build institutions; they build people. The foundations you've laid will support generations of dreamers, innovators, and leaders to come.
                </p>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-gold-300 font-serif italic text-lg">
                    Thank you for everything, Sir.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
