import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

const tracks = ['developer', 'designer', 'creative']

export const counter = functions
  .region('asia-east2')
  .https.onRequest(async (request, response) => {
    // Init Firebase
    if (!admin.apps.length) {
      admin.initializeApp()
    } else {
      admin.app()
    }

    // Ref for locked result
    const resultRef = await admin.firestore().collection('registration')

    const filter = await tracks.map(async track => {
      const snapshot = await resultRef.where('track', '==', track).get()

      return {
        track,
        amount: snapshot.size,
      }
    })

    Promise.all(filter).then(async res => {
      await response.set('Access-Control-Allow-Origin', '*')

      return response.send({
        data: res,
      })
    })
  })
