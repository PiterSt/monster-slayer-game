new Vue({
    el: '#app',
    data: {
        playerHealth: 0,
        monsterHealth: 0,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startNewGame: function(){
            this.gameIsRunning = true,
            this.playerHealth = 100,
            this.monsterHealth = 100,
            this.turns = [];
        },
        attack: function(){
            var damage = this.calculateDamage(3,10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function (){
            var damage = this.calculateDamage(10,20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster with SPECIAL ATTACK for ' + damage
            })
            if (this.checkWin()){
                return;
            }
            this.monsterAttacks();
        },
        heal: function(){
            if (this.playerHealth >= 90){
                this.playerHealth = 100;
            } else {
                this.playerHealth += 10;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player gets 10 units of healing'
            })
            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },

        monsterAttacks: function(){
            var damage = this.calculateDamage(5,12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
            this.checkWin();
        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max + 1), min);
        },

        checkWin: function(){
            if (this.monsterHealth <= 0) {
                if (confirm("HURRAY!!\nYou've killed the Monster!\nPlay again?")) {
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