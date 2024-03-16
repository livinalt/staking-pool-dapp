import { Button, Flex, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import handleStake from '../hooks/handleStake';

const Stake = () => {
    const [poolId, setPoolID] = useState("");
    const [amount, setAmount] = useState("");

    const handleStakeClick = handleStake(poolId, amount);

    return (
        <div className="flex">
            <div className="">
                <Flex direction="column" gap="4">
                    <label className="flex items-center">
                        <Text as="div" size="2" mb="1" weight="bold" className='pr-8'>
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
                        <Text as="div" size="2" mb="1" weight="bold" className='pr-4'>
                            Amount
                        </Text>
                        <TextField.Input
                            value={amount}
                            placeholder="Enter the Amount"
                            onChange={(e) => setAmount(e.target.value)}
                            className="ml-2 border rounded-md py-1 px-2 focus:outline-none focus:border-blue-500"
                        />
                    </label>
                    <Button className="bg-blue-600" onClick={handleStakeClick}>
                        Stake
                    </Button>
                </Flex>
            </div>
        </div>
    );
};

export default Stake;
