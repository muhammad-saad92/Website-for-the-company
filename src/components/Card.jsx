function Card({ title, description, Icon, buttonText }) {
    return (
      <div className="card bg-base-100 w-80 md:w-96 bg-gray-100 shadow-md">
        <div className="pt-10 text-5xl text-primary text-center m-auto">
          <Icon className='w-30' /> 
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
    

export default Card