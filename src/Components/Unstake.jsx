import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useState } from 'react';
import handleUnstake from '../hooks/handleUnstake';

const Unstake = () => {
    const [poolID, setPoolID] = useState("");

    const handleUnstakeClick = () => {
        // Call the function to handle unstake
        handleUnstake(poolID);
    };

    return (
        <div>
            <Text>Unstake</Text>
            <Dialog.Root>
                <Dialog.Trigger>
                    <Button className="bg-blue-600">Unstake</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Unstake</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Unstaking from Pool
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Unstaking
                            </Text>
                            <TextField
                                value={poolID}
                                onChange={(e) => setPoolID(e.target.value)}
                                placeholder="Enter Pool ID"
                            />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Button className="bg-blue-600" onClick={handleUnstakeClick}>
                            Unstake From Pool
                        </Button>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    );
}

export default Unstake;
