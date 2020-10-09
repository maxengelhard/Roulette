const total = (arr,payouts) => arr.reduce((sum, cur, idx) => {
    return sum + Object.values(cur)[0]/payouts[idx][Object.keys(cur)[0]]
},0)


export default total