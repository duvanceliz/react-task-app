import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function TaskFormModal({ taskId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technology, setTechnology] = useState("");

  const { task, findTaskById, taskEdit } = useContext(TaskContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    findTaskById(taskId);
  };

  function handleSave() {

    taskEdit(task.id,{
        title,
        description,
        technology
    });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label className="font-bold">Título del proyecto</label>
          <input
            type="text"
            defaultValue={task.title}
            className="w-full p-2 rounded-md bg-slate-700 my-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label className="font-bold">Descripción</label>
          <textarea
            className="bg-slate-700 w-full p-2 my-2 rounded-md"
            defaultValue={task.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <label className="font-bold">Tecnología</label>
          <input
            type="text"
            className="bg-slate-700 p-2 rounded-md w-full "
            defaultValue={task.technology}
            onChange={(e) => {
              setTechnology(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TaskFormModal;
