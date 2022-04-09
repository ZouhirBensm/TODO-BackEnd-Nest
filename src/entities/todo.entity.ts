import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    title: string;

    @Column()
    date_dn: Date;

    @Column()
    date_cr: Date;

    @Column()
    status: number;
}

// Status: 1: Null, 2: Requires Attention 3: Priority 4: Soon Finished 5: Done