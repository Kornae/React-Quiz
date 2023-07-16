import React from "react";


function Card(props) {


    const imageStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return <div className="card-center col-lg-4 col-md-6 col-sm-12 space">
        <div className="quiz-card">
            <a href={`/data?${props.quizTitle}`}>

                <div

                    className="quiz-card-header"
                    style={imageStyle}
                >
                </div>
                <div className="quiz-card-content">
                    <a href={`/data?${props.quizTitle}`}>


                        <h3 className="quiz-title">{props.quizTitle}</h3>
                        <div className="quiz-info">
                            <div className="quiz-info-section">
                                <span className="topic-tag">Entertainment</span>
                            </div>
                        </div>
                    </a>
                </div>

            </a>

        </div>
    </div>
}

export default Card
