document.addEventListener('DOMContentLoaded', function() {
    // Información de los cursos
    const courses = [
        {
            id: 'N8Xt5rP_DUo',
            title: 'Aprende desarrollo web desde cero',
            description: 'Explora los fundamentos del desarrollo web con HTML, CSS y JavaScript.',
            duration: '45:30',
            level: 'Principiante'
        },
        {
            id: 'ladwC6Lrs-M',
            title: 'Curso de JavaScript avanzado',
            description: 'Domina las técnicas y patrones avanzados de JavaScript para mejorar tus aplicaciones.',
            duration: '1:12:45',
            level: 'Intermedio'
        },
        {
            id: 'soInCF7nbDw',
            title: 'Construye aplicaciones con React',
            description: 'Aprende a crear interfaces de usuario modernas y reactivas con React.',
            duration: '2:05:10',
            level: 'Avanzado'
        },
        {
            id: '_uPVSW0cF6c',
            title: 'Diseño UI/UX para desarrolladores',
            description: 'Mejora tus habilidades de diseño y crea interfaces más atractivas y usables.',
            duration: '58:22',
            level: 'Todos los niveles'
        }
    ];
    
    // Renderizar los cursos
    const coursesContainer = document.getElementById('courses-container');
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${course.id}" 
                        title="${course.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <div class="course-info">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-desc">${course.description}</p>
                <div class="course-meta">
                    <span>${course.duration}</span>
                    <span>${course.level}</span>
                </div>
                <a href="https://www.youtube.com/watch?v=${course.id}" class="btn" target="_blank">Ver curso</a>
            </div>
        `;
        
        coursesContainer.appendChild(courseCard);
    });
    
    // Animación simple al hacer scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});