# Metronome

## Contract Functions

* invest() and divest() enable you to add money to the contract or withdraw (do not invest or divest if you have pending rewards, as you will lose them, and they will be redistributed to other players)
* you must call idle() before timing out (10 minutes for the testnet version, and most likely 14 hours for the final version)
* you can call poke() on someone if they do not idle on time (a poke button will appear on the interface): this takes (at most) 10% of their balance, and other players are then allowed to claim their fair share of this balance.
The player who lost is also automatically credited his share of his own lost 10%. This is done so that the game is completely fair, regardless of whether you invest small or big.
* there is a Claim button that appears if you have pending rewards to claim (claimReward function)

## Deployed Contract

The contract is deployed on the Ropsten (Revival) testnet at 0x9a7e4083b7675376124884e91e63d1d36cbda8ba and can be accessed through the interface at https://proofofidleness.github.io/metronome/
