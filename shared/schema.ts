import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  workTitle: text("work_title"),
});

export const dashboardStatus = pgTable("dashboard_status", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(), // 'terminal', 'kilang', 'intransit'
  submissionCompleted: integer("submission_completed").notNull().default(0),
  submissionTotal: integer("submission_total").notNull().default(0),
  reviewStatus: text("review_status").notNull().default("Not Started"), // 'Completed', 'In Progress', 'Not Started'
  approvalStatus: text("approval_status").notNull().default("Not Started"),
});

export const regionStatus = pgTable("region_status", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  type: text("type").notNull(), // 'terminal', 'kilang'
  name: text("name").notNull(),
  status: text("status").notNull().default("Not Started"), // 'Completed', 'In Progress', 'Not Started'
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  workTitle: true,
});

export const insertDashboardStatusSchema = createInsertSchema(dashboardStatus).omit({
  id: true,
});

export const insertRegionStatusSchema = createInsertSchema(regionStatus).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DashboardStatus = typeof dashboardStatus.$inferSelect;
export type RegionStatus = typeof regionStatus.$inferSelect;
export type InsertDashboardStatus = z.infer<typeof insertDashboardStatusSchema>;
export type InsertRegionStatus = z.infer<typeof insertRegionStatusSchema>;
