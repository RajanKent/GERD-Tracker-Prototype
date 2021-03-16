export const PSQI_QUES_1_3: object[] = [
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
  }
]

export const PSQI_QUES_4: object[] = [
  {
    id: '4',
    ques: 'A. What time have you usually gotten up in the morning?',
    ans: null
  },
  {
    id: '4',
    ques: 'B. How many hours were you in bed?',
    ans: null
  }
]

export const PSQI_QUES_5: object = {
  header: {
    title:
      'During the past month, how often have you had trouble sleeping because you',
    scale: [
      {
        label: 'Not during the past month',
        value: 0
      },
      {
        label: 'Less than once a week',
        value: 0
      },
      {
        label: 'Once or twice a week',
        value: 0
      },
      {
        label: 'Three or more times a week',
        value: 0
      }
    ]
  },
  questions: [
    {
      id: 'A',
      ques: 'Cannot get to sleep within 30 minutes',
      ans: null
    },
    {
      id: 'B',
      ques: 'Wake up in the middle of the night or early morning',
      ans: null
    },
    {
      id: 'C',
      ques: 'Have to get up to use the bathroom',
      ans: null
    },
    {
      id: 'D',
      ques: 'Cannot breathe comfortably',
      ans: null
    },
    {
      id: 'E',
      ques: 'Cough or snore loudly',
      ans: null
    },
    {
      id: 'F',
      ques: 'Feel too cold',
      ans: null
    },
    {
      id: 'G',
      ques: 'Feel too hot',
      ans: null
    },
    {
      id: 'H',
      ques: 'Have bad dreams',
      ans: null
    },
    {
      id: 'I',
      ques: 'Have pain',
      ans: null
    },
    {
      id: 'J',
      ques:
        'Other reason (s), please describe, including how often you have had trouble sleeping because of this reason (s):',
      reason: '',
      ans: null
    }
  ]
}

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
