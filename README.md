# node-demo-webapp
A simple Node.js demonstration web application.

## Docker

Instructions on building and running the demonstration web application as a Docker image/container.

### Build and Run

```bash

# Build the image
$ docker build -t rooblue/demowebapp .

# List images
$ docker images

# Run the container from the image
$ docker run -p 3000:3000 -d rooblue/demowebapp

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# List all images
$ docker images -a

# Remove images
$ docker rmi <image tag>

```

### Pushing to AWS

```shell

Ensure you have installed the latest version of the AWS CLI and Docker. For more information, see the ECR documentation .

    Retrieve the login command to use to authenticate your Docker client to your registry.
    Use the AWS CLI:

    $(aws ecr get-login --no-include-email --region ap-southeast-2)

Note: If you receive an "Unknown options: --no-include-email" error when using the AWS CLI, ensure that you have the latest version installed. Learn more 
Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here 
. You can skip this step if your image is already built:

docker build -t gdc/example .

After the build completes, tag your image so you can push the image to this repository:

docker tag gdc/example:latest 838024688000.dkr.ecr.ap-southeast-2.amazonaws.com/rooblue/demowebapp:latest

Run the following command to push this image to your newly created AWS repository:

docker push 838024688000.dkr.ecr.ap-southeast-2.amazonaws.com/rooblue/demowebapp:latest

```