FROM node:20-alpine
WORKDIR /app

# 1. Pehle sirf package files copy karo
COPY package*.json ./

# 2. Saare tools (node_modules) install karo
RUN npm install

# 3. Ab baaki ka saara code copy karo
COPY . .

# YE LINE ADD KAREIN (React dev server chalu karne ke liye)
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]