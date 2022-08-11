import express, {Express, Request, Response} from 'express'
import {Firestore} from '@google-cloud/firestore'
import {v4 as uuidv4} from 'uuid'

const app: Express = express()
app.use(express.json())

const database = new Firestore({
  projectId: '（プロジェクトID）'
});

const collectionName = ((process.env.K_SERVICE ?? process.env.SERVICE_NAME) ?? 'default') + '_collection'

app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({message: 'ok'})
})

app.post('/post', async (req: Request, res: Response) => {
  const uuid = uuidv4();

  if (req.body.message) {
    await database.collection(collectionName).doc(uuid).set({message: req.body.message})

    res.status(200).json({message: 'resource created', id: uuid})
  } else {
    res.status(400).json({message: 'require [message] key'})
  }
})

app.get('/get/:id', async (req: Request, res: Response) => {
  const document = await database.collection(collectionName).doc(req.params.id).g
et()
  const docData = document.data()

  if (document.exists && typeof docData !== "undefined") {
    res.status(200).json({message: docData.message})
  } else {
    res.status(404).json({message: 'not found'})
  }
})

app.listen(process.env.PORT ?? 8080, () => {
  console.log('express server started.')
})