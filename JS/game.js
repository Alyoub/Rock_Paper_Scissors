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

	let autoplaying = false;
	let getID;

	function autoplay()
	{
		let stopPlaying = document.querySelector('.autoPlay');
		if(!autoplaying)
		{
			getID = setInterval(function(){
				let pcMv = pcMove();
				playGame(pcMv)
			}, 1000)
			autoplaying = true;
			stopPlaying.innerHTML = 'Stop Play';
			stopPlaying.classList.add('stop');
		}
		else
		{
			clearInterval(getID);
			autoplaying = false;
			stopPlaying.innerHTML = 'Auto Play';
			stopPlaying.classList.remove('stop');
		}
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
      
 
	  document.querySelector('.bt1').addEventListener('click', () => {
		playGame('Rock');
	  });

	  document.querySelector('.bt2').addEventListener('click', () => {
		playGame('paper');
	  });

	  document.querySelector('.bt3').addEventListener('click', () => {
		playGame('Scissors');
	  });

	  document.body.addEventListener('keydown', (event) => {

		if(event.key === 'r' || event.key === 'R')
			playGame('Rock');
		else if(event.key === 's' || event.key === 'S')
			playGame('Scissors');
		else if(event.key === 'p' || event.key === 'P')
			playGame('paper');
	  });

	  document.querySelector('.res1').addEventListener('click', () => {

			score.lose = 0;
			score.tie = 0;
			score.win = 0;

			localStorage.removeItem('score');
			update();
	  });

	  document.querySelector('.autoPlay').addEventListener('click', () => {
			autoplay();
	  });