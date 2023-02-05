import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { tasksActions } from "../../store/Tasks";
import ModalConfirm from "../Utilities/ModalConfirm";
const DeleteTasks = () => {
  const dispatch = useAppDispatch();
  const [showModal, setIsModalShown] = useState(false);
  const deleteAllDataHandler = () => {
    dispatch(tasksActions.deleteAllData());
  };
  return (
    <>
      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="All data will be deleted permanently."
          onConfirm={deleteAllDataHandler}
        />
      )}
    </>
  );
};
export default React.memo(DeleteTasks);
