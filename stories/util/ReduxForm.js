import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class ReduxForm extends Component {
  componentDidMount() {
    const { init, change } = this.props;
    if (init) {
      Object.keys(init).forEach(key => change(key, init[key]));
    }
  }

  render() {
    const { handleSubmit, change, pristine, reset, submitting, children, init } = this.props;
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
}

export default reduxForm({
  form: 'story'
})(ReduxForm);