import React, { useState } from "react";
import Layout from "./components/layout/Layout";
import Content from "./components/content/Content";
import { useSelector } from "react-redux";
import Tags from "./components/tags/TagsList";

function App() {
  const [theme, setTheme] = useState("light");
  const tagsPage = useSelector((state) => state.tagsPage.is_tagsPage);
  return (
    <div>
      <Layout theme={theme} setTheme={setTheme}>
        {tagsPage ? <Tags /> : <Content />}
      </Layout>
    </div>
  );
}

export default App;
