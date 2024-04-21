import { postcssTape } from "@csstools/postcss-tape"
import plugin from "../index.js"

postcssTape(plugin)({
  values: {
    message: "converts properties in Indonesian to English",
  },
})
