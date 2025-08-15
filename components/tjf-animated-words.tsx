"use client"

import { useState, useEffect, useCallback } from "react"

interface AnimatedWordProps {
  initial: string
  restOfWord: string
  description: string
  startDelay: number // Retraso antes de que comience la animación de esta palabra
  onAnimationComplete: () => void // Callback para notificar al padre
}

function AnimatedWord({ initial, restOfWord, description, startDelay, onAnimationComplete }: AnimatedWordProps) {
  const [animationPhase, setAnimationPhase] = useState(0) // 0: oculto, 1: inicial, 2: palabra revelándose, 3: descripción
  const [revealedWord, setRevealedWord] = useState("")

  useEffect(() => {
    // Resetear el estado para la nueva animación (importante para la repetición)
    setAnimationPhase(0)
    setRevealedWord("")

    let initialTimer: NodeJS.Timeout
    let descriptionTimer: NodeJS.Timeout
    const charTimers: NodeJS.Timeout[] = []

    const startAnimation = () => {
      // Fase 1: Mostrar inicial
      initialTimer = setTimeout(() => {
        setAnimationPhase(1)

        // Fase 2: Revelar el resto de la palabra letra por letra
        restOfWord.split("").forEach((char, index) => {
          const charTimer = setTimeout(
            () => {
              setRevealedWord((prev) => prev + char)
              if (index === restOfWord.length - 1) {
                // Una vez que la palabra está completa, avanzamos a la fase 2 (palabra revelada)
                setAnimationPhase(2)
              }
            },
            200 + index * 80,
          ) // Retraso para cada carácter
          charTimers.push(charTimer)
        })

        // Fase 3: Mostrar la descripción después de que la palabra esté completamente revelada
        descriptionTimer = setTimeout(
          () => {
            setAnimationPhase(3)
            onAnimationComplete() // Notificar al padre que esta animación ha terminado
          },
          200 + restOfWord.length * 80 + 300,
        ) // Después de todos los caracteres + pequeña pausa
      }, startDelay)
    }

    startAnimation()

    return () => {
      clearTimeout(initialTimer)
      clearTimeout(descriptionTimer)
      charTimers.forEach(clearTimeout)
    }
  }, [startDelay, restOfWord, onAnimationComplete]) // Dependencias para re-ejecutar el efecto

  return (
    <div className="flex flex-col items-start gap-0">
      <div className="flex items-center gap-2">
        <div
          className={`text-6xl font-extrabold text-yellow-700 leading-none transition-opacity duration-300 ${animationPhase >= 1 ? "opacity-100" : "opacity-0"}`}
        >
          {initial}
        </div>
        <div className="text-3xl font-bold text-black">{revealedWord}</div>
      </div>
      <p
        className={`text-gray-600 text-base italic ml-16 transition-opacity duration-500 ${animationPhase >= 3 ? "opacity-100" : "opacity-0"}`}
      >
        {description}
      </p>
    </div>
  )
}

export function TJFAnimatedWords() {
  const [animationCycle, setAnimationCycle] = useState(0) // Para forzar la repetición
  const [completedWordsCount, setCompletedWordsCount] = useState(0)

  const wordsData = [
    {
      initial: "T",
      restOfWord: "écnica",
      description: "Construimos con precisión, aplicando métodos modernos y oficio en cada detalle.",
    },
    {
      initial: "J",
      restOfWord: "erarquía",
      description: "Un equipo bien organizado, con roles claros que garantizan eficiencia y calidad.",
    },
    {
      initial: "F",
      restOfWord: "undamento",
      description: "Obras pensadas desde la base, con criterio técnico y solidez estructural.",
    },
  ]

  const handleWordAnimationComplete = useCallback(() => {
    setCompletedWordsCount((prev) => prev + 1)
  }, [])

  useEffect(() => {
    if (completedWordsCount === wordsData.length) {
      // Todas las palabras han terminado su animación
      const totalAnimationDuration =
        wordsData.length * 1500 + (200 + wordsData[wordsData.length - 1].restOfWord.length * 80 + 300)
      const repeatDelay = 2000 // 2 segundos de retraso antes de repetir

      const resetTimer = setTimeout(() => {
        setAnimationCycle((prev) => prev + 1) // Incrementa la clave para forzar el re-render
        setCompletedWordsCount(0) // Reinicia el contador
      }, repeatDelay)

      return () => clearTimeout(resetTimer)
    }
  }, [completedWordsCount, wordsData.length])

  return (
    <div className="flex flex-col justify-center space-y-2">
      {wordsData.map((word, index) => (
        <AnimatedWord
          key={`${word.initial}-${animationCycle}`} // Usar animationCycle en la clave para forzar re-render
          initial={word.initial}
          restOfWord={word.restOfWord}
          description={word.description}
          startDelay={index * 1500} // Escalonar el inicio de la animación de cada palabra
          onAnimationComplete={handleWordAnimationComplete}
        />
      ))}
    </div>
  )
}
