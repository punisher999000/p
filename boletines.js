// Datos de los boletines (puedes reemplazar esto con una llamada a una API o base de datos)
const boletines = [
    {
        id: 1,
        titulo: "La Revuelta",
        fecha: "2023-5-26",
        descripcion: "Evento que lo cambia todo",
        destacado: true,
        archivo: "boletin1.html"
    },
    {
        id: 1,
        titulo: "Un Dios refrescante",
        fecha: "2023-5-30",
        descripcion: "Arreglos por aqui y por allá",
        destacado: true,
        archivo: "boletin2.html"
    }
];

// Función para formatear la fecha
function formatearFecha(fechaStr) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fechaStr).toLocaleDateString('es-ES', opciones);
}

// Función para cargar los boletines en la página
function cargarBoletines() {
    const contenedor = document.getElementById('boletines-container');
    
    boletines.forEach(boletin => {
        const boletinElemento = document.createElement('div');
        boletinElemento.className = `manga-news-card ${boletin.destacado ? 'featured' : ''}`;
        
        boletinElemento.innerHTML = `
            <span class="news-badge ${boletin.destacado ? 'blood-badge' : 'new-badge'}">
                ${boletin.destacado ? 'DESTACADO' : 'NUEVO'}
            </span>
            <span class="news-badge legend-badge">${formatearFecha(boletin.fecha)}</span>
            
            <h3 class="news-title">${boletin.titulo}</h3>
            <div class="news-content">
                <p>${boletin.descripcion}</p>
            </div>
            <a href="${boletin.archivo}" class="manga-button">Leer más</a>
        `;
        
        contenedor.appendChild(boletinElemento);
    });
}

// Cargar boletines cuando la página esté lista
document.addEventListener('DOMContentLoaded', cargarBoletines);