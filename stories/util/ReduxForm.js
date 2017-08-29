import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

export const storyOnChange = (event, newValue, previousValue) => {
  alert(`
    Handling custom onChange...

    event: ${event},
    newValue: ${newValue},
    previousValue: ${previousValue},
  `);
};

class ReduxForm extends Component {
  componentDidMount() {
    const { init, change } = this.props;
    if (init) {
      Object.keys(init).forEach(key => change(key, init[key]));
    }
  }

  render() {
    const { handleSubmit, change, pristine, reset, submitting, children, init } = this.props;
    const onSubmit = (vals) => alert(JSON.stringify(vals, null, 2));

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
