# Metronome

## Description

After investing, you must click the Idle button every 14 hours. If you don't, you will lose 10%
of your funds, which will be redistributed to all investors, proportionally to their investments.

## Contract Functions

* `invest` and `divest` enable you to add money to the contract or withdraw,
* you must call `idle` before timing out (14 hours),
* you can call `poke` on someone if they do not idle on time: this takes (at most) 10% of their balance, and other players are then allowed to claim their fair share of this balance
(the player who lost is also automatically credited his share of his own lost 10%. This is done so that the game is completely fair, regardless of whether you invest small or big),
* `claimReward` allows you to collect all pending rewards.

## Deployed Contract

The contract is deployed at address https://etherscan.io/address/0x6ba91780977db9ce9100a8492de162441d875f47 and can be accessed through the interface at https://proofofidleness.github.io/metronome/ (using the Mist or Metamask browsers).
