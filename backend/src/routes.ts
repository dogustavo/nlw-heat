import { Router } from 'express'
import {
  AuthUserController,
  CreateMessageController,
  GetLastMessagesController,
  ProfileUserController,
  GithubRedirectControler
} from './controllers'
import { ensureAuth } from './middleware/ensureAuth'

const router = Router()

router.get('/github', new GithubRedirectControler().handle)
router.get('/signin/callback', (request, response) => {
  const { code } = request.query
  return response.json(code)
})

router.post('/authenticate', new AuthUserController().handle)
router.post(
  '/messages',
  ensureAuth,
  new CreateMessageController().handle
)
router.get('/messages/last3', new GetLastMessagesController().handle)
router.get('/profile', ensureAuth, new ProfileUserController().handle)

export { router }
