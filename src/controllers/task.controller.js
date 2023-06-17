import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find(
    { user: req.user.id },
  )
  .populate('user'); // Autocompletado de copilot, usa const
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const newTask = new Task({
    title,
    description,
    date,
    user: req.user.id,
  }); // Se guarda en una instancia del modelo Task y se trabajara con ella para guardarla en la base de datos
  const taskSaved = await newTask.save();
  res.json(taskSaved);
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(204).json({ message: "No task found" });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);
  if (!task)
    return res.status(204).json({ message: "No task found then not deleted" });
  res.json(`La tarea ${task} ha sido eliminada`);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, date } = req.body;
  // const setTask = { title, description, date };
  const task = await Task.findByIdAndUpdate(
    id,
    { title, description, date },
    { new: true }
  ); // new: true devuelve el objeto actualizado en task, no el anterior

  res.json({ message: "Task updated" });
};
