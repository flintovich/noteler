import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Treebeard, decorators } from 'react-treebeard';

decorators.Header = (props) => {
  const style = props.style;
  const iconType = props.node.children ? 'folder' : 'file-text';
  const iconClass = `fa fa-${iconType}`;
  const iconStyle = { margin: '0 5px' };
  return (
    <div style={style.base}>
      <div style={style.title}>
        <i className={iconClass} style={iconStyle}/>
        {props.node.name}
      </div>
    </div>
  );
};

class CategoriesTree extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(node, toggled) {
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.setState({ cursor: node });
  }



  render() {
    return (
      <Treebeard
        data={this.props.folders}
        decorators={decorators}
        onToggle={this.handleChange}
      />
    );
  }
}

export default CategoriesTree;