new Vue({
    el: '#app',
    data: {
        gameInProgress: false,
    },
    methods: {
        switchGameModeToTrue: function() {
            gameInProgress = true;
        },
        switchGameModeToFalse: function() {
            gameInProgress = false;
        },
    }
})

// new Vue({
//     el: '#start-game',
//     methods: {
        
//     }
// })

// new Vue({
//     el: '#attack',
//     methods: {
        
//     }
// })

// new Vue({
//     el: '#special-attack',
//     methods: {
        
//     }
// })

// new Vue({
//     el: '#heal',
//     methods: {
        
//     }
// })

// new Vue({
//     el: '#give-up',
//     methods: {
        
//     }
// })