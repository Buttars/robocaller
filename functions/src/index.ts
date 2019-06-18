import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();
import * as twilio from 'twilio';
const { sid, auth_token } = functions.config().twilio;
const robocaller = twilio(sid, auth_token);

interface Campaign {
  title: string;
  description: string;
  phones: Array<string>;
  steps: Array<string>;
}

const createTwiml = (steps: Array<string>) => {
  let twimlet = 'http://twimlets.com/message?';

  for (let i = 0; i < steps.length; i++) {
    twimlet += `Message[${i}]=${steps[i]}&`;
  }

  return twimlet;
};

const makeCall = async (phone: string, twimlUrl: string) => {
  const call = await robocaller.calls.create({
    to: phone,
    from: '+18016147190',
    url: encodeURI(twimlUrl),
    method: 'GET',
  });

  return call.sid;
};

const runCampaign = (campaign: Campaign) => {
  for (const phone of campaign.phones) {
    return makeCall(phone, createTwiml(campaign.steps));
  }
  return;
};

export const taskRunner = functions
  .runWith({ memory: '2GB' })
  .pubsub.schedule('* * * * *')
  .onRun(async () => {
    const query = db.collectionGroup('campaigns').where('scheduled', '==', true);
    const campaigns = await query.get();

    campaigns.forEach(snapshot => {
      console.log(snapshot.data());
      const campaign = snapshot.data();
      runCampaign(campaign as Campaign);
      snapshot.ref.update({ scheduled: false });
    });
  });
