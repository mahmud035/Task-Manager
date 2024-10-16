import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import TaskCard from '../TaskCard/TaskCard';

const NotCompletedTasks = () => {
  const { user } = useContext(AuthContext);

  const url = `https://task-manager-server-sigma.vercel.app/incompleteTasks/${user?.email}`;

  const {
    isLoading,
    isError,
    data: incompleteTasks = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['incompleteTasks', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="task-page-container">
      <div className="container min-vh-100">
        <div className="task-card-container py-5">
          {incompleteTasks.length === 0 && (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="d-flex justify-content-center align-items-center text-white pt-5"
            >
              <h1>Oops! no task found.</h1>
            </div>
          )}

          {incompleteTasks.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotCompletedTasks;
