/*
    Buscando e contando dados em Arrays
     Baseado no array de livros por categoria abaixo:
         - Contar os números de categorias e o número de livros de cada categoria 
         - Contar o número de autores
         - Mostrar livros do autor Augusto cury
         - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.


    //
    Um sistema que procura livros pelo nome do autor.
*/

const livrosPorCategoria = [
    {
        categoria: 'Riqueza',
        livros: [
            {
                titulo: 'Os segredos da mente milionária',
                autor: 'T. Harv Eker',
            },
            {
                titulo: 'O homem mais rico da babilônia',
                autor: 'George S. Clason',
            },
            {
                titulo: 'Pai rico, pai pobre',
                autor: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        categoria: 'Inteligência emocional',
        livros: [
            {
                titulo: 'Você é insubstituível',
                autor: 'Augusto Cury',
            },
            {
                titulo: 'Ansiedade - Como enfrentar o mal do século',
                autor: 'Augusto Cury',
            },
            {
                titulo: 'Os 7 hábitos das pessoas altamente eficazes',
                autor: 'Stephen R. Covey',
            },
        ],
    }
]
//01 - Contar os números de categorias
const totalCategorias = livrosPorCategoria.length
console.log(totalCategorias + ' categorias para livros')

//02 e 03 - número de livros de cada categoria
for (categoria of livrosPorCategoria) {
    console.log(categoria.livros.length + ' livros na categoria ' + categoria.categoria)
}

//04 - Contar o número de autores
function quantAutores() {
    let autor = [];

    for (let categoria of livrosPorCategoria) {
        for (let livros of categoria.livros) {
            if (autor.indexOf(livros.autor) == -1) {
                autor.push(livros.autor)
            }
        }
    }

    console.log(autor.length + ' autores ')
}

quantAutores();

//05 - Mostrar livros do autor Augusto cury, depois transformar a mesma função em uma função que irá receber o nome de qualquer autor e devolver os livros desse autor.
function livrosDoAutor(autor) {
    let livros = [];

    for (let categoria of livrosPorCategoria) {
        for (let livro of categoria.livros) {
            if (livro.autor === autor) {
                livros.push(livro.titulo)
            }
        }
    }

    console.log('Livros do autor ' + autor + ': ' + livros.join("; "))
}

livrosDoAutor('George S. Clason');
livrosDoAutor('Augusto Cury');
