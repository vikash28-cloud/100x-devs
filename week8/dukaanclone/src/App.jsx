import React from 'react'
import { RevenueCard } from './components/RevenueCard'

const App = () => {
  return <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} showWarning={""} orderCount={94} amount={"1,20,859"}/>
  </div>
}

export default App