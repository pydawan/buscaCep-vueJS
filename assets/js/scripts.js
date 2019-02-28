var app = new Vue({
    el: '#app',
    data: function() {
        return {
            cep: '',
            logradouro: '',
            num: '',
            complemento: '',
            bairro: '',
            cidade: '',
            estado: ''
        }
    },
    methods: {
        buscaCep: function() {
            this.cep = this.cep.trim().replace(/[^0-9]/g, '')
            if (this.cep.length === 8) {
                axios.get('https://viacep.com.br/ws/' + this.cep + '/json/')
                    .then(resp => {
                        //  console.log(resp.data);
                        this.logradouro = resp.data.logradouro;
                        this.bairro = resp.data.bairro;
                        this.cidade = resp.data.localidade;
                        this.estado = resp.data.uf;
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
        },
    }
});