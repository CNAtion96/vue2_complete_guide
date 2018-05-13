new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    },
    watch: {
        counter: function(value) {
            const vm = this; 
            setTimeout(function(){
                vm.counter = 0;
            }, 2000)
        }
    }
    methods: {
        result: function() {
            return this.counter > 5 ? 'Greater than 5' : 'Less than 5';
        }
    }
})