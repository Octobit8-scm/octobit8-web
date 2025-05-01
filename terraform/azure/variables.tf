variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "octobit8-rg"
}

variable "location" {
  description = "Azure region to deploy resources"
  type        = string
  default     = "eastus"
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default = {
    Environment = "Production"
    Project     = "Octobit8"
  }
}

variable "acr_name" {
  description = "Name of the Azure Container Registry"
  type        = string
  default     = "octobit8acr"
}

variable "cluster_name" {
  description = "Name of the AKS cluster"
  type        = string
  default     = "octobit8-aks"
}

variable "kubernetes_version" {
  description = "Kubernetes version"
  type        = string
  default     = "1.28.0"
}

variable "node_count" {
  description = "Number of nodes in the default node pool"
  type        = number
  default     = 2
}

variable "vm_size" {
  description = "Size of the VMs in the node pool"
  type        = string
  default     = "Standard_D2s_v3"
}

variable "namespace" {
  description = "Kubernetes namespace for the application"
  type        = string
  default     = "octobit8"
}

variable "app_name" {
  description = "Name of the application"
  type        = string
  default     = "octobit8-website"
}

variable "app_version" {
  description = "Version of the application to deploy"
  type        = string
  default     = "latest"
}

variable "replica_count" {
  description = "Number of replicas for the application"
  type        = number
  default     = 2
}
