import React, { PureComponent } from 'react'

import Dialog from './components/Dialog'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: false,
      list: [
        {
          title: `It's a title`,
          description: `It's a discription`,
        },
      ],
      modifyIndex: null,
    }
  }
  static propTypes = {}

  handleNew() {
    this.setState({
      isShow: true,
    })
  }

  handleCheck(newValue) {
    const { index, ...item } = newValue
    let newList
    if (index === null) {
      newList = [...this.state.list, item]
    } else {
      newList = [...this.state.list]
      newList[index] = item
    }
    this.setState({
      ...this.state,
      list: newList,
    })
  }

  handleModify(index) {
    this.setState({
      ...this.state,
      isShow: true,
      modifyIndex: index,
    })
  }

  handleRemove(removeIndex) {
    this.setState({
      ...this.state,
      list: this.state.list.filter((item, index) => index !== removeIndex),
    })
  }

  render() {
    return (
      <div className="container">
        <h2>React List</h2>
        <div className="right">
          <button onClick={() => this.handleNew()}>new</button>
        </div>
        <ul className="list">
          {this.state.list.map((item, index) => (
            <li className="list-item" key={index}>
              <div className="item-content">
                <div className="title">{item.title}</div>
                <div className="descrip">{item.description}</div>
              </div>
              <div className="center">
                <button
                  style={{
                    marginRight: '8px',
                  }}
                  onClick={() => this.handleModify(index)}
                >
                  modify
                </button>
                <button onClick={() => this.handleRemove(index)}>remove</button>
              </div>
            </li>
          ))}
        </ul>
        <Dialog
          isShow={this.state.isShow}
          handleClose={() => this.setState({ isShow: false, modifyIndex: null })}
          handleCheck={(item) => this.handleCheck(item)}
          modifyIndex={this.state.modifyIndex}
          list={this.state.list}
        />
      </div>
    )
  }
}

export default App
