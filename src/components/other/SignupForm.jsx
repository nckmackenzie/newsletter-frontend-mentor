import { useState } from 'react';
import Button from '../ui/Button';
import { validateEmail } from '../../utils/index';

function SignupForm({ onSubmit }) {
  const [formState, setFormState] = useState({
    value: '',
    isInvalid: false,
    error: null,
  });
  const submitHandler = e => {
    e.preventDefault();

    if (formState.value.trim() === '') {
      setFormState(prev => ({
        ...prev,
        isInvalid: true,
        error: 'Provide email address',
      }));
      return;
    } else {
      if (!validateEmail(formState.value)) {
        setFormState(prev => ({
          ...prev,
          isInvalid: true,
          error: 'Invalid email address',
        }));
        return;
      }
    }

    onSubmit();
  };

  const onChangeHandler = e => {
    setFormState({ value: e.target.value, isInvalid: false, error: null });
  };

  return (
    <form className="w-full mt-4" onSubmit={submitHandler}>
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="email"
            className="text-sm text-charcoalgray font-bold"
          >
            Email address
          </label>
          {formState.error && (
            <span className="inline-flex text-sm font-bold text-red-400">
              {formState.error}
            </span>
          )}
        </div>
        <input
          type="email"
          name="email"
          value={formState.value}
          onChange={onChangeHandler}
          id="email"
          className={`w-full rounded px-4 py-2 border ${
            !formState.isInvalid
              ? 'bg-transparent border-regulargray focus:border-darkslategray'
              : 'border-red-300 bg-red-100 focus:border-red-400'
          }`}
          placeholder="email@company.com"
        />
      </div>
      <Button type="submit">Subscribe to monthly newsletter</Button>
    </form>
  );
}

export default SignupForm;
