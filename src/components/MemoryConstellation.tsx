import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { memoriesData } from '../data/content';
import SectionHeading from './SectionHeading';
import { X } from 'lucide-react';

export default function MemoryConstellation() {
  const [selectedMemory, setSelectedMemory] = useState<typeof memoriesData[0] | null>(null);

  return (
    <section className="py-32 px-6 relative bg-navy-800 overflow-hidden">
      {/* Background stars/particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading 
          title="Constellation of Memories" 
          subtitle="Messages from the countless lives you've touched. Click a star to read."
        />

        <div className="relative h-[600px] mt-16 border border-white/5 rounded-3xl bg-navy-900/50 backdrop-blur-md">
          {memoriesData.map((memory) => (
            <motion.button
              key={memory.id}
              className="absolute w-6 h-6 -ml-3 -mt-3 rounded-full bg-gold-400/20 flex items-center justify-center group cursor-pointer"
              style={{ top: `${memory.y}%`, left: `${memory.x}%` }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
              onClick={() => setSelectedMemory(memory)}
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 shadow-[0_0_15px_rgba(252,211,77,0.8)] group-hover:scale-150 transition-transform duration-300" />
              
              {/* Tooltip hint */}
              <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-xs text-white/60 bg-black/50 px-2 py-1 rounded">
                From {memory.author.split(',')[0]}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-navy-900/80 backdrop-blur-xl"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-lg w-full bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors cursor-pointer"
                onClick={() => setSelectedMemory(null)}
              >
                <X size={24} />
              </button>
              
              <div className="text-gold-400 mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.603C18.805 14.285 20.617 12.285 20.617 9.885C20.617 7.085 18.331 4.8 15.531 4.8C12.731 4.8 10.445 7.085 10.445 9.885C10.445 10.203 10.445 10.52 10.525 10.837L14.017 21ZM3.571 21L5.965 14.603C8.359 14.285 10.171 12.285 10.171 9.885C10.171 7.085 7.885 4.8 5.085 4.8C2.285 4.8 0 7.085 0 9.885C0 10.203 0 10.52 0.08 10.837L3.571 21Z" />
                </svg>
              </div>
              
              <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-8">
                "{selectedMemory.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-900 font-bold">
                  {selectedMemory.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{selectedMemory.author}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
