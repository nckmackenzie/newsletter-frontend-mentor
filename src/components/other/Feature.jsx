import check from '../../assets/icon-list.svg';
function Feature({ content }) {
  return (
    <div className="w-full">
      <div className="flex gap-2 items-center">
        <img src={check} alt="check mark" />
        <p className="text-base text-charcoalgray">{content}</p>
      </div>
    </div>
  );
}

export default Feature;
