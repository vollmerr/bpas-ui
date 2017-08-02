import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../Form';

// import FieldSection from './FieldSection';

/** Form wrapper */
class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      nextPage: null,
      prevPage: null,
      pages: props.pages,
      data: props.data,
    };
  }


  /**
   * Handles going to the next page in wizard
   * If nextPage exists, skip to that page
   */
  handlePrevPage = () => {
    const { currentPage, prevPage } = this.state;

    const newPage = prevPage || currentPage > 0 ? currentPage - 1 : currentPage;

    this.setState({
      currentPage: newPage,
    });
  }


  /**
   * Handles going to the prev page in wizard
   * If prevPage exists, skip to that page
   */
  handleNextPage = () => {
    const { currentPage, nextPage, pages } = this.state;

    const newPage = nextPage || currentPage < pages.length - 1 ? currentPage + 1 : currentPage;

    this.setState({
      currentPage: newPage,
    });
  }


  renderButtons = () => {
    const { currentPage, pages } = this.state;

    let prevButton = {
      visible: true,
      text: 'Prev',
      onClick: this.handlePrevPage,
    };

    let nextButton = {
      visible: true,
      text: 'Next',
      isSubmit: true,
    };

    if (currentPage === 0) {
      prevButton.visible = false;
    }

    if (currentPage === pages.length - 1) {
      nextButton.text = 'Submit';
    }

    return [
      prevButton,
      nextButton,
    ];
  }


  /**
   * Handles submitting the form
   * Validates all fields before submission.
   * @param {object} event  - submission event
   */
  handleSubmit = () => {
    console.log('in wizard sumbit')
   }

  render() {
    const { pages, data, currentPage } = this.state;

    const WizardPage = pages[currentPage];
    const onSubmit = currentPage === pages.length -1 ? this.handleSubmit : this.handleNextPage;
    const buttons = this.renderButtons();

    return (
      <div>
        <WizardPage onSubmit={onSubmit} fields={data[currentPage]} buttons={buttons} />
      </div>
    );
  }
}

Wizard.propTypes = {
  validate: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Wizard;
