import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdAddTask } from 'react-icons/md';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/bg.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import MyTasks from '../../MyTasks/MyTasks';
import HomePageAddTask from '../HomePageAddTask/HomePageAddTask';
import './Home.css';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const { user } = useContext(AuthContext);
  const bgImage = {
    backgroundImage: `url(${bg})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div>
      {!user?.email ? (
        <div style={bgImage}>
          <div className="container">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="d-flex flex-column justify-content-center align-items-center gap-3 vh-100 text-center"
            >
              <h1 className="text-white">
                Please Sign In or Register for Managing Your Task.
              </h1>
              <div className="d-flex gap-3">
                <Link to="/signin">
                  <Button variant="success" className="btn-sign-in fw-bold">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-register fw-bold">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="task-page-container">
          <div className="container">
            <div className="d-flex justify-content-end pt-5 pb-4 text-white">
              <Button
                onClick={() => setShowForm(!showForm)}
                className="show-form-btn text-white"
              >
                Add Task
                <MdAddTask size={32} className="plus-icon text-white" />
              </Button>
            </div>

            <div>
              {showForm && (
                <HomePageAddTask
                  showForm={showForm}
                  setShowForm={setShowForm}
                ></HomePageAddTask>
              )}
            </div>
          </div>

          {/* User All Task */}
          <MyTasks></MyTasks>
        </div>
      )}
    </div>
  );
};

export default Home;
