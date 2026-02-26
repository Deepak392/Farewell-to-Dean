import Hero from './components/Hero';
import Timeline from './components/Timeline';
import MemoryConstellation from './components/MemoryConstellation';
import Gallery from './components/Gallery';
import ImpactDashboard from './components/ImpactDashboard';
import TimeCapsule from './components/TimeCapsule';
import Farewell from './components/Farewell';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <main className="bg-navy-900 min-h-screen text-white selection:bg-gold-500/30 selection:text-gold-200">
      <AudioPlayer />
      <Hero />
      <Timeline />
      <MemoryConstellation />
      <Gallery />
      <ImpactDashboard />
      <TimeCapsule />
      <Farewell />
    </main>
  );
}

