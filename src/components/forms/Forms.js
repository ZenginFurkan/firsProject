import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { addTodo, fetchAllTodos } from "../../redux/todoSlice/ToDoSlice";

const TasksForms = ({ toggle }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: [],
    deleted: "false",
    complated: "false",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (event) => {
    const { options } = event.target;
    const tags = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        tags.push(options[i].value);
      }
    }
    setFormData({
      ...formData,
      tags: tags,
    });
  };
  const handleSave = () => {
    dispatch(addTodo(formData));
    dispatch(fetchAllTodos({ deleted: "false" }));
    saveToLocalStorage(formData);
    toggle();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic, you can access formData here
    console.log("Form Data:", formData);
  };
  const saveToLocalStorage = (formData) => {
    // localStorage.setItem('tasks', JSON.stringify(formData)); // Bu satırı değiştirin
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Mevcut görevleri alın veya boş bir dizi oluşturun
    tasks.push(formData); // Yeni görevi ekle
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Güncellenmiş görev listesini tekrar kaydedin
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="title" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={2}>
          description
        </Label>
        <Col sm={10}>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="tags" sm={2}>
          Tags
        </Label>
        <Col sm={10}>
          <Input
            type="select"
            name="tags"
            id="tags"
            multiple
            value={formData.tags}
            onChange={handleTagsChange}
          >
            <option value="Project">Project</option>
            <option value="Urgent">Urgent</option>
            <option value="List">List</option>
            <option value="Personal">Personal</option>
          </Input>
        </Col>
      </FormGroup>
      <Button color="primary" onClick={handleSave}>
        Save
      </Button>{" "}
      <Button color="danger" onClick={toggle}>
        Cancel
      </Button>
    </Form>
  );
};

export default TasksForms;
