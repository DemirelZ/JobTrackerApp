import { MdLocationOn } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteJob, setError } from "../redux/jobSlice";
import axios from "axios";


const Card = ({ job }) => {

  

  const dispatch=useDispatch();

  const handleDeleteClick=()=>{
    
    axios.delete(`http://localhost:4000/jobs/${job.id}`)
    .then(()=>dispatch(deleteJob(job.id)))
    .catch(()=>dispatch(setError))
  }

  const getClassName = () => {
    switch (job.status) {
      case "Devam Ediyor":
        return "pending";
      case "Reddedildi":
        return "rejected";
      case "Mülakat":
        return "imterview";
      default:
        return "default";
    }
  };

  // console.log(job);

  return (
    <div className="card">
      {/* üst kısım */}
      <div>
        <div className="head">
          <div className="letter">
            <p>{job.company[0]}</p>
          </div>
          <div className="info">
            <p>{job.position}</p>
            <p>{job.company}</p>
          </div>
        </div>
        {/* alt kısım */}
        <div className="body">
          <div className="field">
            <MdLocationOn />
            <p>{job.location}</p>
          </div>
          <div className="field">
            <FaSuitcase />
            <p>{job.type}</p>
          </div>
          <div className="field">
            <BsFillCalendarDateFill />
            <p>{job.date}</p>
          </div>
          <div className="status">
            <span className={getClassName()}>{job.status}</span>
          </div>
        </div>
      </div>
      <div onClick={handleDeleteClick} className="deleteButton">
        <TiDeleteOutline />
      </div>
    </div>
  );
};

export default Card;
