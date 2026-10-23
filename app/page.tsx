'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useSection } from '@/hooks/useSection'
import { useCommandPalette } from '@/hooks/useCommandPalette'
import Sidebar from '@/components/Sidebar'
import MobileNav from '@/components/MobileNav'
import CommandPalette from '@/components/CommandPalette'
import WorkSection from '@/components/sections/WorkSection'
import AIJourneySection from '@/components/sections/AIJourneySection'
import StackSection from '@/components/sections/StackSection'
import BioSection from '@/components/sections/BioSection'
import ContactSection from '@/components/sections/ContactSection'

const sectionVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut' } },
  exit: { opacity: 0, y: -4, transition: { duration: 0.1 } },
}

export default function Page() {
  const { active, setActive } = useSection()
  const { open: paletteOpen, setOpen: setPaletteOpen } = useCommandPalette()

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-bg">
      {/* Sidebar — desktop only */}
      <Sidebar active={active} setActive={setActive} onOpenPalette={() => setPaletteOpen(true)} />

      {/* Main content */}
      <main className="flex-1 min-w-0 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full w-full"
          >
            {active === 'work' && <WorkSection />}
            {active === 'ai-journey' && <AIJourneySection />}
            {active === 'stack' && <StackSection />}
            {active === 'bio' && <BioSection />}
            {active === 'contact' && <ContactSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile bottom nav */}
      <MobileNav active={active} setActive={setActive} />

      {/* Command palette */}
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} setActive={setActive} />
    </div>
  )
}
