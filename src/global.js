import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 300ms ease 80ms;
}
  
p {
    font-size: 1.1rem;
}
footer {
    display: flex;
	padding: .5rem 0;
    margin: 5rem 0 0 0;
}
footer section {
    width: 100%;
    display:flex;
    justify-content:center;
    background:${({ theme }) => theme.body};
    border-top: 1px solid rgba(0, 0, 0, 0.1)
}
  
nav {
    display: flex;
    padding: 2rem 0;
    background: ${({ theme }) => theme.navColor};
}
  
nav section {
    width: 100%;
}
  
nav a {
    font-weight: 700;
    padding: 1rem 1.5rem;
    border-radius: 4px;
}
  
nav a:first-of-type {
    margin-left: -1.5rem;
}
  
nav a:hover {
    background: ${({ theme }) => theme.buttonHoverColor};
}
  
a {
    color: ${({ theme }) => theme.buttonBackgroundColor};
    text-decoration: none;
}
  
section {
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1.5rem;
}
  
section h1 {
    font-size: 3rem;
}
  
.post h2 {
    font-size: 2.5rem;
}
  
.post-excerpt {
    padding: 1.5rem 0;
    border-bottom: 1px solid #eee;
}
  
.post-excerpt:first-of-type {
    padding-top: 0;
}
  
.post-excerpt h2 {
    margin-top: 0;
    font-size: 1.5rem;
}
  
.button {
    display: inline-block;
    background: ${({ theme }) => theme.buttonBackgroundColor};
    color: white;
    border-radius: 4px;
    font-weight: 700;
    padding: 0.75rem 1.5rem;
    transition: all 300ms ease;
}
  .button:hover {
    box-shadow: 4px 4px 15px rgba(0,0,0,0.2)

  }
  `;
