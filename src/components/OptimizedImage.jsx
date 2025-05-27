import { useState } from 'react';

export default function OptimizedImage({ 
  src, 
  alt, 
  className,
  sizes = '(max-width: 768px) 100vw, 50vw'
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Função para gerar URL do CDN (ajuste conforme seu CDN)
  const getImageUrl = (src, width) => {
    // Exemplo usando Cloudinary
    // return `https://res.cloudinary.com/seu-cloud-name/image/upload/w_${width},q_auto,f_auto/${src}`;
    
    // Por enquanto, retorna a URL original
    return src;
  };

  return (
    <div className={`${className} ${isLoading ? 'animate-pulse bg-gray-200' : ''}`}>
      <img
        src={getImageUrl(src, 800)} // tamanho padrão
        srcSet={`
          ${getImageUrl(src, 400)} 400w,
          ${getImageUrl(src, 800)} 800w,
          ${getImageUrl(src, 1200)} 1200w
        `}
        sizes={sizes}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
