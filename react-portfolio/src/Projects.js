import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardDeck } from "react-bootstrap";
import trivia from "./images/trivia.jpg";
import notes from "./images/notestaker.jpg";
import styled from 'styled-components';

const StyledProjects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 200px;
`;

const Projects = () => {
    return (
    <StyledProjects>
        <div className="port-cards">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={trivia} />
                    <Card.Body>
                        <Card.Title>
                            <a href="https://mrclaudiogallo.github.io/Movia/">Movia</a>
                        </Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={notes} />
                    <Card.Body>
                        <Card.Title>
                            <a href="http://notes-taker-cgb.herokuapp.com/">Notes Taker</a>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    </StyledProjects>
    );
};

export default Projects;