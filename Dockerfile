FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build && npm prune --production

# Expose the port that the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", ".output/server/index.mjs"]
