pipeline{
  agent any
stages{
stage ( 'Cloning Private Git Repo'){
  steps {
   git branch: 'main', url: 'https://github.com/practicebaladebitcardaws-ops/Private-Repo' 
        }
          }
stage ('Building Ware File'){
  steps {
   dir('/var/lib/jenkins/workspace/ff/Spring-Boot-Application-Practice/') {      
   sh 'mvn clean package'
}
}
}
stage ('Docker Image Build'){
steps {
dir('/var/lib/jenkins/workspace/ff/Spring-Boot-Application-Practice/'){
  sh 'docker build -t venkaiahk/cicd-springapp:v1 .'
}
}
}
stage ('Creating Docker Container') {
steps {
sh 'docker run -dt -p 8082:8080 venkaiahk/cicd-springapp:v1'
}

}
}       }
