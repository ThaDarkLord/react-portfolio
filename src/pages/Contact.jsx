export default function Contact (){
    return(
        <div className="main-container">
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" placeholder="Enter Your Name Here" />
</div>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Please, enter your message here!</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Submit</button>
  </div>
</div>
        </div>
    )
}