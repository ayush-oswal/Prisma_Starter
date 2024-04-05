# Prisma Starter with Neon's Cloud PostgreSQL Database

This project serves as a starter code for setting up a Prisma project with Neon's Cloud PostgreSQL database. It includes basic CRUD operations for managing Todo items.

## Setup Instructions

### 1. Prerequisites
- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- Neon's Cloud PostgreSQL database credentials or a local PostgreSQL server

### 2. Clone the Repository
Clone this repository to your local machine using Git:

`
git clone https://github.com/ayush-oswal/Prisma_Starter

`

### 3. Set up Environment Variables
Create a `.env` file in the root directory of the project based on the provided `.env.example` file. Replace the `DATABASE_URL` with the connection URL for your PostgreSQL database. If you're using Neon's Cloud, you can find this URL in your Neon's Cloud dashboard.

### 4. Install Dependencies
Install project dependencies by running the following command in the terminal:

`
npm install
`

### 5. Run the Project
Start the development server using the following command:

`
npm run start
`