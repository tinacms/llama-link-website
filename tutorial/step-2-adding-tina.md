# Adding Tina

TinaCMS will enable us to use Markdown files for our content, we'll then use that content to replace the hardcoded content we have in our components.

```
npm install tinacms @tinacms/cli
```

## Add the `tina` folder

The `tina/config.ts` file is where you configure Tina. Here, you'll define the schema for your content, as well as instructions
for how to source media, and where Tina should bundle it's output to.

```
mkdir tina
```

Next, lets add the config file:

```
touch tina/config.ts
```

We'll also add a `.gitignore`. Tina bundles some files during builds which we don't want to include in Git history

```
touch tina/.gitignore
```

Add `__generated__` to the `.gitignore`:

```
// tina/.gitignore
__generated__
```

In the `tina/config.ts` file, we'll define our config:

```ts
import { defineConfig } from "tinacms"

export default defineConfig({
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        label: "Page",
        name: "page",
        path: "content/pages",
        fields: [{ name: "title", label: "Title" }],
      },
    ],
  },
  // These values will be used by Tina Cloud when we're ready to deploy to our host
  branch: "",
  clientId: "",
  token: "",
})
```

You can read more about the `tina/config.ts` [here](https://tina.io/docs/reference/config/).
