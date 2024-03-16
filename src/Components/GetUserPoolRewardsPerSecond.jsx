import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import {useState} from 'react'
import handleGetUserPoolRewardsPerSecond from '../hooks/handleGetUserPoolRewardsPerSecond';

const GetUserPoolRewardsPerSecond = () => {
    const [poolId, setPoolID] = useState("")
    const [stakerAccount, setStakerAccount] = useState("")

    return (
<div className="mx-40">
  <p className="text-lg font-semibold mb-4">My Pool Reward Per Second</p>
  <div className="flex flex-col space-y-4">
    <div className="flex items-center">
      <label htmlFor="poolId" className="text-sm font-bold mr-2">Pool:</label>
      <input
        id="poolId"
        type="text"
        placeholder="Enter the Pool ID"
        className="border rounded-md py-1 px-2 flex-grow focus:outline-none focus:border-blue-500"
        value={poolId}
        onChange={(e) => setPoolID(e.target.value)}
      />
    </div>
    <div className="flex items-center">
      <label htmlFor="account" className="text-sm font-bold mr-2">Account:</label>
      <input
        id="account"
        type="text"
        placeholder="Enter the Staker Account"
        className="border rounded-md py-1 px-2 flex-grow focus:outline-none focus:border-blue-500"
        value={stakerAccount}
        onChange={(e) => setStakerAccount(e.target.value)}
      />
    </div>
    <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
    onClick={handleGetUserPoolRewardsPerSecond}>
      Pool Reward
    </button>
  </div>
</div>

    )
}

export default GetUserPoolRewardsPerSecond