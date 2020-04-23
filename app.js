new Vue({
    el: '#app',
    data: {
        playerHealth: 60,
        monsterHealth: 95,
        gameIsRunning: false
    },
    methods: {
        startNewGame: function(){
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100
        }
    }
});