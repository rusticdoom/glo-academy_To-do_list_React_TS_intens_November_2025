import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import classes from "./ToDoList.module.scss";

export const ToDoList = () => {
  return (
    <div className={classes.container}>
      <ul className={`${classes.todo_list} ${classes.failed}`}>
        <ToDoListItem />
      </ul>
      <ul className={`${classes.todo_list} ${classes.completed}`}>
        <ToDoListItem />
        {/* <li className="todo-list-item__wrapper">
          <span>Вторая задача</span>
          <div className="todo-list-item__buttons">
            <button className="btn-trash"></button>
            <button className="btn-uncheck"></button>
          </div>
        </li> */}
      </ul>
    </div>
  );
};
