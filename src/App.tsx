interface ButtonProps {
  text: string;
  //text?: string; -> o "?" deixa como opcional
}

function Button(props: ButtonProps){
  console.log(props.text)
  return <button>{props.text}</button>
}

function App() {
  return (<div>
    <h1>Hello, World</h1>
    <Button text='Enviar'/>
    <Button text='Cancelar'/>
    <Button text='12345'/>
  </div>)
}

export default App
