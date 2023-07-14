(() => {
  const path = require("path");
  const fs = require("fs")
  const { spawn } = require("child_process");
  const handlebars = require("handlebars");
  const chalk = require('chalk');

  const varCase = str => str.replace(/^[a-z]|(?<=\s)[a-z]/g, match => match.toUpperCase())
  const lowCase = str => str.toLowerCase()

  const component = process.argv[2];
  const dirName = lowCase(component)
  const componentName = varCase(component)

  // const dirName = component;
  // const componentName = component;

  // 构建要执行的命令和参数数组
  let command;
  let args;

  // spawn("mkdir", ["-p", path.join(process.cwd(), `src/${dirName}`)]);
  if (process.platform === 'win32') {
    // Windows 系统下使用 cmd.exe 来运行 mkdir 命令
    command = process.env.comspec || 'cmd.exe';
    args = ['/c', 'mkdir', path.join(process.cwd(), `src/${dirName}`)];
  } else {
    // Unix/Linux 系统下直接使用 mkdir 命令
    command = 'mkdir';
    args = ['-p', path.join(process.cwd(), `src/${dirName}`)];
  }
  spawn(command, args);

  // 获取当前脚本所在的目录路径
const currentDir = __dirname;

function getAllHbsFiles(dirPath, fileList) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      // 如果是子目录，则递归调用以处理子目录中的文件
      getAllHbsFiles(filePath, fileList);
    } else if (path.extname(file) === '.hbs') {
      // 如果文件扩展名为 .hbs，则将其添加到结果数组中
      fileList.push(filePath);
    }
  });
}

// 创建空数组以保存结果（.hbs 文件列表）
const hbsFiles = [];

// 调用函数获取所有 .hbs 文件并存入数组中
getAllHbsFiles(currentDir, hbsFiles);

  hbsFiles.forEach(async (filePath) => {
    const content = await fs.promises.readFile(filePath, "utf-8");
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName,
    });
    console.log(filePath);
    console.log('----');
    const newPath = filePath
      .replace("scripts", `src`)
      .replace('template',dirName)
      .replace("cp", dirName)
      .replace(".hbs", "");
      console.log(chalk.blue(newPath));
    await fs.promises.writeFile(newPath, result);
  });
})();
