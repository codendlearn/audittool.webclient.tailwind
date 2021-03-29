import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Dashboard from '../Pages/Dashboard'
import Play from '../Play'

const MainContent = () => {
  return (
    <Switch>
      <Route path='/home'>
        <div className='flex flex-col space-y-4'>
          <h2>Home</h2>
          <Home />
        </div>
      </Route>
      <Route path='/about'>
        <div className='flex flex-col space-y-4'>
          <h2>About</h2>
          <About />
        </div>
      </Route>
      <Route path='/dashboard'>
        <div className='flex flex-col space-y-4'>
          <h2>Dashboard</h2>
          <Dashboard />
        </div>
      </Route>
      <Route path='/play'>
        <div className='flex flex-col space-y-4'>
          <h2>Playground</h2>
          <Play />
        </div>
      </Route>
      <Route path='/'>
        <div className='flex flex-col space-y-4'>
          <h2>Home</h2>
          <Home />
        </div>
      </Route>
    </Switch>
  )
}

export default MainContent
