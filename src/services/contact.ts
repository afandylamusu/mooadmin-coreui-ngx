import { Model } from '../lib/mooadmin-ngx/active-record';

export interface Contact extends Model {
    id: number;
    name: string;
    number: string;
    address: string;
    password: string;
    email: string;
    explanation: string;
    position: string;
    totalMonth: string;
    agreement: string;
    
}