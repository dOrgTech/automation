const action = require("github-actions")

const url = process.env.PROPOSER_URL

const proposalId = request(`${url}/create-proposal...`)
const status = request(`${url}/proposal-status?id=${proposalId}`)

if (status === "passed") {
  open PR
} else {
  lock PR
}
