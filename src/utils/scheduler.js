// File: src/utils/scheduler.js

class Scheduler {
  constructor() {
    this.scheduledTasks = [];
  }

  scheduleTask(task, time) {
    const newTask = { task, time };
    this.scheduledTasks.push(newTask);
  }

  runScheduledTasks() {
    setInterval(() => {
      const currentTime = new Date().getTime();
      this.scheduledTasks.forEach((scheduledTask, index) => {
        if (currentTime >= scheduledTask.time) {
          scheduledTask.task();
          this.scheduledTasks.splice(index, 1);
        }
      });
    }, 1000);
  }
}

module.exports = Scheduler;