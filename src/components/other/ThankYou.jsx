import Card from '../ui/Card';
import checkMark from '../../assets/icon-list.svg';
import Button from '../ui/Button';

function ThankYou() {
  return (
    <Card className="max-w-sm p-8 flex flex-col gap-6">
      <img src={checkMark} alt="check mark" className="w-12 h-12" />
      <h1 className="text-5xl font-bold text-darkslategray">
        Thanks for subscribing!
      </h1>
      <p className="text-sm text-charcoalgray">
        A confirmation email has been sent to{' '}
        <span className="font-bold text-darkslategray">
          ash@loremcompany.com
        </span>
        . Please open it and click the button inside to confirm your
        subscription.
      </p>
      <Button>Dismiss</Button>
    </Card>
  );
}

export default ThankYou;
