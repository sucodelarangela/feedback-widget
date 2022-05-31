import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from '../../CloseButton'

// Quando importamos a função do elemento pai através de uma propriedade do componente, precisamos definir os props
interface FeedbackTypeStepProps {
    onFeedbackTypeChange: (type: FeedbackType) => void
    // a propriedade onFeedbackTypeChange recebe um tipo de feedback e não retorna nada
}

export function FeedbackTypeStep({onFeedbackTypeChange}: FeedbackTypeStepProps){
    return(
      <> 
        <header>
          <span className='text-xl leading-6'>Deixe seu feedback</span>
          <CloseButton/>
        </header>
        
        <div className="flex py-8 gap-2 w-full">

          {Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => onFeedbackTypeChange(key as FeedbackType)}>

                  <img src={value.image.source} alt={value.image.alt} />
                  <span>{value.title}</span>

              </button>
            )
          })}

        </div>
      </>
    )
}

/*

Object.entries(feedbackTypes) retorna um vetor (um array de arrays). Cada posição dentro do array traz dois índices: a chave do objeto e suas propriedades:

Object.entries(feedbackTypes) => 
  [
    ['BUG', {...}],
    ['IDEA', {...}],
    ['THOUGHT', {...}]
  ]

  O .map(item) serve para percorrer o vetor e trazer um item de lá. Podemos desestruturar esse "item", que ficaria dessa forma:
  .map({ key, value })

*/