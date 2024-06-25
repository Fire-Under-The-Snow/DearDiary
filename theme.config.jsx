export default {
  logo: <span>DearDiary</span>,
  project: {
    link: "https://github.com/Fire-Under-The-Snow/DearDiary",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="DearDiary" />
      <meta property="og:description" content="Dairy for the future" />
    </>
  ),
  banner: {
    key: "beta",
    text: (
      <a href="https://github.com/TenzDelek" target="_blank">
        🎉 DearDiary beta is under Construction. Read more →
      </a>
    ),
  },
  footer: {
    text: (
      <span>
        TenzinDelek {new Date().getFullYear()} ©{" "}
        <a href="https://github.com/TenzDelek" target="_blank">
          DearDiary
        </a>
        .
      </span>
    ),
  },
  // ... other theme options
};
