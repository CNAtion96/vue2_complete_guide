new Vue({
        el: '#exercise',
        data: {
            value: 0,
            result: 'not there yet'
        },
        computed: {
            computeResult: function() {
                this.result = value <= 35 ? 'not there yet' : 'done';
            }
        },
        watch: {
            result: function(value) {
                const vm = this;
                setTimeout(function(){
                    vm.result = 'not there yet'
                }, 5000)
            }
        }
    });