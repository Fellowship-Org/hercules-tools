pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Sleep for a random duration between 10 seconds and 5 minutes
                script {
                    def sleepDuration = Math.random() * 270 + 10 // 10-279 seconds
                    sleep(sleepDuration)
                }
            }
        }
    }
}
