import React from "react";
import "@testing-library/jest-dom/extend-expect"; //To extend jest's capacity to inspect the DOM
import { render } from "@testing-library/react"; // It allows to render a component and to inspect what it has rendered
import ImageCard from "./ImageCard";

test("renders content", () => {
  const src =
    "https://firebasestorage.googleapis.com/v0/b/fotos-…=media&token=3be72a1e-680b-4781-8029-4725be52984f";

  const component = render(<ImageCard imageSrc={src} />);
});
