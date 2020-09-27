import React from "react";
import "./App.css";
import styled from "styled-components";
import Button from "@material-ui/core/Button/Button";
import { Wrapper } from "./components/style/styles";

const Test = styled.div`
	color: red;
	font-size: 25rem;
`;

const Title = styled.h1`
	color: blue;
	font-size: 12px;
	display: flex;
	border: 1px solid black;
`;

const Container = styled.div`
	padding: 2rem;
	margin: 2rem;
	color: #000;

	@media ${(props) => props.theme.mediaQueries.mobile} {
		background-color: ${(props) => props.theme.colors.color1};
	}
`;

const StyledButton = styled.button`
	padding: 1rem 1.5rem;
	font-size: 1.8rem;
	background-color: ${(props) => props.theme.colors.color3};
	outline: none;
	border: none;
`;

const StyledMUIButton = styled(Button).attrs(() => ({
	variant: "outlined",
	color: "primary",
}))`
	&& {
		/* color: #0f0; */
		/* background-color: #00f; */
	}
`;

function App() {
	return (
		<div className="App">
			<Wrapper>
				<Container>
					<Title>Hey</Title>
					<StyledButton>Hey</StyledButton>
					<Button></Button>
					<StyledMUIButton>Hey</StyledMUIButton>
					<Button variant="text" color="default"></Button>
				</Container>
			</Wrapper>
		</div>
	);
}

export default App;
