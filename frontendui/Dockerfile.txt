# Use an official node image as the base image
FROM node:16-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use an official nginx image as the base image for the deployment
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the application runs on
EXPOSE 3000

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
