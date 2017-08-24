import React from 'react';
import { Icon } from '../src/components';
import { storiesOf } from '@storybook/react';
import icons from './util/icons';
import { Col, Row } from 'react-bootstrap';

class IconStory extends React.Component {
  constructor() {
    super();
    this.state = {
      icons,
    }
  }
  handleSearch = (e) => {
    this.setState({
      icons: icons.filter(icon => icon.match(e.target.value))
    });
  }
  render() {
    return (
      <div>
        <input
          className={'form-control'}
          value={this.state.value}
          onChange={this.handleSearch}
          placeholder={'Search'}
        />
        {
          this.state.icons.map(icon => (
            <Col xs={3} style={{ textAlign: 'center', padding: '20px' }} key={icon}>
              <Icon icon={icon} {...this.props.iconProps} />
              <div>{icon}</div>
            </Col>
          ))
        }
      </div>
    );
  }
}

storiesOf('Icon', module)
  .add('basic', () => <IconStory />)
  .add('color', () => <IconStory iconProps={{ style: { color: 'blue' } }} />)
  .add('size', () => <IconStory iconProps={{ size: 40 }} />);
