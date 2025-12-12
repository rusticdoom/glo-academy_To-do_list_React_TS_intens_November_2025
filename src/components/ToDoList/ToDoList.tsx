import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import classes from "./ToDoList.module.scss";
import { ToDo } from "../../models/todo-item";

export const ToDoList = () => {
  const tasks: ToDo[] = [
    {
      id: 0,
      text: "Первая задача",
      isDone: false,
    },
    {
      id: 1,
      text: "Вторая задача",
      isDone: true,
    },
    {
      id: 2,
      text: "Третья задача",
      isDone: true,
    },
  ];

  return (
    <div className={classes.container}>
      <ul className={`${classes.todo_list} ${classes.failed}`}>
        {tasks
          .filter((item) => !item.isDone)
          .map((item, idx) => {
            return <ToDoListItem toDoItem={item} key={idx} />;
          })}
      </ul>
      <ul className={`${classes.todo_list} ${classes.completed}`}>
        {tasks
          .filter((item) => item.isDone)
          .map((item, idx) => {
            return <ToDoListItem toDoItem={item} key={idx} />;
          })}
      </ul>
    </div>
  );
};
