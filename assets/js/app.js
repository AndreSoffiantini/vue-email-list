const app = new Vue({
    el: '#app',
    data: {
        email_list: []
    },
    methods: {},
    mounted() {

        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response => {
                    //console.log(this);
                    //console.log(response);
                    //console.log(response.data.response);

                    this.email_list.push(response.data.response);
                })
        }

        //console.log(this.email_list);

    }
})