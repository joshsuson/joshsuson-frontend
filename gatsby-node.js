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

exports.createPages = async params => {
  await Promise.all([turnJobsIntoPages(params)])
}
