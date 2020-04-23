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
        },
        attack: function(){
            this.monsterHealth -= this.calculateDamage(3,10);
            if (this.checkWin()){
                return;
            }

            this.playerHealth -= this.calculateDamage(5,12);
            this.checkWin();
        },
        specialAttack: function (){
            
        },
        heal: function(){

        },
        giveUp: function(){
            this.gameIsRunning = false
        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max + 1), min);
        },

        checkWin: function(){
            if (this.monsterHealth <= 0) {
                if (confirm("You've killed the Monster!\nPlay again?")) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            if (this.playerHealth <= 0) {
                if (confirm("You've been killed by the Monster!\nPlay again?")) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
             return false;   
        }
    }
});