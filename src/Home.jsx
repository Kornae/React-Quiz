import React, { useState } from "react";
import Card from "./Card";
import quizzes from './quizzes';
import Filter from "./Filter";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Home() {
    const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);

    const handleSearch = (searchTerm) => {
        const filteredQuizItems = quizzes.filter((quizItem) =>
            quizItem.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredQuizzes(filteredQuizItems);
    };

    return (
        <div className="App center">
            <section id="main-background" className="gradient">
                <div className="container-fluid sign-up-container">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <h1 className="navbar-brand"><strong><QuestionAnswerIcon /> Trivy</strong></h1>
                    </nav>
                    <div className="explore-section">
                        <h1 id="title" className="text-center my-4"><strong>Explore</strong></h1>
                        <h5 id="subtitle" className="text-center my-4">
                            Quizzing Redefined, Intelligence Amplified
                        </h5>
                        <Filter onSearch={handleSearch} />
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row" id="history">
                    {filteredQuizzes.map((quizItem) => (
                        <Card
                            key={quizItem.id}
                            quizTitle={quizItem.title}
                            image={quizItem.img}
                            apiLink={quizItem.api}
                            quizTopic={quizItem.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
