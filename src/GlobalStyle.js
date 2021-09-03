const GlobalStyle = `
  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
 url("/fonts/Montserrat-Regular.woff") format("woff");
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
 url("/fonts/Montserrat-Medium.woff") format("woff");
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
 url("/fonts/Montserrat-SemiBold.woff") format("woff");
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("Montserrat-Bold.woff2") format("woff2"),
 url("Montserrat-Bold.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
 url("/fonts/Bitter-Regular.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.color.text};
    max-width: 100vw;
    height: auto;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  body h1{
    font-family: 'Bitter', serif;
    font-weight: 400;
    font-size: 2.375rem;
    color: hsl(0, 0%, 0%);
}

body h3{
    font-family: 'Bitter', serif;
    font-weight: 400;
    font-size: 1.5rem;
    color: hsl(0, 0%, 0%);
}

body, ul, p, h3{
    font-family: 'Montserrat', sans-serif;
    color: hsl(0, 0%, 39%);
}

a{
    color: hsl(208, 100%, 49%);
    text-decoration: none;
}

`;

export default GlobalStyle;
