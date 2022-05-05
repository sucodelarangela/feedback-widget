import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Balão de pensamento'
    }
  }
}

// keyof retorna as chaves e typeof retorna a tipagem das propriedades
export type FeedbackType = keyof typeof feedbackTypes

// identificando o tipo de feedback que o usuário escolheu no clique
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }
  
  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

      {!feedbackType ? (
        // Se eu não tenho um tipo de feedback selecionado, mostra a div com os botões
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        // Se um tipo de feedback for selecionado, mostra o conteúdo equivalente
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestart={handleRestartFeedback} />
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ por <a className="underline underline-offset-2" href="https://angelacaldas.vercel.app" target='_blank'>Angela Caldas</a>
      </footer>
    </div>
  )
}