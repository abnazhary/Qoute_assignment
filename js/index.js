var qoutes = [
    {
        'qoute' : '“Be yourself; everyone else is already taken.”',
        'Auther' : '― Oscar Wilde',
    },
    {
        'qoute' : '“So many books, so little time.”',
        'Auther' : '― Frank Zappa',
    },
    {
        'qoute' : '“A room without books is like a body without a soul.”',
        'Auther' : '― Marcus Tullius Cicero',
    },
    {
        'qoute' : '“You know youre in love when you cant fall asleep because reality is finally better than your dreams.”',
        'Auther' : '― Dr. Seuss',
    },
    {
        'qoute' : '“You only live once, but if you do it right, once is enough.”',
        'Auther' : '― Mae West',
    }
]

function getQoutes(){
    var num = Math.floor(Math.random()* qoutes.length)
    console.log(num)

    document.getElementById("quote").innerHTML = qoutes[num].qoute
    document.getElementById("auther").innerHTML = qoutes[num].Auther
}