import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import handleCreatePool from '../hooks/handleCreatePool';
import {useState} from 'react'

const CreatePool = () => {
    const [rewardRate, setRewardRate] = useState("");
    
    
  return (
    <div className=''>  
  <Dialog.Root>
    <Dialog.Trigger>
      <Button className="bg-blue-600">Create Pool</Button>
    </Dialog.Trigger>

    <Dialog.Content className="max-w-xs" style={{ maxWidth: 450 }}>
      <Dialog.Title>Add New Pool</Dialog.Title>
      <Dialog.Description size="2" mb="4">
        New Pool
      </Dialog.Description>

      <Flex direction="column" gap="3">
        <label>
          <Text as="div" size="2" mb="1" weight="bold">
            Pool Reward Rate
          </Text>
          <TextField.Input
            value={rewardRate}
            onChange={(e) => setRewardRate(e.target.value)}
            placeholder="Enter Pool's reward rate"
          />
        </label>
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Button className="bg-blue-600"
        onClick={handleCreatePool}>
          Create Pool
        </Button>
      </Flex>
    </Dialog.Content>
  </Dialog.Root>
</div>

  )
}

export default CreatePool