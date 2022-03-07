FROM nginx:1.19.2
EXPOSE 80

# Copy the new build files over to Nginx
COPY build /etc/nginx/html/

# Configure Nginx
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf