import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Treebeard, decorators } from 'react-treebeard';

import './home.css';

class CategoriesTree extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOpenFolder = this.handleOpenFolder.bind(this);
  }

  handleChange(node, toggled) {
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.setState({ cursor: node });
  }

  getCustomHeader(decorators) {
    decorators.Header = (props) => {
      const style = props.style;
      const isOpenFolderClass = props.node.toggled ? 'folder-open' : 'folder';
      const iconType = props.node.children ? isOpenFolderClass : 'file-text';
      const iconClass = `fa fa-${iconType}`;
      const iconStyle = { margin: '0 5px' };
      return (
        <div style={style.base}>
          <div style={style.title}>
            <i className={iconClass} style={iconStyle}/>
            {props.node.name}
          </div>
          {props.node.children &&
          <i className="openFolder fa fa-sign-in"
             title="Open Folder's notes"
             style={{iconStyle}}
             onClick={this.handleOpenFolder.bind(this, props.node.name)}/>
          }
        </div>
      );
    };
  }

  handleOpenFolder(folderName, e) {
    e.stopPropagation();
    this.context.router.push(`/folder/${folderName}`);
  }

  render() {
    const { folders } = this.props;
    return (
      <Treebeard
        data={folders}
        decorators={this.getCustomHeader(decorators)}
        onToggle={this.handleChange}
      />
    );
  }
}

export default CategoriesTree;

CategoriesTree.contextTypes = {
  router: React.PropTypes.object.isRequired
};