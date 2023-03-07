

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const yaml = require("js-yaml")
const fs = require("fs")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const courseTemplate = path.resolve("./src/components/courses.js")
  const courses = yaml.load(fs.readFileSync("./src/data/courses.yaml"))

  courses.forEach((course) => {
    createPage({
      path: `/course/${course.id}`,
      component: courseTemplate,
      context: {
        course,
      },
    })
  })
}

