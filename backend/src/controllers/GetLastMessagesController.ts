import { Request, Response } from 'express'
import { GetLastMessagesServece } from '../services/GetLastMessagesService'

class GetLastMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastMessagesServece()

    const result = await service.execute()

    return response.json(result)
  }
}

export { GetLastMessagesController }
