import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
} from "@material-ui/core";
import { Backspace } from "@material-ui/icons";
import faker from "faker";
import "./Header.scss";

const baseURL = "http://localhost:4000/tasks/new_task";

export default function Header(props) {
  const { tasks, setTasks } = props;
  const [newTask, setNewTask] = useState("");

  function createPost() {
    axios.post(baseURL, {
      task: newTask,
      state: true,
      user_id: 1,
      isdelete: false,
    });
  }

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };
  const handleClear = () => {
    setNewTask("");
  };
  const handleEnter = (e) => {
    if (newTask !== "") {
      if (e.key === "Enter") {
        setTasks([
          ...tasks,
          {
            task: newTask,
            state: true,
            idx: faker.datatype.uuid(),
          },
        ]);
        createPost();
        setNewTask("");
      }
    }
  };
  return (
    <div className="header">
      <div className="header-newtask">
        <FormControl variant="outlined" className="header-newtask_input">
          <InputLabel htmlFor="component-outlined">
            Añade nueva tarea
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={newTask}
            onChange={handleChange}
            onKeyDown={handleEnter}
            label="Añade nueva tarea"
            endAdornment={
              <InputAdornment position="end">
                {newTask === "" ? (
                  <Backspace fontSize="small" color="disabled" />
                ) : (
                  <Backspace fontSize="small" onClick={handleClear} />
                )}
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
}
