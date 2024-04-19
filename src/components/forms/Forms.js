import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

const TasksForms = () => {
    const [formData, setFormData] = useState({
        title: '',
        descriptions: '',
        tags: [],
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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form submission logic, you can access formData here
        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for="title" sm={2}>Title</Label>
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
                <Label for="descriptions" sm={2}>Descriptions</Label>
                <Col sm={10}>
                    <Input
                        type="textarea"
                        name="descriptions"
                        id="descriptions"
                        placeholder="Descriptions"
                        value={formData.descriptions}
                        onChange={handleInputChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="tags" sm={2}>Tags</Label>
                <Col sm={10}>
                    <Input
                        type="select"
                        name="tags"
                        id="tags"
                        multiple
                        value={formData.tags}
                        onChange={handleTagsChange}
                    >
                        <option value="tag1">Tag 1</option>
                        <option value="tag2">Tag 2</option>
                        <option value="tag3">Tag 3</option>
                        <option value="tag4">Tag 4</option>
                    </Input>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default TasksForms;
