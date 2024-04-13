import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/inertia-react";
// import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import PrimaryLayout from "./Pages/Components/Layouts/PrimaryLayout.jsx";
createInertiaApp({
  // Below you can see that we are going to get all React components from resources/js/Pages folder
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
    const page = pages[`./Pages/${name}.jsx`];
    page.default.layout = page.default.layout ||
      ((page) => <PrimaryLayout children={page} />);
    return page;
  },
  // resolvePageComponent(
  //   `./Pages/${name}.jsx`,
  //   import.meta.glob("./Pages/**/*.jsx"),
  // ),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
