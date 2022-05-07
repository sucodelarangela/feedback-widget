import html2canvas from 'html2canvas';
import {Camera} from 'phosphor-react';
import {useState} from 'react';
import {Loading} from './Loading';

export function ScreenshotButton() {
  // para adicionar ícone de loading enquanto a foto está sendo tirada, criaremos este useState
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    // quando clicar no botão de screenshot, atribuiremos true ao setTakingScreenshot, que adicionará o loading icon (novo component)
    setIsTakingScreenshot(true);

    // usando a lib html2canvas. O ! no final do querySelector é para forçar a função a nunca retornar null
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    console.log(base64image);

    // Após tirar o screenshot removeremos o loading icon. As informações da foto deverão ir para o FeedbackContent (componente pai)
    setIsTakingScreenshot(false);
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {/* Se estiver tirando a screenshot, mostra o loading, senão mostra o ícone de câmera */}
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
