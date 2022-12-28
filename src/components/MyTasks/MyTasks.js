import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import TaskCard from '../TaskCard/TaskCard';
import './MyTasks.css';

const MyTasks = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/mytasks?email=${user?.email}`;

  const {
    isLoading,
    isError,
    data: myTasks = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ['mytasks', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
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
    <div>
      <div className="container">
        <h1 className="text-center pt-3">
          My Tasks Component: {myTasks.length}
        </h1>

        <div className="task-card-container py-5">
          {myTasks.map((task, index) => (
            <TaskCard key={index} task={task} refetch={refetch}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyTasks;
