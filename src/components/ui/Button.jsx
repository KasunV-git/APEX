const Button = ({ children, className = '', href, ...props }) => {
  const baseStyle = "group/btn inline-flex items-center justify-center gap-2 bg-primary/10 text-primary border-2 border-primary font-bold tracking-widest uppercase text-sm rounded-full transition-all duration-300 ease-out hover:bg-primary hover:text-background hover:-translate-y-[2px] hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer px-8 py-3.5";
  
  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyle} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={`${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
