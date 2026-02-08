import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';

const projects = [
  {
    id: 1,
    title: 'Face Recognition Brain',
    short: 'Full-Stack Web-Applikation zur Gesichtserkennung, die eine externe KI-Schnittstelle nutz',
    imgurl:'magicBrain',
    details:{
      desc:'Eine Full-Stack Web-Applikation zur Gesichtserkennung, die eine externe KI-Schnittstelle nutzt und über ein eigenes User-Management inklusive Datenbank verfügt.',
      features: [
        {
          title: '🔐 Authentifizierung & Sicherheit (Auth)',
          items: [
            'Registrierung und Login-Funktion mit verschlüsselten Passwörtern.',
            'Sicherheit: Passwörter werden niemals im Klartext gespeichert, sondern mittels bcrypt gehasht.',
            'Sitzungsverwaltung via JSON Web Tokens (JWT).'
          ],
          icon:<SettingsIcon sx={{ fontSize: '1.2rem' }}/>
        },
        {
          title: '🧠 KI & Bildanalyse (Vision)',
          items: [
            'KI-Integration: Kommunikation mit der Clarifai-API zur Bildanalyse.',
            'Dynamische Erkennung und Anzeige von Gesichtern in Bildern.'
          ]
        },
        {
          title: '⚙️ Backend & Datenlogik (Logic)',
          items: [
            'Profil-Tracking: Ein individueller Zähler im Backend verfolgt die Anzahl der Bilder pro Nutzer.',
            'Datenbank-Management mit TiDB/MySQL zur persistenten Speicherung.'
          ]
        },
        {
          title: '🎨 Design & UX (UI)',
          items: [
            'Responsives Design: Die Oberfläche passt sich verschiedenen Bildschirmgrößen an.',
            'Interaktive Benutzeroberfläche mit modernem Feedback-System.'
          ]
        }
      ]
    } ,
    api:'https://github.com/tabetommy/faceRecognitionApp-api',
    demo:'https://tabetommy.github.io/facerecognition/',
    sourceCode:'https://github.com/tabetommy/facerecognition',
    stack: ['React', 'Node.js', 'Express', 'TiDB/MySQL', 'bcrypt', 'JWT', 'Clarifai API']
  },
  {
    id: 2,
    title: 'myFlix',
    short: 'myFlix ist eine voll funktionsfähige MERN-Stack-Webanwendung, die es Kinoliebhabern ermöglicht, Informationen über Filme, Regisseure und Genres zu entdecken',
    imgurl:'myFlixClient',
    details: {
      desc:'myFlix ist eine voll funktionsfähige MERN-Stack-Webanwendung, die es Kinoliebhabern ermöglicht, Informationen über Filme, Regisseure und Genres zu entdecken. Die App bietet eine personalisierte Benutzererfahrung, bei der Nutzer Profile erstellen und ihre eigene Favoritenliste verwalten können – alles verpackt in einem modernen, reaktiven Design.',
      features: [
        {
          title: '🔐 Authentifizierung & Sicherheit (Auth)',
          items: [
            'JWT-Validierung: Die Anwendung nutzt JSON Web Tokens (JWT) für einen sicheren Login-Prozess. Nur authentifizierte Nutzer können auf die Filmbibliothek zugreifen.',
            'Sichere Datenspeicherung: Passwörter werden serverseitig verschlüsselt, bevor sie in der Datenbank gespeichert werden.',
          ],
          icon:<SettingsIcon sx={{ fontSize: '1.2rem' }}/>
        },
        {
        title: '⚙️ Backend-Logik & API',
        items: [
          'RESTful Architektur: Die API wurde mit Node.js und Express entwickelt und bietet Endpunkte für alle CRUD-Operationen (Create, Read, Update, Delete).',
          'Datenbank-Integration: Eine MongoDB Atlas Instanz speichert die Filmdaten und Nutzerinformationen in einer flexiblen, dokumentenbasierten Struktur.',
          'CORS & Middleware: Implementierung von Cross-Origin Resource Sharing (CORS), um eine sichere Kommunikation zwischen dem Railway-Backend und dem GitHub Pages-Frontend zu ermöglichen.',
        ],
        icon:<SettingsIcon sx={{ fontSize: '1.2rem' }}/>
        },
        {
        title: '🎨 Frontend & UI-Design',
        items: [
          'React Architektur: Aufbau einer Single-Page-Application (SPA) mit React-Klassenkomponenten, wobei der Fokus auf einem effizienten Lifecycle-Management liegt.',
          'Zentralisierter State: Einsatz von Redux, um den globalen Anwendungsstatus (Filmliste und Nutzerdaten) konsistent über alle Ansichten hinweg zu verwalten.',
          'Responsive Design: Verwendung von React-Bootstrap, um ein konsistentes Erlebnis auf Smartphones, Tablets und Desktops zu garantieren.',
          'Interaktive UI: Echtzeit-Filterung der Filme über eine Suchfunktion und dynamische Visualisierung der Favoriten (Herz-Icons).'
        ],
        icon:<SettingsIcon sx={{ fontSize: '1.2rem' }}/>
        },
      ]
    },
    api:'https://github.com/tabetommy/movie_api',
    demo:'https://tabetommy.github.io/myFlix_client/',
    sourceCode:'https://github.com/tabetommy/myFlix_client',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'bcrypt', 'JWT', 'REDUX']
  },
  {
    id: 3,
    title: 'Portfolio Site',
    short: 'This demo portfolio built with React and MUI.',
    details: 'A minimal portfolio demonstrating routing, theming and project pages.',
    tech: ['React', 'MUI', 'React Router'],
    imgurl:'magicBrain'
  }
];

export default projects;
