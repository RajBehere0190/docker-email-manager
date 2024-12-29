FROM node:latest

# Create app directory
WORKDIR /app

# Copy app files
COPY . /app

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["node", "index.js"]
