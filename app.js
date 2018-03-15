new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
    },
    methods: {
        switchGameModeToTrue: function() {
            this.gameInProgress = true;
        },
        switchGameModeToFalse: function() {
            this.gameInProgress = false;
        },
    }
})