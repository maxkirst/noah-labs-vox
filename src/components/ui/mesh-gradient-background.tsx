"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

// Noah Labs Markenpalette statt der generischen Demo-Farben (Teal/Peach/Mint):
// nl-surface, nl-taupe-200, nl-sage-300, nl-taupe-700, nl-sage-600.
const brandColors = ["#F5F8F7", "#ECD6CA", "#ADC7C2", "#956651", "#648F86"]

export interface MeshGradientBackgroundProps {
  className?: string
}

/**
 * Animierter Mesh-Gradient-Hintergrund (via @paper-design/shaders-react),
 * adaptiert von einer Hero-Vorlage. Bewusst deutlich ruhiger eingestellt
 * als die Vorlage (niedrige Distortion/Swirl, langsame Speed, kein Grain) –
 * passend zu MOTION_INTENSITY 6/10 aus dem Briefing. Ein heller Schleier
 * darüber sichert genug Kontrast für den Text. Läuft nur innerhalb des
 * Containers, in dem die Komponente eingesetzt wird (kein `fixed`
 * Full-Screen-Hintergrund wie im Original). Bei `prefers-reduced-motion`
 * steht der Gradient still (`speed={0}`).
 */
export function MeshGradientBackground({ className }: MeshGradientBackgroundProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <MeshGradient
        className="h-full w-full"
        colors={brandColors}
        distortion={0.4}
        swirl={0.25}
        speed={shouldReduceMotion ? 0 : 0.15}
        grainMixer={0}
        grainOverlay={0}
      />
      <div className="absolute inset-0 bg-white/55" />
    </div>
  )
}

export default MeshGradientBackground
