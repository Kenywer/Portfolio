// firebase-config.js
import { initializeApp } from "firebase/app";  // Importa la función para inicializar Firebase
import { getAnalytics } from "firebase/analytics"; // Si deseas usar Firebase Analytics

// Aquí va la configuración que copiaste desde la consola de Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Si quieres usar Firebase Analytics, lo puedes inicializar también (opcional)
const analytics = getAnalytics(app);

// Exporta la configuración para usarla en otros archivos
export default app;
