# step 1
FROM node:20-alpine

#step 2
WORKDIR /app

#step 3
COPY package*.json ./
RUN npm install

#step4
COPY . .

# Step 5: Port 5173 ko expose karein (Vite default port)
EXPOSE 5173

# Step 6: App ko run karne ki command
CMD ["npm", "run", "dev", "--", "--host"]