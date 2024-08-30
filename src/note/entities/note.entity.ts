import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
    @PrimaryGeneratedColumn( "increment")
    id!: number;
    
    @Column()
    noteName: string;

    @Column()
    time: Date;

    @Column()
    content: string;

    @Column()
    isCompleted: boolean;
}

