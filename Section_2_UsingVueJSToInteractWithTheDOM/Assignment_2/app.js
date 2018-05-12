new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function() {
            alert("Value of input: " + this.value);
        },
        changeValue: function(e) {
            this.value = e.target.value;
        }
    }
});