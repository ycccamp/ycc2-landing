import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

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
    const lockedResultRef = await admin
      .firestore()
      .collection('registration')
      .where('isLocked', '==', true)

    const tracks = ['developer', 'designer', 'creative']

    const filter = await tracks.map(async track => {
      const snapshot = await lockedResultRef.where('track', '==', track).get()

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
