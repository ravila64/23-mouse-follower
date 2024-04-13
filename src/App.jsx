import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// alt+96=` comillas invertidas

export function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("effect ", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log('handleMove ', { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    }
    if (enabled) { window.addEventListener('pointermove', handleMove); }
    // cleanup, cuando el componente se desmonta
    // cuando cambian las dependencias antes de ejecutar el efecto
    return ()=>{
      window.removeEventListener('pointermove',handleMove);
    }
  }, [enabled]);

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}>
      </div>
      <h3>proyecto 3 de react midudev</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar ' : 'Activar '}
        Seguir puntero
      </button>
    </main>
  );
}
