import React, { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setJob, setError } from "./../redux/jobSlice";
import Loading from "../components/Loading";
import RefreshButton from "../components/refreshButton";
import Filter from "../components/Filter";

const JobList = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store);

  console.log(state);

  const fetchData = () => {
    axios
      .get("http://localhost:4000/jobs")
      .then((res) => dispatch(setJob(res.data)))
      .catch((err) => dispatch(setError(err)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="list-page">
      <Filter />

      <h3 className="job-count">
        Displaying ({state.jobs.length}) of the ({state.mainJobs.length}) jobs
        found
      </h3>

      <section className="job-list">
        {!state.initialized && <Loading />}

        {state.initialized && !state.isError ? (
          state.jobs.map((job, i) => <Card key={i} job={job} />)
        ) : (
          <p className="error-msg">
            <span>Sorry, an error occurred!!!</span>{" "}
            <RefreshButton handleClick={() => fetchData} />{" "}
          </p>
        )}
      </section>
    </div>
  );
};

export default JobList;
