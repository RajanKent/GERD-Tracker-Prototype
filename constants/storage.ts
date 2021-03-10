import moment from 'moment';

export const STORAGE_CONSTANTS = {
    SYMPTOM_DAILY_KEY: (date: any)=> `@symptom-daily-${moment(date).format('MMDDYY')}`
}
