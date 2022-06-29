import { Router } from 'express'
import * as profileCtrl from '../controllers/profile.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//localhost3000:profile
router.get('/', isLoggedIn, profileCtrl.index)

// localhost3000:profile/:id

export {
  router
}
