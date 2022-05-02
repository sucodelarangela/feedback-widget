interface ButtonProps {
  text: string;
  //text?: string; -> o "?" deixa como opcional
}

function Button(props: ButtonProps){
  console.log(props.text)
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text}</button>
}

function App() {
  return (
  <div className="flex gap-2">
    <h1>Hello, World</h1>
    <Button text='Enviar'/>
    <Button text='Cancelar'/>
    <Button text='12345'/>
  </div>
  )
}

export default App
