import React from 'react'
// import './App.css'
import { configureWeb3Modal } from './Connections';
import Header from './Components/Header.jsx'
import CreatePool from './Components/CreatePool.jsx';
import GetPool from './Components/GetPool.jsx';
import Stake from './Components/Stake.jsx';
import CalculateRewardsPerSecond from './Components/CalculateRewardsPerSecond.jsx';
import GetUserClaimableRewards from './Components/GetUserClaimableRewards.jsx';
import ClaimRewards from './Components/ClaimRewards.jsx';
import GetUserStakeBalance from './Components/GetUserStakeBalance.jsx';
import GetUserPoolRewardsPerSecond from './Components/GetUserPoolRewardsPerSecond.jsx';
import "@radix-ui/themes/styles.css";
import { Flex } from '@radix-ui/themes';

configureWeb3Modal();

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='mx-40 flex align-top justify-between pb-8'>
          <CreatePool />
          <GetPool />
          <Stake />
        </div>

          <div className='flex justify-between align-top border border-blue-400 pt-8 pb-8'>            
            <GetUserPoolRewardsPerSecond />    
            <ClaimRewards />        
            <CalculateRewardsPerSecond />
            
          </div>
          <div className='flex align-top justify-between mb-96 pt-8'>
              <GetUserClaimableRewards />           
             <GetUserStakeBalance />
          </div>
      </div>
    </div>
  )
}

export default App