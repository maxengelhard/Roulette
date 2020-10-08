let counter = 0
let payouts = [
    {'Red': 2},
    {'Black': 2},
    {'Odd': 2},
    {'Even': 2},
    {'Low': 2},
    {'High': 2},
    {'Column-1': 3},
    {'Column-2': 3},
    {'Column-3': 3},
    {'First Dozen': 3},
    {'Second Dozen': 3},
    {'Third Dozen': 3},
    {'Straight Up': 36},
    {'Split Bet':18},
    {'Street Bet':12},
    {'Corner Bet': 9},
    {'Five Number Bet':7},
    {'Siz Number Bet':6}
]


while (counter <37) {
    payouts.push({[counter]: 36})
    counter ++
}
export default payouts