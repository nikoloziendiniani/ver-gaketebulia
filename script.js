var creattask = (description) => {
  var task = {
    description,
    iscompleited: false,
    markcompleited: () => {
      task.iscompleited = true;
    },
    markpendin: () => {
      task.iscompleited = false;
    },
    getinfo: () => {
      if (task.iscompleited) {
        console.log(`[v] ${description}`);
      } else {
        console.log(`[] ${description}`);
      }
    },
  };
  return task;
};
var creattodo = () => {
  var tasks = [];

  var todolist = { 
    addtask: (description) => {
    var newtask = creattask(description);
    task.push(newtask);
  },
    delittask: (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
    } else {
      console.log(`no such a task`);
    }
    getTasks: () => {
      console.log("____________________________"); //mas a ver gavige
      tasks.forEach((task) => {
        task.getInfo();
      });
      console.log("____________________________"); //aqamde
    };
    marktaskcompleited: (index) => {
      if (index >= 0 && index < tasks.length) {
        tasks[index].markcompleited();
      } else {
        console.log("No such task");
      }
    };
  }
  };
  markTaskPending: (index) => {
    if (index >= 0 && index < tasks.length) {
      tasks[index].markPending();
    } else {
      console.log("No such task");
    }
  };
  return todolist;
};
var mytodolist = creattodo;

mytodolist.addtask(`gavaketo gakvetilebi`)
