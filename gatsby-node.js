const path = require("path")

async function turnJobsIntoPages({ graphql, actions }) {
  const jobTemplate = path.resolve("./src/templates/jobTemplate.js")

  const { data } = await graphql(`
    {
      jobs: allSanityJob {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.jobs.nodes.forEach(job => {
    actions.createPage({
      path: `job/${job.slug.current}`,
      component: jobTemplate,
      context: {
        slug: job.slug.current,
      },
    })
  })
}

async function turnProjectsIntoPages({ graphql, actions }) {
  const projectTemplate = path.resolve("./src/templates/projectTemplate.js")

  const { data } = await graphql(`
    {
      projects: allSanityProject {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  data.projects.nodes.forEach(project => {
    actions.createPage({
      path: `project/${project.slug.current}`,
      component: projectTemplate,
      context: {
        slug: project.slug.current,
      },
    })
  })
}

exports.createPages = async params => {
  await Promise.all([turnJobsIntoPages(params), turnProjectsIntoPages(params)])
}
