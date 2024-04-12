import React from "react";
import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
}

const TaskForm = ({ btnText }: Props) => {
  return (
  <form>
    <div>
      <label htmlFor="Title">Título</label>
      <input type="text" name="title" placeholder="Título da tarefa" />
    </div>
    <div>
      <label htmlFor="Dificulty">Dificuldade</label>
      <input type="text" name="Dificulty" placeholder="Dificuldade da tarefa" />
    </div>
    <input type="submit" value={btnText} />
  </form>
  )
};

export default TaskForm;
