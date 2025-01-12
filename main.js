// Seleccionar todas las preguntas
const questions = document.querySelectorAll('.question');

// Configurar eventos para cada pregunta
questions.forEach((question) => {
const btnAbrir = question.querySelector('.btn-abrir');
const btnCerrar = question.querySelector('.btn-cerrar');
const respuesta = question.querySelector('.respuesta');

  // Mostrar respuesta
btnAbrir.addEventListener('click', () => {
    // Primero, cerrar cualquier respuesta abierta
    questions.forEach(q => {
    const res = q.querySelector('.respuesta');
    const openBtn = q.querySelector('.btn-abrir');
    const closeBtn = q.querySelector('.btn-cerrar');

      // Si la respuesta está visible, cerrarla
    if (res.classList.contains('visible')) {
        res.classList.remove('visible');
        closeBtn.style.display = 'none';
        openBtn.style.display = 'inline-block';
    }
    });

    // Ahora, abrir la respuesta de la pregunta actual
    respuesta.classList.add('visible'); // Muestra la respuesta
    btnAbrir.style.display = 'none'; // Oculta el botón "+"
    btnCerrar.style.display = 'inline-block'; // Muestra el botón "-"
});

  // Ocultar respuesta
btnCerrar.addEventListener('click', () => {
    respuesta.classList.remove('visible'); // Oculta la respuesta
    btnCerrar.style.display = 'none'; // Oculta el botón "-"
    btnAbrir.style.display = 'inline-block'; // Muestra el botón "+"
});
});