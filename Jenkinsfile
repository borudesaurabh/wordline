pipeline {
    agent { 
        node {
            label 'my_pc'
            }
      }
    triggers {
        pollSCM '* * * * *'
    }
     stages {
        stage('Build') {
            steps {
                echo "Building.."
                bat 'python hello.py'
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                
            }
        }
        stage('Deliver') {
            steps {
                echo "Delivery.."
            }
        }
    }
}
