// getPosts based on @willjw3 function from react-markdown-blog
// Based on @Jinksi functions from his netlify-cms-react boilerplate\
const fs = require('fs')
const path = require('path')
const globCb = require('glob')
const util = require('util')
const glob = util.promisify(globCb)
const readFile = util.promisify(fs.readFile)

const helpers = require('./lib/helpers');
const posts = require('./lib/posts');
const locations = require('./lib/locations');

const options = {
  contentDir: './content/locations',  
  outputFile: './src/data.json',
  outputPosts: './src/posts.json'
}

const getDocumentName = filePath => {
  const pathParsed = path.parse(filePath)
  return `${pathParsed.name}`
}

const getFileContents = filePath => {
  return readFile(filePath, 'utf8').then(data => {
    let documentData = JSON.parse(data)
    documentData.id = getDocumentName(filePath)
    documentData.body = documentData.body || documentData.content
    console.log(`✨  Processed ${filePath}`)
    return documentData
  })
}

const readFiles = async paths => Promise.all(paths.map(getFileContents));

// Combines all JSON Together
const combineJSON = async () => {
  console.log(`✨Reading JSON files in ${options.contentDir}`)
  const paths = await glob(`${options.contentDir}/**/**.json`)
  const results = await readFiles(paths)
  const data = [...results]
  return JSON.stringify(data, null, 2)
}

// Creates data file
const writeJSON = async () => {
  const json = await combineJSON()
  fs.writeFileSync(options.outputFile, json)
  console.log(`✅Data saved to ${options.outputFile}`)
  process.exit()
}

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
      if (err) {
          return console.log("Failed to list contents of directory: " + err)
      }
      files.forEach((file, i) => {
          let obj = {}
          let post
          fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
              const getMetadataIndices = (acc, elem, i) => {
                  if (/^---/.test(elem)) {
                      acc.push(i)
                  }
                  return acc
              }
              const parseMetadata = ({lines, metadataIndices}) => {
                  if (metadataIndices.length > 0) {
                      let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                      metadata.forEach(line => {
                          obj[line.split(": ")[0]] = line.split(": ")[1]
                      })
                      return obj
                  }
              }
              const parseContent = ({lines, metadataIndices}) => {
                  if (metadataIndices.length > 0) {
                      lines = lines.slice(metadataIndices[1] + 1, lines.length)
                  }
                  return lines.join("\n")
              }
              const lines = contents.split("\n")
              const metadataIndices = lines.reduce(getMetadataIndices, [])
              const metadata = parseMetadata({lines, metadataIndices})
              const content = parseContent({lines, metadataIndices})
              const date = new Date(metadata.date)
              const timestamp = date.getTime() / 1000
              post = {
                  id: helpers.slugify(metadata.title),
                  title: metadata.title ? metadata.title : "No title given",
                  cover: metadata.cover ? metadata.cover : "https://placehold.it/200x200",
                  date: metadata.date ? metadata.date : "No date given",
                  content: content ? content : "No content given",
              }
              postlist.push(post)
              if (i === files.length - 1) {
                  const sortedList = postlist.sort ((a, b) => {
                      return a.id < b.id ? 1 : -1
                  })
                  let data = JSON.stringify(sortedList)
                  fs.writeFileSync(options.outputPosts, data);
                  console.log(`✅Data saved to ${options.outputPosts}`)
              }
              
          })
      })
  })
  return 
}

// writeJSON();
posts.writeJSON();
// getPosts();
