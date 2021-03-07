
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
