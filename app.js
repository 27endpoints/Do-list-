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
