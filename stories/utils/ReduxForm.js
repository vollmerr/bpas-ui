import React from 'react';
import { reduxForm } from 'redux-form';

const ReduxForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, children } = props;
  const onSubmit = (vals) => console.log('Submitting: ', vals);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children}
      <div>
        <button type="submit">
          Submit
        </button>
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'story' // a unique identifier for this form
})(ReduxForm);
