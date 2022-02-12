import { Response } from 'express'

class GithubRedirectControler {
  async handle(response: Response) {
    return await response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    )
  }
}

export { GithubRedirectControler }
