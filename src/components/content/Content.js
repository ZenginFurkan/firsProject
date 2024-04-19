import { Card, CardText, CardTitle, Col,  Row } from "reactstrap";
import DropdownSelect from "../dropdown/Dropdown";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todoSlice/ToDoSlice";

function Content() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.todos.data);

    useEffect(() => {
        dispatch(fetchTodos()).then((res) => {
            console.log(res);
        })
    }, [dispatch]);

    console.log(data);
    return (
        <>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} sm="12" md='6' xl='4' >
                        <Card body className={`card-size ${item.is_completed ? "strike-through" : ""}`}>
                            <Row>
                                <Col md='2'>
                                    {item.is_completed ? <FaCheckCircle size={30} /> : <FaRegCircle size={30} />}
                                </Col>
                                <Col md='8'>
                                    <CardTitle tag="h5">
                                        {item.title}
                                    </CardTitle>
                                </Col>
                                <Col md='2'>
                                    <DropdownSelect id={item.id} />
                                </Col>
                            </Row>
                            <CardText className={`d-flex justify-content-center align-items-center pt-4 ${item.is_completed ? "strike-through" : ""}`}>
                                {item.description}
                            </CardText>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Content;