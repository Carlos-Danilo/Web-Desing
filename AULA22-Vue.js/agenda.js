var contatos = [
    // criação de variável de lista de objetos
    {
        nome: "Ludimila",
        cel: "8799985655",
        foto: "lud.jpg",
        favorito: false
    },
    {
        nome: "Amanda",
        cel: "8799985655",
        foto: "amanda.jpg",
        favorito: false
    },
    {
        nome: "Andre",
        cel: "8799985655",
        foto: "zangado.jpg",
        favorito: true
    },
    {
        nome: "Luca",
        cel: "8799985655",
        foto: "bob.jpg",
        favorito: true
    },
    {
        nome: "Davi",
        cel: "8799985655",

        favorito: false
    },
    {
        nome: "João",
        cel: "8799985655",

        favorito: true
    }

]



const agenda = {
    data(){
        return{
            titulo: "Agenda de contatos",
            contatos: window.contatos
        }
    }
}




Vue.createApp(agenda).mount("#app");