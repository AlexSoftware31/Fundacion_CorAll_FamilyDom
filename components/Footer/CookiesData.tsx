const dataRows = [
  { label: "Cookies técnicas", value: "Permiten el funcionamiento básico del sitio web, como la navegación y el acceso a áreas seguras." },
  { label: "Cookies de personalización", value: "Permiten recordar preferencias del usuario, como idioma o tipo de navegador." },
  {
    label: "Cookies de análisis",
    value: "Permiten analizar el comportamiento de los usuarios en el sitio web para mejorar los servicios ofrecidos.",
  },
  {
    label: "Cookies de terceros",
    value: "Pueden ser utilizadas por servicios externos (como herramientas de análisis o redes sociales) que recopilan información con fines estadísticos.",
    isEmail: false,
  },
];

const sections = [
  {
    number: "2",
    title: "Finalidad de las cookies",
    body: "Las cookies se utilizan para: garantizar el correcto funcionamiento del sitio web, mejorar la experiencia del usuario, analizar el uso del sitio, optimizar contenidos y servicios.",
  },
  {
    number: "3",
    title: "Gestión de cookies",
    body: "El usuario puede en cualquier momento: aceptar todas las cookies, rechazar algunas o todas, configurar su navegador para bloquearlas o eliminarlas. Ten en cuenta que la desactivación de cookies puede afectar el funcionamiento del sitio web.",
  },
  {
    number: "4",
    title: "Cómo desactivar las cookies",
    body: "Puedes configurar tu navegador para permitir, bloquear o eliminar cookies. A continuación, algunos ejemplos: Google Chrome, Mozilla Firefox, Safari y Microsoft Edge (La configuración depende del navegador utilizado).",
  },
  {
    number: "5",
    title: "Consentimiento",
    body: "Al acceder a este sitio web, el usuario acepta el uso de cookies conforme a esta política. No obstante, podrá modificar su consentimiento en cualquier momento a través de la configuración de su navegador.",
  },
  {
    number: "6",
    title: "Actualización de la política",
    body: "La Fundación Coral Family Dominicana podrá actualizar esta Política de Cookies en función de cambios legales o técnicos. Se recomienda revisarla periódicamente.",
  },
];

export { dataRows, sections };
