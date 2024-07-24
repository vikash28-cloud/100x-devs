import React from 'react'
import { useState, useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { notificationAtom, totalNotifiactionsSelector } from './store/atoms/atoms';
import axios from 'axios';

const App = () => {
  return (
    <>
      <RecoilRoot>

        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notificationAtom);
  const alNotifications = useRecoilValue(totalNotifiactionsSelector);
  useEffect(() => {
    
  }, [])

  console.log(networkCount)
  return (
    <>

      <button>Home</button>

      <button>My Network({networkCount.network})</button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messages ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>me({alNotifications})</button>
    </>
  )
}

export default App