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
    {'Trio': 12},
    {'Corner Bet': 9},
    {'Four Number Bet':9},
    {'Double Steet Bet':6}
]


// single numbers
while (counter <37) {
    payouts.push({[counter]: 36})
    counter ++
}

// splt horizontal
counter =1;
while (counter <36) {
    payouts.push({[`${counter}-${counter+1}`]: 18})
    counter ++
}

// split vertical
counter = 1;
while (counter <=36) {
    while(counter <4) {
        payouts.push({[`${0}-${counter}`]: 18})
        counter++
    }
    payouts.push({[`${counter-3}-${counter}`]: 18})
    counter ++
}

//trio
counter=1;
while (counter<3) {
    payouts.push({[`${0}-${counter}-${counter+1}`]: 12})
    counter++
}

// corner
counter =1;
while(counter<=36) {
    payouts.push({[`${counter}-${counter+3}-${counter+1}-${counter+4}`]: 9})
    counter++
}

// street
counter = 1;
while (counter <36) {
    payouts.push({[`${counter}-${counter+1}-${counter+2}`]: 12})
    counter+=3
}

// double street
counter = 1;
while (counter <36) {
    payouts.push({[`${counter}-${counter+1}-${counter+2}-${counter+3}-${counter+4}-${counter+5}`]: 6})
    counter +=3
}


export default payouts