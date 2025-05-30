document.addEventListener('DOMContentLoaded', function() {
    // Efecto de carga para los previews
    const previews = document.querySelectorAll('.news-preview');
    
    previews.forEach((preview, index) => {
        preview.style.opacity = '0';
        preview.style.transform = 'scale(0.9)';
        preview.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            preview.style.opacity = '1';
            preview.style.transform = 'scale(1)';
        }, 100 * index);
    });
    
    // Botón de compartir (para la página de boletín)
    const shareBtn = document.querySelector('.share-button');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                }).catch(err => {
                    console.log('Error al compartir:', err);
                });
            } else {
                alert('Comparte este boletín copiando el enlace de tu navegador.');
            }
        });
    }
    
    // Efecto hover para los previews
    previews.forEach(preview => {
        preview.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 20px rgba(160, 16, 16, 0.6)';
        });
        
        preview.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 10px rgba(160, 16, 16, 0.3)';
        });
    });
    
    // Sistema para añadir nuevos previews dinámicamente
    const previewsContainer = document.querySelector('.previews-container');
    let previewCount = 5; // Comienza desde el #005
    
    // Función para añadir nuevo preview (puedes llamarla cuando necesites añadir uno)
    function addNewPreview(title) {
        previewCount++;
        const date = new Date();
        const formattedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        
        const newPreview = document.createElement('div');
        newPreview.className = 'news-preview';
        newPreview.innerHTML = `
            <div class="preview-header">
                <span class="preview-number">#${previewCount.toString().padStart(3, '0')}</span>
                <span class="preview-date">${formattedDate}</span>
            </div>
            <h3 class="preview-title">${title}</h3>
            <a href="#" class="preview-link">Próximamente</a>
        `;
        
        // Aplicar animación
        newPreview.style.opacity = '0';
        newPreview.style.transform = 'scale(0.9)';
        previewsContainer.prepend(newPreview);
        
        setTimeout(() => {
            newPreview.style.opacity = '1';
            newPreview.style.transform = 'scale(1)';
        }, 50);
    }
    
    // Ejemplo de cómo añadir un nuevo preview:
    // addNewPreview("Nuevo Boletín de Prueba");
});