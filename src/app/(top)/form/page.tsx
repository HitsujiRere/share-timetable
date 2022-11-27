'use client';

import classNames from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';

type Input = {
  name: string;
  age: number;
};

export default function TopFormPage() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values));
        resolve();
      }, 3000);
    });
  };

  return (
    <div className="mx-auto max-w-7xl">
      <article className="prose max-w-full break-words">
        <h1>Welcome to Form!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full gap-y-8">
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register('name', { required: '入力してください' })}
              type="text"
              disabled={isSubmitting}
              className="input-bordered input w-full"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text text-error">{errors.name.message}</span>
              </label>
            )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              {...register('age', {
                min: { message: '0以上を入力してください', value: 0 },
                required: '入力してください',
              })}
              type="number"
              disabled={isSubmitting}
              className="input-bordered input w-full"
            />
            {errors.age?.message && (
              <label className="label">
                <span className="label-text text-error">{errors.age.message}</span>
              </label>
            )}
          </div>

          <button
            type="submit"
            className={classNames('btn w-full max-w-xs mx-auto', { loading: isSubmitting })}
          >
            送信
          </button>
        </form>
      </article>
    </div>
  );
}
