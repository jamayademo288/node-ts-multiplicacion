import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();
})()

async function main() {
    const { b:base, l:limit, s:showtable, n: filename, d: destination } = yarg
    ServerApp.run({base: base, limit: limit, showTable: showtable, fileName: filename, destination: destination})
    
}