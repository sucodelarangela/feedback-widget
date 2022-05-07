import html2canvas from 'html2canvas';
import {Camera, Trash} from 'phosphor-react';
import {useState} from 'react';
import {Loading} from './Loading';

// Vinculando com a chamada do componente em FeedbackContentStep
interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTaken
}: ScreenshotButtonProps) {
  // para adicionar ícone de loading enquanto a foto está sendo tirada, criaremos este useState
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    // quando clicar no botão de screenshot, atribuiremos true ao setTakingScreenshot, que adicionará o loading icon (novo component)
    setIsTakingScreenshot(true);

    // usando a lib html2canvas. O ! no final do querySelector é para forçar a função a nunca retornar null
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    // Manda a imagem para o componente pai
    onScreenshotTaken(base64image);

    // Após tirar o screenshot removeremos o loading icon. As informações da foto deverão ir para o FeedbackContent (componente pai)
    setIsTakingScreenshot(false);
  }

  // Se já tiver uma foto:
  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => {
          onScreenshotTaken(null);
        }}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: `right bottom`,
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    );
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
