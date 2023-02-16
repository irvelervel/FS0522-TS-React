import { Component } from 'react'

// we need to write a shape for the props object of ExampleClassComponent
// and let TS know about it :)

interface ExampleClassComponentProps {
  title: string
  stefano?: boolean
}

interface ExampleClassComponentState {
  counter: number
}

class ExampleClassComponent extends Component<
  ExampleClassComponentProps,
  ExampleClassComponentState
> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <h1>{this.props.title.toLowerCase()}</h1>
        {this.props.stefano && <h3>This is a class component example</h3>}
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    )
  }
}

export default ExampleClassComponent
