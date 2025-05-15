const fs = require('fs')
const path = require('path')

const antdDistFolder = path.join(__dirname, '..', 'node_modules', 'antd', 'dist')
const publicThemesFolder = path.join(__dirname, '..', 'public', 'themes')

const lightThemeFileName = 'antd.min.css'
const darkThemeFileName = 'antd.dark.min.css'

const lightThemeSourcePath = path.join(antdDistFolder, lightThemeFileName)
const darkThemeSourcePath = path.join(antdDistFolder, darkThemeFileName)

const lightThemeTargetPath = path.join(publicThemesFolder, lightThemeFileName)
const darkThemeTargetPath = path.join(publicThemesFolder, darkThemeFileName)

if (fs.existsSync(publicThemesFolder)) {
  fs.rmSync(publicThemesFolder, { recursive: true, force: true })
}

fs.mkdirSync(publicThemesFolder, { recursive: true })
fs.createReadStream(lightThemeSourcePath).pipe(fs.createWriteStream(lightThemeTargetPath))
fs.createReadStream(darkThemeSourcePath).pipe(fs.createWriteStream(darkThemeTargetPath))
