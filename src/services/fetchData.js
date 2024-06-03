import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json',
    Authorization: import.meta.env.VITE_GITHUB_TOKEN
      ? `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
      : undefined
  }
})
const repoName = 'victorvictoria-maker'

export default {
  getMyData() {
    return api.get(`/users/${repoName}`)
  },

  getAllRepos() {
    return api.get(`/users/${repoName}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 6
      }
    })
  },

  async getEachRepoData(repo) {
    try {
      const [repositoryDataResponse, languagesResponse, commitsResponse] = await Promise.all([
        api.get(`/repos/${repoName}/${repo}`),
        api.get(`/repos/${repoName}/${repo}/languages`),
        api.get(`/repos/${repoName}/${repo}/commits`)
      ])

      const repositoryData = repositoryDataResponse.data
      const languages = languagesResponse.data
      const commits = commitsResponse.data

      return { repositoryData, languages, commits }
    } catch (error) {
      console.error(`Error fetching repository data for ${repoName}/${repo}: ${error.message}`)
      throw new Error(`Error fetching repository data for ${repoName}/${repo}: ${error.message}`)
    }
  }
}
