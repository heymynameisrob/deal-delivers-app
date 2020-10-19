const fs = require('fs')
const util = require('util')
const path = require('path')
const globCb = require('glob')
const glob = util.promisify(globCb)
const readFile = util.promisify(fs.readFile)

const helpers = require('./helpers');

const options = {
  contentDir: './content/posts',
  outputFile: './src/posts.json'
}

const readFiles = async paths => Promise.all(paths.map(getFileContents));

const getFileContents = filePath => {
  return readFile(filePath, 'utf8').then(data => {
    const lines = data.split("\n")
    const metadataIndices = lines.reduce(getMetadataIndices, [])
    const metadata = parseMetadata({lines, metadataIndices})
    const content = parseContent({lines, metadataIndices})
    const date = new Date(metadata.date)
    const timestamp = date.getTime() / 1000

    let post = {
      id: helpers.slugify(metadata.title),
      title: metadata.title ? metadata.title : "No title given",
      cover: metadata.cover ? metadata.cover : "https://placehold.it/200x200",
      date: metadata.date ? metadata.date : "No date given",
      content: content ? content : "No content given",
    }
    console.log(`✨  Processed ${filePath}`);
    return post    
  });
}

const combineJSON = async () => {
  console.log(`✨Reading Markdown files in ${options.contentDir}`);
  const paths = await glob(`${options.contentDir}/**/**.md`)  
  const results = await readFiles(paths)  
  const data = [...results]
  return JSON.stringify(data, null, 2)
}

// Creates data file
const writeJSON = async () => {
  const json = await combineJSON()
  fs.writeFileSync(options.outputFile, json)
  console.log(`✅Data saved to ${options.outputFile}`);
  console.log(`✅ Posts done!`);
  process.exit()
}

const getMetadataIndices = (acc, elem, i) => {
  if (/^---/.test(elem)) { acc.push(i) }
  return acc
}
const parseContent = ({lines, metadataIndices}) => {
  if (metadataIndices.length > 0) { lines = lines.slice(metadataIndices[1] + 1, lines.length)}
  return lines.join("\n");
}
const parseMetadata = ({lines, metadataIndices}) => {
  let obj = {};
  if (metadataIndices.length > 0) {
    let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
    metadata.forEach(line => {
      obj[line.split(": ")[0]] = line.split(": ")[1]
    })
    return obj
  }
}

module.exports = { writeJSON };