import React from "react";
import "./App.css";
import GreetingCard from "./components/PersonalGreetingCard/GreetingCard";
import UserProfile from "./components/UserProfile/UserProfile";
import LikeButton from "./components/LikeButton/LikeButton";
import Todo from "./components/TodoList/Todo";
import ProductList from "./components/ProductList/ProductList";
import Accordion from "./components/Accordion/Accordion";
import CommentList from "./components/CommentSystem/CommentList";
import TabList from "./components/DynamicTabs/TabList";
import ThemeProvider from "./components/ThemeSwitcher/ThemeProvider";

function App() {
  return (
    <div className="App">
      <section className="component-section">
        <h2>Greeting Card</h2>
        <GreetingCard name="Pawel" />
      </section>

      <section className="component-section">
        <h2>User Profile</h2>
        <UserProfile
          name="Pawel"
          email="Pawel@gmail.com"
          pictureSrc="src\assets\pfp.png"
        />
      </section>

      <section className="component-section">
        <h2>Like Button</h2>
        <LikeButton />
      </section>

      <section className="component-section">
        <h2>Todo</h2>
        <Todo task="Complete task 1" />
        <Todo task="Complete task 2" />
        <Todo task="Complete task 3" />
      </section>

      <section className="component-section">
        <h2>Product List</h2>
        <ProductList
          products={[
            {
              id: 1,
              name: "Product 1",
              price: "10",
              description: "Description of Product 1",
            },
            {
              id: 2,
              name: "Product 2",
              price: "20",
              description: "Description of Product 2",
            },
            {
              id: 3,
              name: "Product 3",
              price: "30",
              description: "Description of Product 3",
            },
          ]}
        />
      </section>

      <section className="component-section">
        <h2>Accordion</h2>
        <Accordion
          items={[
            { title: "Item 1", content: "Content for Item 1" },
            { title: "Item 2", content: "Content for Item 2" },
            { title: "Item 3", content: "Content for Item 3" },
          ]}
        />
      </section>

      <section className="component-section">
        <h2>Comment List</h2>
        <CommentList
          comments={[
            {
              id: 1,
              username: "User1",
              commentText:
                "This is a fantastic app! I love how user-friendly it is.",
            },
            {
              id: 2,
              username: "User2",
              commentText:
                "The React components are well-organized and easy to follow.",
            },
            {
              id: 3,
              username: "User3",
              commentText:
                "Great job on the styling! The design is clean and appealing.",
            },
          ]}
        />
      </section>

      <section className="component-section">
        <h2>Tab List</h2>
        <TabList
          tabs={[
            {
              label: "Tab 1",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque justo ut purus facilisis suscipit. Maecenas bibendum nisi neque, at tempor orci scelerisque non. Phasellus eget dolor est. Cras pharetra lorem at sapien mattis facilisis in ornare velit. Mauris imperdiet orci nulla, quis venenatis nisi laoreet sed. Curabitur porta, libero nec dignissim pulvinar, urna velit tristique nulla, a facilisis sem ipsum et nisl. Suspendisse orci lacus, facilisis at erat ut, dictum gravida tortor. Pellentesque malesuada sit amet diam in egestas. Duis fermentum fermentum mollis.",
            },
            {
              label: "Tab 2",
              content:
                "Morbi rhoncus et metus in semper. Pellentesque eleifend dictum suscipit. Pellentesque feugiat ornare diam in porta. Pellentesque imperdiet maximus convallis. Vestibulum vehicula est nibh, vel malesuada enim viverra imperdiet. Ut tempor et nulla et placerat. Aenean at fringilla metus. Nulla varius ac mauris sit amet feugiat. Praesent sit amet erat a ligula fringilla maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce vel facilisis felis.",
            },
            {
              label: "Tab 3",
              content:
                "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut eu orci blandit felis volutpat auctor. Sed vel maximus turpis. Phasellus et nunc a eros vehicula sollicitudin quis sit amet nisl. Vestibulum gravida augue et porttitor ultricies. Nullam non condimentum nibh. Morbi auctor, elit in vestibulum rutrum, ex felis dignissim mauris, a consectetur erat leo non elit. Aliquam fringilla neque sodales, auctor elit quis, vehicula ex. Cras erat sapien, volutpat in felis vitae, tincidunt congue tortor. Morbi blandit quis urna tristique consectetur.",
            },
          ]}
        />
      </section>

      <section className="component-section">
        <h2>Theme Provider</h2>
        <ThemeProvider></ThemeProvider>
      </section>
    </div>
  );
}

export default App;
