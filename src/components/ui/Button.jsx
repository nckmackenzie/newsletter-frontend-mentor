function Button({ children, type }) {
  return (
    <button
      type={type || 'button'}
      className="text-white font-bold text-sm w-full border-0 rounded-md px-8 py-4 bg-darkslategray transition-all hover:bg-primary"
    >
      {children}
    </button>
  );
}

export default Button;
