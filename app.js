const players = [];
        const playerList = document.getElementById("player-List");

        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const country = document.getElementById("country");
        const score = document.getElementById("score");

        function addPlayer(event) {
        event.preventDefault();
        players.push({"name" : firstName.value, 
        "lastname" : lastName.value,
        "country" : country.value,
        "score" : score.value})
        refreshList();
        }
       
    

    function refreshList() {

        const playerList = document.getElementById("player-List");
        players.sort( (player1, player2) => parseInt(player2.score) - parseInt(player1.score) )
        playerList.innerHTML = "";
        players.forEach( (i,index) => {
            
            const listItem = document.createElement("li");
            
            const nameContent = document.createElement("span");
            const countryContent = document.createElement("span");
            const currentScore = document.createElement("span");

            const increaseBtn = document.createElement("button");
            increaseBtn.classList.add("increase");
            const decreaseBtn = document.createElement("button");
            decreaseBtn.classList.add("decrease");
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete");

            increaseBtn.innerText = 'Increase';
            deleteBtn.innerText = 'Delete';
            decreaseBtn.innerText = ' Decrease';
            currentScore.innerText = i.score;
            nameContent.innerText = i.name + ' ' + i.lastname;
            countryContent.innerText = i.country;

            increaseBtn.addEventListener('click', () => {
                currentScore.innerText = parseInt(i.score) + 5;
                i.score = parseInt(i.score) + 5;
                refreshList();

            })

            decreaseBtn.addEventListener('click', () => {
                currentScore.innerText = parseInt(i.score) - 5;
                i.score = parseInt(i.score) - 5;
                refreshList();

            })
            
            deleteBtn.addEventListener('click', () => {
                players.splice(index, 1);
                console.log(index);
                refreshList();
            })
            listItem.append(nameContent, countryContent, currentScore, increaseBtn, deleteBtn, decreaseBtn);
            playerList.append(listItem);
           
        });
            
    }

    

    // function increaseScoreHandler (i) {
    //     players[i].score += 5
    //     refreshList()
    // }


    // function decreaseScoreHandler (i) {
    //     players[i].score -= 5
    //     refreshList()
    // }