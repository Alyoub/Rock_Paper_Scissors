let score = JSON.parse(localStorage.getItem('score')); 

	if(score === null)
	{
		score = {
			win : 0,
			lose : 0,
			tie : 0,
		}
	}

    update();

	function pcMove()
	{
		let mv = Math.random();
		let res = '';
		if(mv >= 0 && mv <= 1 / 3)
				res = 'Rock';
			else if(mv > 1 / 3 && mv <= 2 / 3)
				res = 'Paper';
			else
				res = 'Scissors';
			return res;
	}

	function playGame(myMove)
	{
		let xp = pcMove();
		let rest = '';
		if(xp === 'Rock')
		{
			if(myMove === 'Rock')
				rest = 'Tie.';
			else if(myMove === 'Paper')
				rest = 'You Win.';
			else
				rest = 'You Lose.'
		}
		else if(xp === 'Paper')
		{
			if(myMove === 'Rock')
				rest = 'You Lose.';
			else if(myMove === 'Paper')
				rest = 'Tie.';
			else
				rest = 'You Win.'
		}
		else if(xp === 'Scissors')
		{
			if(myMove === 'Rock')
				rest = 'You Win.';
			else if(myMove === 'Paper')
				rest = 'You Lose.';
			else
				rest = 'Tie.';
		}
		if(rest === 'You Win.')
			score.win++;
		else if(rest === 'You Lose.')
			score.lose++;
		else if(rest === "Tie.")
			score.tie++	
			localStorage.setItem('score', JSON.stringify(score));
        update();

        document.querySelector('.res').innerHTML = rest;
		let rock = document.querySelector('.bt1').innerText;
        document.querySelector('.wq').innerHTML = `You'r move <img  class="Scissors" src="logo/${myMove}.svg"> pc move <img  class="Scissors" src="logo/${xp}.svg">`;
			}

      function update()
      {
        document.querySelector('.ree').innerHTML = `Wines : ${score.win} , Loses : ${score.lose}, Ties : ${score.tie}`;
      }
      