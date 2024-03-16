import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import {useState} from 'react'
import handleGetUserClaimableRewards from '../hooks/handleGetUserClaimableRewards'

const GetUserClaimableRewards = () => {
    const [poolId, setPoolID] = useState("")
    const [stakerAddress, setStakerAddress] = useState("")
    return (
      <div className="mx-40">
  <div>
    <Text>My Claimable Rewards</Text>
    <Flex direction="column" gap="3">
      <label className="flex items-center">
        <Text as="div" size="2" mb="1" weight="bold">
          Pool
        </Text>
        <TextField.Input
          value={poolId}
          placeholder="Enter the Pool ID"
          onChange={(e) => setPoolID(e.target.value)}
          className="ml-2 border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </label>
      <label className="flex items-center">
        <Text as="div" size="2" mb="1" weight="bold">
          Staker Address
        </Text>
        <TextField.Input
          value={stakerAddress}
          placeholder="Enter the Staker Address"
          onChange={(e) => setStakerAddress(e.target.value)}
          className="ml-2 border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
        />
      </label>
    </Flex>
    <Button className="bg-blue-600"
    onClick={handleGetUserClaimableRewards}>
      Show Reward</Button>
  </div>
</div>

    )
}

export default GetUserClaimableRewards