FROM lscr.io/linuxserver/chromium:latest

# INSTALL NODE

RUN apt-get update && apt-get install -y \
    nodejs \
    npm

# CREATE APP FOLDER

WORKDIR /app

# COPY FILES

COPY . /app

# INSTALL PLAYWRIGHT

RUN npm install playwright

# INSTALL PLAYWRIGHT CHROMIUM

RUN npx playwright install chromium

# EXPOSE PORTS

EXPOSE 3000
EXPOSE 9222