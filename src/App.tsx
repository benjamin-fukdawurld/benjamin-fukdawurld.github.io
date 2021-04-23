import React from "react";

import styled from "styled-components";

const Header = styled.header`
    background-image: url(banner-image.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 30vh;
    height: 400px;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    color: white;
`;

const H1 = styled.h1`
    padding: 1rem;
`;

const Main = styled.main`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 1rem;

    p {
        padding 0 1rem;
        ul {
            padding 0 2rem;
        }
    }
`;

const Link = styled.a`
    color: #a3a;
    font-weight: 600;
    &:hover {
        color: #b4b;
    }
`;

function App() {
    return (
        <div className="App">
            <Header className="App-banner">
                <H1>Benjamin Fukdawurld</H1>
            </Header>
            <Main>
                <img
                    src="https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy-downsized.gif"
                    alt="How my GF sees me"
                    title="How my GF sees me"
                />
                <section>
                    <p>
                        I am currently working on{" "}
                        <Link
                            target="_blank"
                            href="https://openclassrooms.com/fr/paths/185-developpeur-web"
                        >
                            OpenClassRooms Web Dev
                        </Link>{" "}
                        class.
                        <br />
                    </p>
                    <p>
                        You can check my current work here
                        <ul>
                            <li>
                                Project 2:{" "}
                                <Link
                                    target="_blank"
                                    href="https://benjamin-fukdawurld.github.io/BenjaminZAMOUR_2_12032021"
                                >
                                    Reservia, lodge booking (HTML + CSS)
                                </Link>
                            </li>
                            <li>
                                Project 3:{" "}
                                <Link
                                    target="_blank"
                                    href="https://benjamin-fukdawurld.github.io/BenjaminZamour_3_29032021"
                                >
                                    Ohmyfood, restaurant booking (HTML + SASS +
                                    CSS animations)
                                </Link>
                            </li>
                        </ul>
                    </p>
                </section>
            </Main>
        </div>
    );
}

export default App;
