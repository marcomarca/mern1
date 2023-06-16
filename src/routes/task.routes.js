import { Router } from 'express'
import { authRequired } from '../middleware/validateToken.js'

const router = Router()

router.get('/tasks', authRequired, (req, res) => {
    res.json('tasks')
    }
)

export default router