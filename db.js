import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

class Database {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async connect() {
    try {
      await this.prisma.$connect();
      console.log('Conectado ao banco de dados');
    } catch (error) {
      console.error('Erro de conexão:', error);
      throw error;
    }
  }

  async disconnect() {
    await this.prisma.$disconnect();
  }
}

export default Database;
