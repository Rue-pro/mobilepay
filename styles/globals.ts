import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
		font-family: "Segoe UI", "Roboto", "Oxygen",
			"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	* {
		box-sizing: border-box;
	}

	ul,
	ol {
		padding: 0;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	ol,
	li,
	figure,
	figcaption,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	a:focus {
		outline: none;
	}

	#root {
		min-height: 100vh;
	}

`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;
