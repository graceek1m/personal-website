'use client'

interface ScrollToButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollToButton: React.FC<ScrollToButtonProps> = ({ 
  targetId, 
  children, 
  className = "px-8 py-4 bg-gradient-to-r text-black rounded-full hover:shadow-lg transition-all duration-200 transform hover:scale-105" 
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}