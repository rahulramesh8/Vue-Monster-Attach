new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
        userAttackScores: [],
        monsterAttackScores: [],
    },
    methods: {
        switchGameMode: function() {
            if(this.gameInProgress === false) {
                this.gameInProgress = true;
            } else {
                this.gameInProgress = false;
            }
        },
        
        handleAttackClick: function() {
            this.userAttackScores.push(Math.floor((Math.random() * 5) + 1))
            this.monsterAttackScores.push(Math.floor((Math.random() * 5) + 1))
            console.log(this.userAttackScores, this.monsterAttackScores)
        }
    }
})