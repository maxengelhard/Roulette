# Roulette

In this code you will find a react application that allows a user to play roulette.

Betting:

To the right you will see a table with numbers and other betting options. By simply clicking on that area you can place your bet.

On the table with individual numbers you can click on the individual numbers or inbetween them to create a "split bet". A split bet means that if a number is spun and you have either of those numbers you will get paid out (with half the payout). Similarly you can bet street bets (an entire row), double street bets (two rows), and corner bets (where four numbers interchange).

To change the bet amount you can click on the buttons listed below the table. The change of amount will only affect the next bet not the previous one.

If you want to undo your bet there is an undo button that will allow you to do so.

There is also a doulbe your bet button that will allow you to double all of your current bets.



Spinning And Winning:

After completing all of your betting you can hit the spin button.

This will genereate a random spin on both the wheel and the ball.

When the spinning is finished the intersection of the ball and it's closest number will be calculated.

From there any bets that hit will bet put into your balance. 

All payouts are calculated based on standard roulette rules.


Storage: 

Your balance and only your balance is stored in a localStorage. This is calculated only when a spin is complete or when you first join. If you make bets and leave the page your bets will be cleared and the balance will be restored to where it was before you made those bets.
