import moment from 'moment';

export const STORAGE_CONSTANTS = {
    USER_PROFILE_KEY: '@user-profile',
    START_DATE_KEY: (date: any)=> `@symptom-start-${moment(date).format('MMDDYY')}`,
    SYMPTOM_DAILY_KEY: (date: any)=> `@symptom-daily-${moment(date).format('MMDDYY')}`,
    PSQI_KEY_1_3:  `@psqi-1-3`,
    PSQI_KEY_4:  `@psqi-4`,
    PSQI_KEY_5:  `@psqi-5`,
    PSQI_KEY_6_9:  `@psqi-6-9`,
}
