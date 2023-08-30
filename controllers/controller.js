import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const getTask = async (_, res) => {
  try {
    const tasks = await prisma.apontamento.findMany();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getTaskById = async (req, res) => {
  const taskId = parseInt(req.params.id);

  try {
    const task = await prisma.apontamento.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      res.status(404).json({ message: 'Tarefa não encontrada.' });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const addTask = async (req, res) => {
  const { nome, atividade, horas, date } = req.body;

  try {
    const newTask = await prisma.apontamento.create({
      data: { nome, atividade, horas, date },
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTask = async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { nome, atividade, horas, date } = req.body;

  try {
    const updatedTask = await prisma.apontamento.update({
      where: { id: taskId },
      data: { nome, atividade, horas, date },
    });

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTask = async (req, res) => {
  const taskId = parseInt(req.params.id);

  try {
    await prisma.apontamento.delete({
      where: { id: taskId },
    });

    res.status(200).json({ message: 'Tarefa deletada com sucesso.' });
  } catch (error) {
    res.status(500).json(error);
  }
};
