const FloatingCharacters = ({ section }: { section?: string }) => {
  // Different character sets for different sections
  const getCharacters = () => {
    switch (section) {
      case 'about':
        return [
          { char: '🎮', class: 'mascot-char', delay: '0s' },
          { char: '🛡️', class: 'shield-char', delay: '3s' },
          { char: '⚡', class: 'lightning-char', delay: '6s' },
        ];
      case 'projects':
        return [
          { char: '🏆', class: 'trophy-char', delay: '1s' },
          { char: '💎', class: 'gem-char', delay: '4s' },
          { char: '👑', class: 'crown-char', delay: '7s' },
        ];
      case 'all':
        return [
          { char: '⭐', class: 'star-char', delay: '2s' },
          { char: '🚀', class: 'rocket-char', delay: '5s' },
          { char: '🎮', class: 'mascot-char', delay: '8s' },
        ];
      default:
        return [
          { char: '🎮', class: 'mascot-char', delay: '0s' },
          { char: '🏆', class: 'trophy-char', delay: '2s' },
          { char: '💎', class: 'gem-char', delay: '4s' },
        ];
    }
  };

  const characters = getCharacters();

  return (
    <>
      {/* Floating characters between sections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {characters.map((item, index) => (
          <div 
            key={`${section}-${index}`}
            className={`character ${item.class}`}
            style={{ animationDelay: item.delay }}
          >
            {item.char}
          </div>
        ))}
      </div>
      
      {/* Corner decorative characters */}
      <div className="absolute top-4 left-4 text-2xl opacity-60 animate-pulse pointer-events-none z-10">
        🎯
      </div>
      <div className="absolute top-4 right-4 text-2xl opacity-60 animate-pulse pointer-events-none z-10" style={{ animationDelay: '1s' }}>
        🎨
      </div>
      <div className="absolute bottom-4 left-4 text-2xl opacity-60 animate-pulse pointer-events-none z-10" style={{ animationDelay: '2s' }}>
        🔥
      </div>
      <div className="absolute bottom-4 right-4 text-2xl opacity-60 animate-pulse pointer-events-none z-10" style={{ animationDelay: '3s' }}>
        💫
      </div>
    </>
  );
};

export default FloatingCharacters;