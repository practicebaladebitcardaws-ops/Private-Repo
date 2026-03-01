FROM tomcat:latest
WORKDIR /usr/local/tomcat/webapps
COPY /var/lib/jenkins/workspace/ff/Spring-Boot-Application-Practice/target/*.jar /usr/local/tomcat/webapps
EXPOSE 8080
CMD [ "java", "-jar" , "demo-0.0.1.jar" ]y


