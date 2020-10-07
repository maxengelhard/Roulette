import numbers from '../Wheel/numbers'

const flash = (key) => {
    document.querySelector(`.${key}`).classList.add('won');
    setTimeout(() => {
        document.querySelector(`.${key}`).classList.remove('won');
    },5000)
}

const checkWinner = (num,arr) => {
    // iterate over the arr
        // want to reduce this to a number
        return arr.reduce((acum, obj) => {
            const key = Object.keys(obj)[0]
            const value = Object.values(obj)[0]
            if (value > 0) {
            // first check if greater than zero
            if (num > 0) {
            // check if red
            if (key === 'Red' && numbers.indexOf(num)%2===0) {
                acum += value
                flash('red')
            } 
            // check if black
            if (key === 'Black' && numbers.indexOf(num)%2===1) {
                acum += value
                flash('black')
            } 

            // check if even
            if (key ==='Even' && num%2===0) {
                acum += value
                flash('even')
            }
            // check if odd
            if (key === 'Odd' && num%2===1) {
                acum += value
                flash('odd')
            }
            // check if 1-18
            if (key === 'Low' && num <=18) {
                acum += value
                flash('low')
            }
            // check if high
            if (key === 'High' && num >=19) {
                acum += value
                flash('high')
            }
            // first dozen
            if (key === 'First Dozen' && num <=12) {
                acum += value
                flash('firstDozen')
            }
            // Second Dozen
            if (key === 'Second Dozen' && num>=13 && num <=24) {
                acum += value
                flash('secondDozen')
            }
            // third dozen
            if (key === 'Third Dozen' && num >=25) {
                acum += value
                flash('thirdDozen')
            }
            // first coulumn
            if (key === 'Column-1' && (num-1)%3===0) {
                acum += value
                flash('column-1')
            }
            //second coulmn
            if (key === 'Column-2' && (num-2)%3===0) {
                acum += value
                flash('column-2')
            }
            // third coulmn
            if (key === 'Coulmn-3' && (num-3)%3===0) {
                acum += value
                flash('column-3')
            }
            // check if they hit the number
            if (key ===num) {
                acum += value
                flash(`button${key}`)
            }
        } else if (key ===num) {
            acum += value
            flash(`button${key}`)
        }
    }

        return acum
        

        }, 0)
    

}

export default checkWinner