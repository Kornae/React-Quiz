import React, { useState, useEffect } from "react";
import GameCSS from './game.module.css';
import { useLoaderData } from "react-router-dom";
import quiz from "./quizzes";
import { Button } from "@mui/material";
import ProgressBar from "./ProgressBar";
import Correct from "./Correct";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import LinearDeterminate from "./LinearBar";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import TransitionsModal from "./Modal";




export function CorrectAlert() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Correct</Alert>
        </Stack>
    );
}

export function IncorrectAlert(props) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Incorrect{props}</Alert>
        </Stack>
    );
}

export const dataLoader = async () => {
    const path = window.location.search;
    const index = quiz.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));
    let api = quiz[index].api;

    const res = await fetch(api);
    const quizData = await res.json()

    return quizData.results;

}


export const Data = () => {
    useLoaderData().push({
        "category": null,
        "type": null,
        "difficulty": null,
        "question": null,
        "correct_answer": null,
        "incorrect_answers": [
            null,
            null,
            null
        ]
    })

    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    const [quest, setQuest] = useState(1);
    const [divVal, setDivVal] = useState(null);
    const [isSelect, setIsSelect] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const [isIncorrect, setIsIncorrect] = useState(false);
    const [questionArray, setQuestionArray] = useState([]);
    const loaderData = useLoaderData();

    useEffect(() => {
        const shuffledArray = [...loaderData[count].incorrect_answers, loaderData[count].correct_answer].sort(() => Math.random() - 0.5);
        setQuestionArray(shuffledArray);
    }, [count, loaderData]);

    let correctAnswer = decodeURIComponent(useLoaderData()[count].correct_answer)
    console.log('Question #:' + quest)
    console.log('Correct Answer: ' + correctAnswer)
    console.log(score)

    let handeleClick = (e) => {
        setQuest(quest + 1)
        setCount(count + 1)
        setIsCorrect(false)
        setIsIncorrect(false)
        setIsSelect(false)
    }

    let handleChoiceSelection = (e) => {
        setIsSelect(true)
        let yourAnswer = e.target.id;
        console.log('You clicked: ' + yourAnswer)
        setDivVal(yourAnswer)

        if (yourAnswer === correctAnswer) {
            setScore(score + 1)
            setIsCorrect(true)
        } else {
            setIsIncorrect(true)
        }
    }

    let handleExit = () => {
        window.location = '/'
    }



    const totalScore = (score * 10)
    let message = '';

    const question = useLoaderData()[count].question
    const path = window.location.search;
    const index = quiz.findIndex((item) => item.title === path.slice(1) || item.alt === path.slice(1));
    let title = quiz[index].title;
    let pic = quiz[index].img;

    if (totalScore === 100) {
        message = "Congratulations! You achieved a perfect score! You're a 'Trivy' genius!";
    }
    else if (totalScore >= 90) {
        message = "Wow, impressive! You're a 'Trivy' master!";
    } else if (totalScore >= 80) {
        message = `Great job! You have a solid understanding of ${title}.`;
    } else if (totalScore >= 70) {
        message = "Well done! You're on the right track.";
    } else if (totalScore >= 60) {
        message = "Good effort! Keep learning and practicing.";
    } else if (totalScore >= 50) {
        message = "Not bad! You're making progress.";
    } else {
        message = "Keep going! Every attempt counts.";
    }


    if (count < 10) {
        return <div id={GameCSS.quizContainer}>

            <div className="container">

                <div id={GameCSS.quizWhite} className="">

                    <div id="quizCard" className="">

                        <div className={GameCSS.centeredContainer}>
                            <Chip
                                avatar={<Avatar alt="Natacha" src={pic} />}
                                label={title.toUpperCase()}

                            />

                        </div>

                        <h2 style={{ padding: '20px' }} id={GameCSS.question}>{decodeURIComponent(question)}</h2>

                        <div id={decodeURIComponent(questionArray[0])} style={{
                            pointerEvents: isSelect ? 'none' : null,
                            border: divVal === decodeURIComponent(questionArray[0]) && isIncorrect ? '0.1rem solid #e80d0d78' : (divVal === decodeURIComponent(questionArray[0]) && isCorrect ? '0.1rem solid #49be25' : null)
                        }}
                            onClick={handleChoiceSelection} className={GameCSS.choiceContainer} >
                            <label style={{ color: divVal !== decodeURIComponent(questionArray[0]) && isSelect ? '#D3D3D3' : null }} className={GameCSS.answerChoice} for="ac1" id={decodeURIComponent(questionArray[0])}>{decodeURIComponent(questionArray[0])}</label>
                        </div>

                        <div id={decodeURIComponent(questionArray[1])} style={{
                            pointerEvents: isSelect ? 'none' : null,
                            border: divVal === decodeURIComponent(questionArray[1]) && isIncorrect ? '0.1rem solid #e80d0d78' : (divVal === decodeURIComponent(questionArray[1]) && isCorrect ? '0.1rem solid #49be25' : null)

                        }} onClick={handleChoiceSelection} className={GameCSS.choiceContainer} >
                            <label style={{ color: divVal !== decodeURIComponent(questionArray[1]) && isSelect ? '#D3D3D3' : null }} className={GameCSS.answerChoice} for="ac2" id={decodeURIComponent(questionArray[1])}>{decodeURIComponent(questionArray[1])}</label>
                        </div>

                        <div id={decodeURIComponent(questionArray[2])} style={{
                            pointerEvents: isSelect ? 'none' : null,
                            border: divVal === decodeURIComponent(questionArray[2]) && isIncorrect ? '0.1rem solid #e80d0d78' : (divVal === decodeURIComponent(questionArray[2]) && isCorrect ? '0.1rem solid #49be25' : null)

                        }} onClick={handleChoiceSelection} className={GameCSS.choiceContainer} >
                            <label style={{ color: divVal !== decodeURIComponent(questionArray[2]) && isSelect ? '#D3D3D3' : null }} className={GameCSS.answerChoice} for="ac3" id={decodeURIComponent(questionArray[2])}>{decodeURIComponent(questionArray[2])}</label>
                        </div>

                        <div id={decodeURIComponent(questionArray[3])} style={{
                            pointerEvents: isSelect ? 'none' : null,
                            border: divVal === decodeURIComponent(questionArray[3]) && isIncorrect ? '0.1rem solid #e80d0d78' : (divVal === decodeURIComponent(questionArray[3]) && isCorrect ? '0.1rem solid #49be25' : null)

                        }} onClick={handleChoiceSelection} className={GameCSS.choiceContainer} >
                            <label style={{ color: divVal !== decodeURIComponent(questionArray[3]) && isSelect ? '#D3D3D3' : null }} className={GameCSS.answerChoice} for="ac4" id={decodeURIComponent(questionArray[3])}>{decodeURIComponent(questionArray[3])}</label>
                        </div>

                        {isCorrect && CorrectAlert()}
                        {isIncorrect && IncorrectAlert()}
                        <LinearDeterminate
                            current={count * 10}
                        />



                        {isSelect ? <Button onClick={handeleClick}>Next <NavigateNextIcon /></Button> : <TransitionsModal />
                        }



                    </div>

                </div>
            </div>

        </div>
    } else {


        return <div id={GameCSS.quizContainer}>

            <div className="container">

                <div id={GameCSS.quizWhite} className="">

                    <div id="quizCard" className="">

                        <div>
                            <span> <h1 id={GameCSS.yourQuizScore}>{totalScore}</h1></span>
                            <div className={GameCSS.progressContainer}>
                                <ProgressBar value={totalScore} max={100} width={400} className="custom-progress-bar" />
                            </div>
                         
                            <Correct
                                yourScore={score}
                                totalCount={count}
                                right={`Correct: ${score}`}
                                wrong={`Incorrect: ${count - score}`}
                            />

                            <h2 style={{ padding: '20px' }} id={GameCSS.message}>{message}</h2>
                         
                        </div>

                        <LinearDeterminate
                            current={count * 10}
                        />


                        {isSelect ? <Button onClick={handeleClick}>Next <NavigateNextIcon /></Button> : <Button onClick={handleExit}>Done </Button>
                        }


                    </div>

                </div>
            </div>

        </div>

    }
}
