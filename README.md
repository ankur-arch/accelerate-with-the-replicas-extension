# Prisma Accelerate with Read Replica Testing

This repository contains code to test out Prisma Accelerate and verify whether read replicas are functioning properly.

## Getting Started

To get started with this code, follow these steps:

Clone the repository to your local machine:

```bash
git clone <repository_url>
```

Install dependencies:

```bash
bun install
```

### Set up environment variables

`DATABASE_URL`: URL of your main database.

`SECOND_ACCELERATE_URL`: URL of your second accelerated database (for read replica).
Run the code:

```bash
bun run index.ts
```

Prerequisites
Ensure you have Node.js installed on your machine.

## Description

This code initializes a Prisma client with Accelerate and Read Replicas extensions. It then performs count operations on the user table using both the primary and replica databases to verify the functionality of read replicas.