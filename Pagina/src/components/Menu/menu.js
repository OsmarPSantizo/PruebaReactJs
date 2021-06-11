const Menu = [
    {
        id: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Lista simplemente enlazada",
        category: "Estructuras lineales",
        description: 'Es una lista enlazada de nodos, donde cada nodo tiene un único campo de enlace. Una variable de ' +
            'referencia contiene una referencia al primer nodo, cada nodo (excepto el último) enlaza con el nodo siguiente,' +
            ' y el enlace del último nodo contiene NULL para indicar el final de la lista. '
    },

    {
        id: 2,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Lista doblemente enlazada",
        category: "Estructuras lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Lista circular simplemente enlazada",
        category: "Estructuras lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Lista circular doblemente enlazada",
        category: "Estructuras lineales",
        price: "50₹",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Pila",
        category: "Estructuras lineales",
        price: "80₹",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 6,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Cola",
        category: "Estructuras lineales",
        price: "180₹",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Cola de prioridad",
        category: "Estructuras lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 8,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Burbuja",
        category: "Ordenamientos",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 9,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Selección",
        category: "Ordenamientos",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Inserción",
        category: "Ordenamientos",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 11,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Rápido",
        category: "Ordenamientos",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 12,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Árbol binario de búsqueda",
        category: "Estructuras arbóreas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 13,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"AVL",
        category: "Estructuras arbóreas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 14,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Árbol B",
        category: "Estructuras arbóreas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Árbol B+",
        category: "Estructuras arbóreas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 16,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Árbol de Merkle",
        category: "Estructuras arbóreas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 17,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Tabla Hash abierta",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 18,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Tabla Hash cerrada",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 19,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Recorrido y búsqueda por anchura de grafos",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Recorrido y búsqueda por profundidad de grafos",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 21,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Algoritmo de costo uniforme",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 22,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Árbol de recubrimiento mínimo",
        category: "Estructuras no lineales",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 23,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Código de hamming",
        category: "Algoritmo de codificación",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 24,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Algoritmo de Huffman",
        category: "Algoritmo de codificación",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 25,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Algoritmo LZW",
        category: "Algoritmo de codificación",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 26,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Cifrado Feistel",
        category: "Algoritmo de codificación",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 27,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Cifrado RSA",
        category: "Algoritmo de codificación",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 28,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Matrices dispersas",
        category: "Estructuras Compuestas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 29,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Row-major (2D a 1D)",
        category: "Estructuras Compuestas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 30,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Col-major (2D a 1D)",
        category: "Estructuras Compuestas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },
    {
        id: 31,
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png",
        name:"Construcción de estructuras compuestas",
        category: "Estructuras Compuestas",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
    },



];



export default Menu;