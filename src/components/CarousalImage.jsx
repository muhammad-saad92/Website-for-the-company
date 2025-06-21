function CarousalImage({source}){
    return(
        <div className="carousel-item">
            <img
              src={source}
              alt='porfolio image'
              className="rounded-box w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
              />
        </div>
    )
}

export default CarousalImage