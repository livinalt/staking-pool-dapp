import { Button, Flex, Text, TextField } from '@radix-ui/themes'
import {useState} from 'react'
import handleCalculateRewardsPerSeconds from '../hooks/handleCalculateRewardsPerSeconds';

const CalculateRewardsPerSecond = () => {
    const [poolId, setPoolID] = useState("")
    const [stakedAmount, setStakedAmount] = useState("")

    return (
      
<div className="mx-40 ">
  <Flex gap="4" direction="column">
    <Text as="div" size="2" mb="4" weight="bold">
      My Rewards Per Second
    </Text>
    <Flex gap="4" align="center">
      <Text as="div" size="2" mb="1" weight="bold">
        Pool
      </Text>
      <TextField.Input
        value={poolId}
        placeholder="Enter the Pool ID"
        onChange={(e) => setPoolID(e.target.value)}
      />
    </Flex>
    <Flex gap="4" align="center">
      <Text as="div" size="2" mb="1" weight="bold">
        Staked Amount
      </Text>
      <TextField.Input
        value={stakedAmount}
        placeholder="Enter the Staked Amount"
        onChange={(e) => setStakedAmount(e.target.value)}
      />
    </Flex>
    <Button className="bg-blue-600"
    onClick={handleCalculateRewardsPerSeconds}>Get My Reward</Button>
  </Flex>
</div>

    )
}

export default CalculateRewardsPerSecond