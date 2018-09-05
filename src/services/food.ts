import { Model } from '../../lib/mooadmin-ngx';

export interface Food extends Model {
    Id: number;
    Name: string;
    Type: string;
    Calories: number;
    Created: Date;
}
