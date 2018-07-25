import React, { Component } from 'react';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {product} = this.props
    return (
      <div>
        Edit Component
      </div>
    );
  }
}

export default EditProduct;
