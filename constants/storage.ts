import moment from 'moment';

export const STORAGE_CONSTANTS = {
    START_DATE_KEY: (date: any)=> `@symptom-start-${moment(date).format('MMDDYY')}`,
    SYMPTOM_DAILY_KEY: (date: any)=> `@symptom-daily-${moment(date).format('MMDDYY')}`
}
