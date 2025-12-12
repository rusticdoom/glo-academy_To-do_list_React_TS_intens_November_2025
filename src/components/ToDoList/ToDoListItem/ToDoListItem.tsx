import classes from "./ToDoListItem.module.scss";
import { ToDo } from "../../../models/todo-item";

export const ToDoListItem = (props: { toDoItem: ToDo }) => {
  return (
    <li className={classes.wrapper}>
      <span>{props.toDoItem.text}</span>
      <div className={classes.buttons}>
        <button
          className={`${classes.button} ${classes.button_trash}`}
        ></button>
        <button
          className={`${classes.button} ${
            props.toDoItem.isDone
              ? classes.button_check
              : classes.button_uncheck
          }`}
        ></button>
      </div>
    </li>
  );
};
