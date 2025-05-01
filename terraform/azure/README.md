# Azure Kubernetes Service (AKS) Deployment

This directory contains Terraform configurations for deploying the Octobit8 website to Azure Kubernetes Service (AKS).

## Prerequisites

1. Azure CLI installed
2. Terraform installed
3. Azure subscription with sufficient permissions
4. Azure DevOps organization and project

## Infrastructure Components

- Azure Resource Group
- Azure Container Registry (ACR)
- Azure Kubernetes Service (AKS) cluster
- Virtual Network and Subnet
- Load Balancer
- Kubernetes Namespace, Deployment, and Service

## Deployment Steps

1. Initialize Terraform:

   ```bash
   terraform init
   ```

2. Create a terraform.tfvars file with your specific values:

   ```hcl
   resource_group_name = "your-resource-group"
   location           = "eastus"
   acr_name          = "your-acr-name"
   cluster_name      = "your-aks-cluster"
   ```

3. Plan the deployment:

   ```bash
   terraform plan
   ```

4. Apply the configuration:
   ```bash
   terraform apply
   ```

## Azure DevOps Pipeline

The `azure-pipelines.yml` file defines the CI/CD pipeline that:

1. Builds the Docker image
2. Pushes it to Azure Container Registry
3. Deploys the application to AKS

### Pipeline Variables

Create a variable group named `octobit8-variables` in Azure DevOps with:

- `azureSubscription`: Azure service connection name
- `servicePrincipalId`: Service principal ID
- `servicePrincipalKey`: Service principal key
- `tenantId`: Azure tenant ID
- `resourceGroupName`: Resource group name
- `clusterName`: AKS cluster name
- `acr_name`: ACR name
- `app_name`: Application name
- `namespace`: Kubernetes namespace

## Accessing the Application

After deployment, the application will be accessible via the Load Balancer IP address. You can get the IP address using:

```bash
kubectl get service octobit8-website -n octobit8
```

## Monitoring

- Use Azure Monitor for container insights
- View logs in Azure Log Analytics
- Monitor AKS cluster metrics in Azure Portal

## Maintenance

- Scale the application by updating the `replica_count` variable
- Update the application by pushing a new image to ACR
- The pipeline will automatically deploy updates to AKS

## Security

- AKS uses managed identities
- ACR is private and requires authentication
- Network security groups restrict access
- Kubernetes RBAC is enabled
