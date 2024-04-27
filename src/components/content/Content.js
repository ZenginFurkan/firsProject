import { Card, CardText, CardTitle, Col, Row } from "reactstrap";
import DropdownSelect from "../dropdown/Dropdown";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos, } from "../../redux/todoSlice/ToDoSlice";

function Content() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.todos.data);
    console.log(data)

    useEffect(() => {
        dispatch(fetchAllTodos({ deleted: "false" })).then((res) => {
            console.log(res);
        })
    }, [dispatch]);

    return (
        <>
            <Row>
                {data.map((item, index) => (
                    <Col key={index} sm="12" md='6' xl='4'>
                        <Card body className={`card-size ${item.complated === "true" ? "strike-through" : ""}`}>
                            <Row>
                                <Col md='2'>
                                    {item.complated === "true" ? <FaCheckCircle size={30} /> : <FaRegCircle size={30} />}
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
                            <CardText className={`d-flex justify-content-center align-items-center pt-4 ${item.complated === "true" ? "strike-through" : ""}`}>
                                {item.description}
                            </CardText>
                            <div className="mt-2">
                                <span className="badge badge-text mr-2">Badge 1</span>
                                <span className="badge badge-text mr-2">Badge 2</span>
                                <span className="badge badge-text">Badge 3</span>
                            </div>
                        </Card>
                        {/* Rozetler */}
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Content;