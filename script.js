// Referencias a los elementos del DOM
const inputNombre = document.getElementById("inputNombre");
const inputCurso = document.getElementById("inputCurso");
const inputFecha = document.getElementById("inputFecha");

const nombre = document.getElementById("nombre");
const curso = document.getElementById("curso");
const fecha = document.getElementById("fecha");
const btnDownload = document.getElementById("btnDownload");

// 3. Manejo de JS dinámico
inputNombre.addEventListener("input", () => {
    nombre.innerText = inputNombre.value;
});

inputCurso.addEventListener("input", () => {
    curso.innerText = inputCurso.value;
});

inputFecha.addEventListener("change", () => {
    fecha.innerText = inputFecha.value;
});

// 5. Crear un documento PDF
btnDownload.addEventListener("click", () => {
    const element = document.getElementById('certificado');
    const opt = {
        margin: 0,
        filename: `Certificado_${inputNombre.value || 'Estudiante'}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'px', format: [800, 600], orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
});