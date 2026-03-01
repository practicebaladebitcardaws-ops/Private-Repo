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
   sh 'mvn clean package'
}
}

stage ('Docker Image Build'){
steps {

  sh 'docker build -t venkaiahk/cicd-springapp:v1 .'
}
}
stage ('Pushing Docker Image to the Docker registry'){
  steps {
withCredentials([string(credentialsId: 'cd398dc0-ea30-48e3-a5ad-47e972b9a708', variable: 'docker pwd')]) {
sh 'docker push -u venkaiahk -p ${docker pwd}'
sh 'docker rmi venkaiahk/cicd-springapp:v1'
}
}
}
stage ('Creating Docker Container') {
steps {
sh 'docker run -dt -p 8081:8080 venkaiahk/cicd-springapp:v1
}
}
}
       }
