import { Model } from '../lib/mooadmin-ngx/active-record';

export interface Contact extends Model {
    id: number;
    name: string;
    phone: string;
}
