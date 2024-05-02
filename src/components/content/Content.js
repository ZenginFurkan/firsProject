// Content.js
import React, { useEffect } from "react";
import { Card, CardText, CardTitle, Col, Row } from "reactstrap";
import DropdownSelect from "../dropdown/Dropdown";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodos } from "../../redux/todoSlice/ToDoSlice";

function Content() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchQuery);
  const data = useSelector((state) => state.todos.data);

  const filteredData = searchData
    ? data.filter((item) =>
        item.title.toLowerCase().includes(searchData.toLowerCase())
      )
    : data;

  useEffect(() => {
    dispatch(fetchAllTodos({ deleted: "false" })).then((res) => {
      console.log(res);
    });
  }, [dispatch]);

  const tagClasses = {
    Project: "tag-project",
    Urgent: "tag-urgent",
    List: "tag-list",
    Personal: "tag-personal",
  };

  return (
    <>
      <Row>
        {filteredData?.map((item, index) => (
          <Col key={index} sm="12" md="6" xl="4">
            <Card
              body
              className={`card-size ${
                item.complated === "true" ? "strike-through" : ""
              }`}
            >
              <Row>
                <Col md="2">
                  {item.complated === "true" ? (
                    <FaCheckCircle size={30} />
                  ) : (
                    <FaRegCircle size={30} />
                  )}
                </Col>
                <Col md="8">
                  <CardTitle tag="h5">{item.title}</CardTitle>
                </Col>
                <Col md="2">
                  <DropdownSelect id={item.id} />
                </Col>
              </Row>
              <CardText
                className={`d-flex justify-content-center align-items-center pt-4 ${
                  item.complated === "true" ? "strike-through" : ""
                }`}
              >
                {item.description}
              </CardText>
              <div className="mt-2">
                {item?.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`badge badge-text mr-2 ${tagClasses[tag]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Content;
