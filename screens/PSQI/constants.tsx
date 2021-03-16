export const PSQI_QUES_1_4: object[] = [
  {
    id: '1',
    ques: 'When have you usually gone to bed?',
    ans: null
  },
  {
    id: '2',
    ques: 'How long (in minutes) has it taken you to fall asleep each night?',
    ans: null
  },
  {
    id: '3',
    ques: 'What time have you usually gotten up in the morning?',
    ans: null
  },
  {
    id: '4. A',
    ques: 'What time have you usually gotten up in the morning?',
    ans: null
  },
  {
    id: '4. B',
    ques: 'How many hours were you in bed?',
    ans: null
  }
]

export const PSQI_QUES_5_HEADER: object = {
  header:
    'During the past month, how often have you had trouble sleeping because you',
  scale: [
    {
      label: 'Not during the past month',
      value: 0
    },
    {
      label: 'Less than once a week',
      value: 1
    },
    {
      label: 'Once or twice a week',
      value: 2
    },
    {
      label: 'Three or more times a week',
      value: 3
    }
  ]
}

export const PSQI_QUES_5: object[] = [
  {
    id: 'A',
    ques: 'Cannot get to sleep within 30 minutes',
    value: null
  },
  {
    id: 'B',
    ques: 'Wake up in the middle of the night or early morning',
    value: null
  },
  {
    id: 'C',
    ques: 'Have to get up to use the bathroom',
    value: null
  },
  {
    id: 'D',
    ques: 'Cannot breathe comfortably',
    value: null
  },
  {
    id: 'E',
    ques: 'Cough or snore loudly',
    value: null
  },
  {
    id: 'F',
    ques: 'Feel too cold',
    value: null
  },
  {
    id: 'G',
    ques: 'Feel too hot',
    value: null
  },
  {
    id: 'H',
    ques: 'Have bad dreams',
    value: null
  },
  {
    id: 'I',
    ques: 'Have pain',
    value: null
  },
  {
    id: 'J',
    ques:
      'Other reason (s), please describe, including how often you have had trouble sleeping because of this reason (s):',
    reason: '',
    value: null
  }
]

export const PSQI_QUES_6_9: object[] = [
  {
    id: '6',
    ques:
      'During the past month, how often have you taken medicine (prescribed or “over the counter”) to help you sleep?',
    ans: null
  },
  {
    id: '7',
    ques:
      'During the past month, how often have you had trouble staying awake while driving, eating meals, or engaging in social activity?',
    ans: null
  },
  {
    id: '8',
    ques:
      'During the past month, how much of a problem has it been for you to keep up enthusiasm to get things done?',
    ans: null
  },
  {
    id: '9',
    ques:
      'During the past month, how would you rate your sleep quality overall?',
    ans: null
  }
]
