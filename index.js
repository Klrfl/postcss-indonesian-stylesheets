const properties = require("./lib/properties")
const values = require("./lib/values")
const { parse } = require("postcss-values-parser")

module.exports = () => {
  return {
    postcssPlugin: "postcss-indonesian-stylesheets",
    Declaration(decl) {
      properties.forEach(({ id, en }) => decl.prop === id && (decl.prop = en))

      const HAS_PAKSAKAN = /paksakan!/i;
      // const IS_PAKSAKAN = /^paksakan!$/i;

      if (HAS_PAKSAKAN.test(decl.value)) {
        decl.value = decl.value.replace("paksakan!", "").trim()
        decl.important = true
      }

      const newValueAST = parse(decl.value)
      newValueAST.walk(node => {
        if (node.type !== 'word') return  

        values.forEach(({id, en}) => {
          if (node.value === id) node.value = en
        })
      })

      const modifiedValue = String(newValueAST)
      decl.assign({
        value: modifiedValue
      })
    },
  }
}

module.exports.postcss = true
