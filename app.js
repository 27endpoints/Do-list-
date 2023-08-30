document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", async function () {
    const taskText = taskInput.value;
    if (taskText) {
      const newTask = { text: taskText };
      await createTask(newTask);
      taskInput.value = "";

      const li = document.createElement("li");
      li.textContent = newTask.text;
      taskList.appendChild(li);
    }
  });

  async function createTask(task) {
    // Your createTask implementation using Cosmos DB
  }
});
//cosmdb azure functionality
const cosmos = require("@azure/cosmos");

const endpoint = "https://d976a932-0ee0-4-231-b9ee.documents.azure.com:443/";
const key = process.env.COSMOS_DB_KEY;
const databaseId = "sampleDB";
const containerId = "tasks";

const client = new cosmos.CosmosClient({ endpoint, key });

async function createTask(task) {
  const database = client.database(databaseId);
  const container = database.container(containerId);

  const { resource: createdTask } = await container.items.create(task);
  return createdTask;
}

async function getTasks() {
  const database = client.database(databaseId);
  const container = database.container(containerId);

  const { resources: tasks } = await container.items.readAll().fetchAll();
  return tasks;
}
