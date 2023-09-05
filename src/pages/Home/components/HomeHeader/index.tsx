import { HomeHeaderContainer, Waves } from "./styles";

export function HomeHeader() {
    return(
        <>
            <HomeHeaderContainer>
                <h2>HELLO, I'M BERNARDO</h2>
                <h1>REACT DEVELOPER</h1>
                <p>I’m from Brazil and I’m starting my carrier as a Full Stack Web Dev, currently I’m learning ReactJS/NextJS and coursing Information System</p>
            </HomeHeaderContainer>
            <Waves>
                <span className="one" />
                <span className="two" />
                <span className="three" />
            </Waves>
        </>
    )
}