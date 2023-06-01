import Card from '../ui/Card';
import Content from './Content';
import Image from './Image';

function SignupCard({ onSubmit }) {
  return (
    <Card className="max-w-4xl h-max lg:p-4">
      <div className="flex flex-col-reverse lg:flex-row">
        <Content onSubmit={onSubmit} />
        <Image />
      </div>
    </Card>
  );
}

export default SignupCard;
