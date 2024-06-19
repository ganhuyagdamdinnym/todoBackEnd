// codegen.ts
require("dotenv").config();
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/app/graphql/schema",
  generates: {
    "src/graphql/generated/client.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
      },
    },
  },
};

export default config;
