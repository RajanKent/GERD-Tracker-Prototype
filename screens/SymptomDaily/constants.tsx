
const SYMPTOMS_LIST: string[] = [
  'Day time Heartburn',
  'Night time Heartburn',
  'Painful Swallowing',
  'Difficulty Swallowing',
  'Bad tasting fluid coming up into mouth',
  'Chest Pain'
];

enum SEVERITY_SCALE {
  MILD = 'MILD',
  MODERATE = 'MODERATE',
  SEVERE = 'SEVERE',
  DISABLING = 'DISABLING'
}

const SEVERITY_SCALE_OPTIONS: string[] = [
  SEVERITY_SCALE.MILD,
  SEVERITY_SCALE.MODERATE,
  SEVERITY_SCALE.SEVERE,
  SEVERITY_SCALE.DISABLING,
];

export {
  SYMPTOMS_LIST,
  SEVERITY_SCALE_OPTIONS
}


const SYMPTOM_DAILY = [
  {
    name: 'rajanmaharjan',
    symptomsDaily: [{
      date: '',
      symptomsList: [{
        symptom: '',
        severityScale: [{
          scale: ''
        }]
      }]
    }],
    psqi: [],
    images: [{
      timestamp: '',
      path: ''
    }]
  }
];

type UserProfile = {
  name: string,
  symptomsDaily: object[],
  psqi: object[],
  images: object[]
}

export function createNewProfile(obj: UserProfile) {
  const newUserProfile: object[] = [];

  return newUserProfile;
}
