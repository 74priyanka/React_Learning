const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, " i'm an h1 tag"),
    React.createElement("h2", {}, " i'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, " i'm an h1 tag"),
    React.createElement("h2", {}, " i'm an h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" }, //giving attributes to a tag
//   "hello world from react " //children
// );
console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
