import { postcssTape } from "@csstools/postcss-tape"
import plugin from "../index.js"

postcssTape(plugin)({
  important: {
    message: "converts !paksakan to !important",
  },
})
