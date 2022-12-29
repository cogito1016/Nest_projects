pipeline {
  agent any
  stages {
    stage('before_install') {
      steps {
        sh 'docker ps -q --filter "name=nest_proejcts" | grep -q . && docker stop nest_proejcts && docker rm -fv nest_proejcts'
      }
    }

    stage('docker_build') {
      steps {
        sh 'docker build -t nest_projects_image'
      }
    }

    stage('docker_run') {
      steps {
        sh 'docker run -d -p 3000:3000 --name nest_proejcts --restart always docker build -t nest_projects_image'
      }
    }

  }
}