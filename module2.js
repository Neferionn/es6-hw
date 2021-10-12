async function loadModule() {
  let module = await import("./module1.js");
  module.greet();
}
