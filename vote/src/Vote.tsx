import React from "react";
import styled from "styled-components";

const API_URL = "http://localhost:8080/vote/"

async function PostVote(candidate: string) {
    const url = API_URL + candidate;
    return fetch(url);
}

const VoteContainer = styled.div`
    display: flex;
    > * + * {
        margin-left: 1em;
    }
`

const VoteButton = styled.button<{ backgroundColor?: string, color?: string }>`
    border: none;
    border-radius: 4px;
    padding: 1em 2em;
    font-size: 48px;
    background-color: ${p => p.backgroundColor || "hsl(220, 5%, 65%)"};
    color: ${p => p.color || "white"};
    cursor: pointer; 

    :hover {
        opacity: 0.85;
    }
    :active {
        box-shadow:  inset 0 0 10px #000000;
    }
`
export default function Vote() {
    return (
        <VoteContainer>
            <VoteButton backgroundColor="hsl(150, 85%, 60%)" onClick={() => PostVote("cat")}>Cat</VoteButton>
            <VoteButton backgroundColor="hsl(270, 95%, 70%)" onClick={() => PostVote("dog")}>Dog</VoteButton>
        </VoteContainer>
    )
}