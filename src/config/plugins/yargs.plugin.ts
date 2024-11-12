import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "multiplication table base",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "multiplication table base",
  })
  .option("n", {
    alias: "filename",
    type: "string",
    default: 'Multiplication-table',
    describe: "filename table base",
  })
  .option("d", {
    alias: "description",
    type: "string",
    default: './outputs',
    describe: "file destination table base",
  })
  .check( ( argv, options ) => {
    //console.log({ argv, options})
    if ( argv.b < 1) throw 'error numero'

    return true
  } )
  .parseSync()