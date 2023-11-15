# Use an official Node.js runtime as a base image
FROM node:18.16.0-alpine3.17

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

#Install global dependency for pm2
RUN npm install pm2 -g

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3030


# Define the command to run your app
CMD [ "pm2-runtime", "npm", "--", "start" ]
