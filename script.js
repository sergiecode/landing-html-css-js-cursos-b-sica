document.addEventListener('DOMContentLoaded', function () {
    // Información de los cursos
    const courses = [
        {
            id: 'N8Xt5rP_DUo',
            title: 'Curso de JavaScript desde Cero',
            description: 'Aprende a programar en JavaScript desde cero y conviértete en un experto.',
            duration: '8:16:59',
            level: 'Principiante'
        },
        {
            id: 'ladwC6Lrs-M',
            title: 'Curso de React desde cero',
            description: 'Aprende a crear interfaces de usuario modernas y reactivas con React.',
            duration: '7:33:39',
            level: 'Intermedio'
        },
        {
            id: 'soInCF7nbDw',
            title: 'Curso de Angular desde Cero',
            description: 'Aprende a crear aplicaciones web modernas y escalables con Angular.',
            duration: '7:58:48',
            level: 'Avanzado'
        },
        {
            id: '_uPVSW0cF6c',
            title: 'Curso de Python desde Cero',
            description: 'Aprende a programar en Python desde cero y conviértete en un experto.',
            duration: '7:50:10',
            level: 'Todos los niveles'
        },
        {
            id: 'yZyigBseFLE',
            title: 'JavaScript Avanzado',
            description: 'Aprende Programación Orientada a Objetos, Programación Funcional y más.',
            duration: '1:34:16',
            level: 'Avanzado'
        },
        {
            id: 'NlKzy-yRAuI',
            title: 'Python Avanzado',
            description: 'Aprende a trabajar con bases de datos, APIs, fastAPI y más.',
            duration: '1:23:05',
            level: 'Avanzado'
        },
        {
            id: 'tIS-1PmHAkE',
            title: 'Lógica de programación',
            description: 'Aprende los fundamentos de la lógica de programación.',
            duration: '2:30:00',
            level: 'Principiante'
        },
        {
            id: 'VFgvh2R8iio',
            title: 'React avanzado',
            description: 'Profundiza en el desarrollo con React y aprende técnicas avanzadas.',
            duration: '3:45:00',
            level: 'Avanzado'
        },
        {
            id: '-vMWMGM_Dys',
            title: 'Angular avanzado',
            description: 'Domina Angular con técnicas y patrones avanzados.',
            duration: '4:00:00',
            level: 'Avanzado'
        }
    ];

    // Renderizar los cursos
    const coursesContainer = document.getElementById('courses-container');

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        courseCard.innerHTML = `
            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${course.id}" 
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