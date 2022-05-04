import Header from "../../Header/Header";
import Card from "../../Cards/Card";
import DesktopLayout from "../../Cards/DesktopLayout";
import TaskForm from "../../TaskForm/TaskForm";

import { tasksData } from "./tasks-data.js";
import { useResize } from "../../../hooks/useResize";

export const Tasks = () => {
  const { isPhone } = useResize();

  const renderAllTasks = () => {
    return tasksData.map((task) => <Card task={task} key={task.id} />);
  };

  return (
    <>
      <Header />

      <main className="mt-5 mx-5 sm:mx-16">
        <TaskForm />
        <section>
          <h2 className="text-2xl">My tasks</h2>
          {isPhone ? (
            renderAllTasks()
          ) : (
            <DesktopLayout>{renderAllTasks()}</DesktopLayout>
          )}
        </section>
      </main>
    </>
  );
};
