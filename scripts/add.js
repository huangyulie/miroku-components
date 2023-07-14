(() => {
  const path = require("path");
  const glob = require("glob");
  const fs = require("fs").promises;
  const { spawn } = require("child_process");
  const handlebars = require("handlebars");

  // const varCase = str => str.replace(/[a-z]/g , m => m[1].toUpperCase()).replace(/^.{1})
  // const lowCase = str => str.replace(/[A-Z]/g , m=>`-${m=>toLowerCase()}`)

  const component = process.argv[2];
  // const dirName = lowCase(component)
  // const componentName = upCase(component)

  const dirName = component;
  const componentName = component;

  spawn("mkdir", ["-p", path.join(process.cwd(), `src/${dirName}`)]);

  const tplFiles = glob.sync(path.join(__dirname, "template/*.hbs"));

  tplFiles.forEach(async (filePath) => {
    const content = await fs.readFile(filePath, "utf-8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });
    const newPath = filePath
      .replace("scripts/template", `src/${dirName}`)
      .replace("\bcomponent\b", dirName)
      .replace(".hbs", "");
    await fs.writeFile(newPath, result);
    console.log(`write ${newPath} success`);
  });
})();
