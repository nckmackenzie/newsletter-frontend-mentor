function Card({ children, className }) {
  return (
    <div
      className={`bg-white mx-2 lg:mx-auto rounded-lg lg:rounded-3xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
