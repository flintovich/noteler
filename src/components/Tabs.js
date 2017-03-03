import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tabs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { children, activeTab} = this.props;
    return (
      <div className="tab-wrapper">
        {React.Children.map(children, (item) => {
          if(activeTab === item.props.tabId) {
            return item;
          }
        })}
      </div>
    );
  }
}

export default Tabs;

