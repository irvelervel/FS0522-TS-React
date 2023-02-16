import React from 'react'
import './App.css'
import ExampleClassComponent from './components/ExampleClassComponent'
import ExampleFuncComponent from './components/ExampleFuncComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapElements from './components/BootstrapElements'
import FormComponent from './components/FormComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route
              path="/"
              element={
                <ExampleClassComponent title="Hello TS!" stefano={true} />
              }
            />
            <Route
              path="/function"
              element={<ExampleFuncComponent title="Hello TS!" />}
            />
            <Route path="/bootstrap" element={<BootstrapElements />} />

            <Route path="/form" element={<FormComponent />} />
            {/* 
        <ExampleClassComponent title="no subtitle here" stefano={false} />
        <ExampleClassComponent title="no stefano prop" /> */}
            {/* TS is complaining about us passing a prop to a class component,
        since by default every component in React expects {} as the shape
        of its props object */}
            {/* the solution is letting TS know that our ExampleClassComponent
        actually can work with props and should receive one called "title" */}
            {/*  */}
            {/* <BootstrapElements /> */}
            <Route
              path="/details/:id"
              element={<ExampleFuncComponent title="hello" />}
            />
            <Route path="/books" element={<FetchComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App
