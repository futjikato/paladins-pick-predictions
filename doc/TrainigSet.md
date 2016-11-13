# Training Set

The training set must be a .json file with a name and some training data

```
{
  "name": "Small collection from Birds ranked plays",
  "data": [
    {
      "help":   "A B     C D E F G   K M   P R S   V Y",
      "input":  [1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0],
      "output": [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]
    },
    ... more data sets
  ]
}
```

Each variable in the in- and output is the flag if a given hero is present. The `help` index is only there to have
an easy overview about the parameter. The order of champions is alphabetical. The exact ordering of champion is below.

In the example above the input defines that Androxus, Barik, Mal'Damba and and Ruckus are already picked. The network
will then make a prediction and afterwards learn that the correct answer was Evie and learn based on that information.

```
0 Androxus
1 Barik
2 Bomb King
3 Buck
4 Cassie
5 Drogoz
6 Evie
7 Fernando
8 Grohk
9 Grover
10 Kinessa
11 Makoa
12 Mal'Damba
13 Pip
14 Ruckus
15 Sha Lin
16 Skye
17 Viktor
18 Ying
```

## Empty template for training data set
```
{
  "help":   "A B     C D E F G   K M   P R S   V Y",
  "input":  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "output": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}
```
