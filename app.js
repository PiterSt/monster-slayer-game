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
            var min = 3;
            var max = 10;
            var damage = Math.max(Math.floor(Math.random() * max + 1), min);
            this.monsterHealth -= damage;

            if (this.monsterHealth <= 0) {
                alert("You won!");
                this.gameIsRunning = false;
                return;
            }

            min = 5;
            max = 12;
            damage = Math.max(Math.floor(Math.random() * max + 1), min);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert("You lost!");
                this.gameIsRunning = false;
                return;
            }
        },
        specialAttack: function (){
            
        },
        heal: function(){

        },
        giveUp: function(){
            this.gameIsRunning = false
        }
    }
});