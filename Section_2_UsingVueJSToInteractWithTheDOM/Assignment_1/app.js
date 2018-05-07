new Vue({
    el: '#exercise',
    data: {
        name: 'Chris Adkins',
        age: 21,
        imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Vue.svg/1200px-Vue.svg.png'
    },
    methods: {
        randomNum: function() {
            return Math.random();
        },
    }
})