import classes from "./Form.module.scss";

export const Form = () => {
  return (
    <div className={classes.form_wrapper}>
      <form action="#">
        <label>
          <input type="text" className={classes.form_input} />
          <button className={classes.form_button}></button>
        </label>
      </form>
    </div>
  );
};
