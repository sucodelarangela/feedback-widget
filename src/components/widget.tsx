import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export function Widget() {
  //const [state value, new state value]
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className='absolute bottom-5 right-5'>
      {/* {isWidgetOpen ? <p>Hello, world</p> : null} 
      The line of code above can be shortened like this: */}
      {isWidgetOpen && <p>Hello, world</p>}
      
      <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6 "/>

        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
          <span className='pl-3'></span>
          Feedback</span>
      </button>
    </div>
  )
}
