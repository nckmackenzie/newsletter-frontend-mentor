import Feature from './Feature';
import SignupForm from './SignupForm';

function Content({ onSubmit }) {
  return (
    <div className="lg:flex-1 flex flex-col items-center justify-center gap-4 px-4 py-4 lg:py-0">
      <h1 className="text-4xl font-bold text-darkslategray">Stay Updated!</h1>
      <p className="text-base">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <Feature content="Product discovery and building what matters" />
      <Feature content="Measuring to ensure updates are a success" />
      <Feature content="And much more!" />
      <SignupForm onSubmit={onSubmit} />
    </div>
  );
}

export default Content;
