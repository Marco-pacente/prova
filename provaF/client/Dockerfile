# immagine node versione 20 debian? tipologia slim con pochi pacchetti (senza compilatori e tool sviluppo)
FROM node:20-bookworm-slim

# radice container
WORKDIR /app

# copia package e package-lock nella cartella di lavoro
COPY package*.json ./

# installa dipendenze prese dai singoli file package.json del file js (quindi inizializzare il pkg in locale)
RUN npm install --omit=dev

# copia tutto il contenuto della directory (./client) nella dir del container
COPY . .

# esecuzione su cmd node client.js
CMD ["node", "client.js"]