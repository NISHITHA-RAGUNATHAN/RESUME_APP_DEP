FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install @chakra-ui/icons
RUN npm install react-router-dom
RUN npm install axios
RUN npm install @chakra-ui/react
RUN npm install @emotion/react
RUN npm install @emotion/styled
RUN npm install @testing-library/jest-dom
RUN npm install @testing-library/react
RUN npm install @testing-library/user-event
RUN npm install docx
RUN npm install file-saver
RUN npm install firebase
RUN npm install framer-motion
RUN npm install html2canvas
RUN npm install jspdf
RUN npm install react
RUN npm install react-dom
RUN npm install react-helmet
RUN npm install react-icons
RUN npm install react-scripts
RUN npm install react-spinners
RUN npm install react-to-print
RUN npm install web-vitals
COPY . .
EXPOSE 3000
CMD ["npm", "start"]