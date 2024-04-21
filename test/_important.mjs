import { postcssTape } from "@csstools/postcss-tape"
import plugin from "postcss-indonesian-stylesheets"

postcssTape(plugin)({
  important: {
    message: "converts !paksakan to !important",
  },
})
