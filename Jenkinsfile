pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage("Build") {
            steps {
                sh "cp .env.example .env"
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /var/www/reactjs-tutorial"
                sh "cp -r ${WORKSPACE}/build/ /var/www/reactjs-tutorial/html/"
            }
        }
    }
}