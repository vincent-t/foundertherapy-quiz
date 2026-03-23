import { pgTable, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const quizCompletions = pgTable("quiz_completions", {
  id: serial("id").primaryKey(),
  completionId: uuid("completion_id").notNull().unique().defaultRandom(),
  answers: text("answers").array().notNull(),
  primaryArchetype: text("primary_archetype").notNull(),
  secondaryArchetype: text("secondary_archetype"),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type QuizCompletion = typeof quizCompletions.$inferSelect;
export type NewQuizCompletion = typeof quizCompletions.$inferInsert;
