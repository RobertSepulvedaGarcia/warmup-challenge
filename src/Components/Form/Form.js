import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            placeholder="Enter content"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
