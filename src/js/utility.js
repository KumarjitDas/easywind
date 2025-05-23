const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');


const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');
const CSS_TEMPLATE_DIR = path.join(TEMPLATES_DIR, 'css');


function getFullPath(relPath) {
  if (!relPath) {
    throw new Error('Relative path cannot be empty.');
  }

  const relPathParts = relPath.split('/');
  return path.join(__dirname, ...relPathParts);
}

function createDirIfNotExists(fullPath) {
  if (!fullPath) {
    throw new Error('Full path cannot be empty.');
  }

  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  }

  return fullPath;
}

function createGeneratedDir() {
  const generatedDirFullPath = getFullPath('../../generated');
  return createDirIfNotExists(generatedDirFullPath);
}

function clearCSS(relPath) {
  if (!relPath) {
    throw Error('Relative path cannot be empty.');
  }

  const fileWithExt = `../../generated/easywind/${relPath}.css`;
  const fullPath = getFullPath(fileWithExt);

  if (fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, '', 'utf8');
  }
}

function appendCSS(relPath, cssContent) {
  const generatedDir = createGeneratedDir();
  const fileNameWithExt = `easywind/${relPath}.css`;
  const parts = fileNameWithExt.split('/');

  if (parts.length > 1) {
    let pathToDir = path.join(generatedDir);

    for (let i = 0; i < (parts.length - 1); ++i) {
      pathToDir = path.join(pathToDir, parts[i]);
      createDirIfNotExists(pathToDir);
    }
  }

  const outputFile = path.join(generatedDir, ...parts);

  fs.appendFileSync(outputFile, cssContent, 'utf8');

  console.log(`Generated CSS for '${parts[parts.length - 1]}' saved to '${outputFile}'`);
}

function setHandlebarHelpers() {
  Handlebars.registerHelper('not', (x) => {
    return !x;
  });
  Handlebars.registerHelper('or', (a, b) => {
    return a || b;
  });
  Handlebars.registerHelper('and', (a, b) => {
    return a && b;
  });
  Handlebars.registerHelper('eq', (a, b) => {
    return a === b;
  });
  Handlebars.registerHelper('lt', (a, b) => {
    return a < b;
  });
  Handlebars.registerHelper('gt', (a, b) => {
    return a > b;
  });
  Handlebars.registerHelper('le', (a, b) => {
    return a <= b;
  });
  Handlebars.registerHelper('ge', (a, b) => {
    return a >= b;
  });
  Handlebars.registerHelper('abs', (x) => {
    return Math.abs(x);
  });
}

function getHBSCSSTemplate(file) {
  if (!file) {
    throw new Error('File name not given.');
  }

  const newFile = `${file}.css.hbs`;
  const parts = newFile.split('/');
  const fullPath = path.join(CSS_TEMPLATE_DIR, ...parts);

  return fs.readFileSync(fullPath, 'utf8');
}

function getCSSContent(file, templateParams) {
  const hbsContent = getHBSCSSTemplate(file);
  const template = Handlebars.compile(hbsContent);
  return template(templateParams);
}

module.exports = {
  clearCSS, appendCSS, setHandlebarHelpers, getHBSCSSTemplate, getCSSContent
};
