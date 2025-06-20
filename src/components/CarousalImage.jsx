function CarousalImage({source}){
    return(
        <div className="carousel-item">
            <img
              src={source}
              alt='porfolio image'
              className="rounded-box w-sm"
              />
        </div>
    )
}

export default CarousalImage