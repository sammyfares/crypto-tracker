import { Router } from 'express'
import * as coinsCtrl from "../controllers/coins.js"

const router = Router()

//Get localhost:3000/coins
router.get('/', coinsCtrl.index)


//post localhost:3000/coins/search
router.post('/search', coinsCtrl.search)

//get localhost:3000/coins/search/:id
router.get('/:id', coinsCtrl.show)


export {
  router
}
