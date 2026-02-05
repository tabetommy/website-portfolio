const projects = [
  {
    id: 1,
    title: 'Face Recognition Brain',
    short: 'Full-Stack Web-Applikation zur Gesichtserkennung, die eine externe KI-Schnittstelle nutz',
    tech: ['React', 'MUI', 'localStorage'],
    imgurl:'magicBrain',
    details:{
      desc:'Eine Full-Stack Web-Applikation zur Gesichtserkennung, die eine externe KI-Schnittstelle nutzt und über ein eigenes User-Management inklusive Datenbank verfügt.',
      features:[
        'KI-Integration: Kommunikation mit der Clarifai-API zur Bildanalyse.',
        'Authentifizierung: Registrierung und Login-Funktion mit verschlüsselten Passwörtern.',
        'Profil-Tracking: Ein individueller Zähler im Backend verfolgt die Anzahl der hochgeladenen Bilder pro Nutzer.',
        'Responsives Design: Die Oberfläche passt sich verschiedenen Bildschirmgrößen an (Desktop & Mobile).',
        'Sicherheit: Passwörter werden niemals im Klartext gespeichert, sondern mittels bcrypt gehasht.'
      ]
    } ,
    sourcecode:'https://github.com/tabetommy/faceRecognitionApp-api',
    demo:'https://tabetommy.github.io/facerecognition/'
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    short: 'Shows weather data for locations with charts.',
    details: 'Weather Dashboard fetches data from an external API and displays forecasts and charts.',
    tech: ['React', 'API', 'Chart.js'],
    imgurl:'magicBrain'
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
