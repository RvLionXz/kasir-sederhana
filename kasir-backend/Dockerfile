FROM node:18

# Set direktori kerja di dalam container
WORKDIR /app

# Copy dan install dependensi
COPY package*.json ./
RUN npm install

# Install PM2
RUN npm install -g pm2

# Copy semua file ke dalam container
COPY . .

# Expose port backend
EXPOSE 3031

# Running PM2
CMD ["pm2-runtime", "server.js", "--name", "backend-kasir"]
