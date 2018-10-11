### Simulate Battle

#### 4.00 Points

#### 1) Pokemon Constructor Function

In order to have Pokemon to battle one another, first you need a way to create the Pokemon! **Create the constructor function `Pokemon` that creates a `Pokemon`
with the following properties**:

- Name
- Health
- Attack Bonus

There should also be **two methods on the Constructor Function's `.prototype` object** so all instances of the `Pokemon` can access them. The two methods are:

- `biteAttack`: returns the value of a bit attack.  The value of the biteAttack is the attack bonus value + 2.
- `isDefeated`: returns `true` or `false` depending if the Pokemon's health is greater than 0 (false) or if the Pokemon's health is less than or equal to 0 (true, the Pokemon is defeated)


#### 2) (EXTRA - CREDIT)  Simulate Battle Function 

NOTE: the `simulateBattle` function is extra credit. 2 points will be added to your grade if all specs are passing (partial credit is not rewarded for extra credit problems)

**Create a function `simulateBattle` that simulates a Pokemon Battle!** How does the battle work? 

The `simulateBattle` function accepts three arguments:

	- Pokemon 1
	- Pokemon 2
	- Pokemon name that gets first move


The **first two arguments are instances of the `Pokemon` Constructor function**.  These are the two Pokemon that
will battle each other.  The **last argument is the name of the Pokemon that make the first move in the battle. The last argument is a string (the name of the Pokemon).

The battle will end when one of the two Pokemon in the battle reaches `0`or negative health.  

Each Pokemon will have one ability called `biteAttack`.  The `biteAttack` is a function that calculates the total value of the Pokemon's Attack Bonus property and adds `2` to it. Each turn, the pokemon will use `biteAttack` which means that the opponent pokemon's health will decrease by the value that is returned by the attacker's `biteAttack` method.

Each Pokemon will alternate attacks until a Pokemon reachs 0 or negative health. At the end of the battle, state the name of the Winner. 

**Example**:

```
simulateBattle(new Pokemon("Krabby", 100, 50), new Pokemon("Squirtle", 50, 0), "Krabby"); // returns `"Krabby Wins!"`
```
