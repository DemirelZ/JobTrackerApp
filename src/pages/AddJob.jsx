import { toast } from "react-toastify";
import { statusOptions, typeOptions } from "./../constants/index";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddJob = () => {
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();

    const form = new FormData(e.target)

    const newJob=Object.fromEntries(form.entries());

    newJob.id=v4();
    newJob.date= new Date().toLocaleDateString();

    if(!newJob.status || !newJob.type){
      toast.info('Please select type and status')
      return;
    }

    axios.post('http://localhost:4000/jobs', newJob)
    .then(()=>{
      navigate('/')
      toast.success('Addition successful')
    })
    .catch(()=> toast.error('Addition is not successful'))
  }



  return (
    <div className="add-page">
      <section className="add-sec">
        <h2>Add New Job</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Pozition</label>
            <input type="text" name="position" required />
          </div>
          <div>
            <label>Company</label>
            <input type="text" name="company" required />
          </div>
          <div>
            <label>Location</label>
            <input type="text" name="location" required />
          </div>
          <div>
            <label>Status</label>
            <select name="status">
              <option selected disabled>
                Select
              </option>
              {statusOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Type</label>
            <select name="type">
              <option selected disabled>
                Select
              </option>
              {typeOptions.map((i) => (
                <option key={i}>{i}</option>
              ))}
            </select>
          </div>

          <button>
            {" "}
            Add Job
            <span></span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
