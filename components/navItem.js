import html from "html-literal";

export default item => {
  return html`
    <a href="${item.url}" title="${item.text}">${item.text}</a>
  `;
};
