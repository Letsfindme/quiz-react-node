1 - Préparation du front
- npm init
- touch readme.md

Client
npm install react
npm install react-dom
npm install react-router
npm install react-router-dom
npm install history

API
npm install axios

Redux pour les pros :)
npm install redux
npm install redux-devtools
npm install redux-devtools-extension
npm install redux-logger

Style
npm install --save-dev less
npm install --save-dev autoprefixer

Bundler - Parcel
npm install --save-dev parcel-bundler

Place au SRC

mkdir src
cd src
touch index.html --> entrée html --> là où se trouvera notre id root pour monter l'appli React
touch index.js --> entrée js --> déclaration de react ici

mkdir less
cd less
touch style.less

cd .. 
mkdir js
cd js
mkdir pages
mkdir components
mkdir reducers
touch app.jsx --> Notre point d'entrée React
touch store.js --> Initialization de notre store
touch reducers.js --> Initialisation de notre reducers

On remplie les files, je leur donnerai le code

Lancement du projet 

Ajout des scrits : 

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },

Ourraaa ! 

Seconde partie --> Création de contentful - check

Création du compte
Récupération des variables d'environnment, de space et d'access token

Troisième partie --> Préparation de l'environnement de production

Création d'un fichier .env qui nous servira à simuler un process.env pour stocker des variables sur le serveur et non dans les fichers de l'application pour la sécurité.

Création d'un fichier config

npm install dotenv
dans .src, mkdir utils
touch api.js

Troisième partie --> heberger en ligne ce que nous venons de faire
On va sur netlify et on prend notre repo
On ajoute les fonctions suivantes : 

npm run build pour build le projet
et dist dans le dossier

Une fois le sie en preview, allez le consulter.
Maintenant nous allons rajouter des variables d'environnements
Ajoutons un console.log de notre config pour savoir si c'est okay :)

Bien ! Nous sommes maintenant prêt à coder ! Tout est prêt, et le site est en ligne :)

Okay, maintenant, connectons notre front & notre back avec le client Contentful

npm install contentful --> client contenful pour pouvoir faire des POST/PUT/PATCH/DELETE ...

Retournons dans notre api.js