function Feature(props){
    return(
        <div className="feature">
        <img src={props.imgSrc} alt="" />
        <h2>{props.featureName}</h2>
        <p>{props.featureDescription}</p>
        </div>
    )
}

export default Feature