import React, { useEffect, useState } from 'react';
import './Header.css'; // O cualquier archivo CSS donde definiste los estilos

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const messages = ["Kenywer Santos"];

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % messages.length;
      const fullText = messages[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        // Pausa de 3 segundos cuando el texto está completo
        timer = setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && text === '') {
        // Pausa de 3 segundos cuando el texto se borra completamente
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(handleTyping, 3000);
      } else {
        timer = setTimeout(handleTyping, typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="Header">
      <h1 className="typing-animation">{text}</h1>
    </header>
  );
};

export default TypingAnimation;
