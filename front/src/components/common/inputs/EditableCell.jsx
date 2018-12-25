import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from './TextInput';
import validate from '../validation';

class EditableCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inEditing: false,
      value: this.props.value,
      validationRules: this.props.validation,
      valid: true
    };
  }

  onEdit = () => {
    this.setState({ inEditing: true });
  };

  onEditSave = (itemId, value, name) => {
    this.props.onEdit(itemId, value, name);
    this.setState({ inEditing: false });
  };

  handleOnChange(e) {
    const updatedCell = { ...this.state };
    const value = e.target.value;

    updatedCell.value = value;
    updatedCell.valid = validate(value, updatedCell.validationRules);
    this.setState({ valid: updatedCell.valid });

    if (updatedCell.valid) {
      this.setState({ value: updatedCell.value });
    }
  }

  handleOnKeyUp(e, itemId, value, name) {
    const enterKey = 13;
    if (e.keyCode === enterKey) {
      this.onEditSave(itemId, value, name);
    }
  }

  render() {
    const { item, value, name } = this.props;
    return this.state.inEditing ? (
      <>
        <TextInput
          defaultValue={value}
          onChange={e => this.handleOnChange(e)}
          onKeyUp={e => this.handleOnKeyUp(e, item.id, this.state.value, name)}
          valid={this.state.valid}
          touched={true}
        />

        <FontAwesomeIcon
          icon="check-circle"
          className="icon"
          onClick={() => this.onEditSave(item.id, this.state.value, name)}
        />
      </>
    ) : (
      <>
        {value}
        <FontAwesomeIcon icon="edit" className="icon" onClick={this.onEdit} />
      </>
    );
  }
}

export default EditableCell;
