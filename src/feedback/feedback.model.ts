import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";

export enum FeedbackCategory {
  WORK_ENVIRONMENT = "Work Environment",
  LEADERSHIP = "Leadership",
  GROWTH = "Growth",
  OTHERS = "Others",
}

@Entity()
export class FeedBack {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  text: string;

  @Column({
    type: "enum",
    enum: FeedbackCategory,
  })
  category: FeedbackCategory;

  @Column({ default: false })
  isReviewed: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  submittedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
