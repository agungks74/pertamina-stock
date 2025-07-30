import { randomUUID } from "crypto";
import type {
  User,
  InsertUser,
  DashboardStatus,
  InsertDashboardStatus,
  RegionStatus,
  InsertRegionStatus,
} from "@/shared/schema";

class MemStorage {
  private users = new Map<string, User>();
  private dashboardStatuses = new Map<string, DashboardStatus>();
  private regionStatuses = new Map<string, RegionStatus>();

  constructor() {
    this.seed();
  }

  private seed() {
    // Initialize dashboard statuses
    const terminalStatus: DashboardStatus = {
      id: randomUUID(),
      type: "terminal",
      submissionCompleted: 8,
      submissionTotal: 8,
      reviewStatus: "Completed",
      approvalStatus: "Not Started"
    };

    const kilangStatus: DashboardStatus = {
      id: randomUUID(),
      type: "kilang",
      submissionCompleted: 4,
      submissionTotal: 7,
      reviewStatus: "Not Started",
      approvalStatus: "Not Started"
    };

    const intransitStatus: DashboardStatus = {
      id: randomUUID(),
      type: "intransit",
      submissionCompleted: 0,
      submissionTotal: 1,
      reviewStatus: "Not Started",
      approvalStatus: "Not Started"
    };

    this.dashboardStatuses.set(terminalStatus.id, terminalStatus);
    this.dashboardStatuses.set(kilangStatus.id, kilangStatus);
    this.dashboardStatuses.set(intransitStatus.id, intransitStatus);

    // Initialize terminal region statuses
    for (let i = 1; i <= 8; i++) {
      const regionStatus: RegionStatus = {
        id: randomUUID(),
        type: "terminal",
        name: `Region ${i}`,
        status: "Completed"
      };
      this.regionStatuses.set(regionStatus.id, regionStatus);
    }

    // Initialize kilang region statuses
    const kilangStatuses = [
      { name: "Refinery Unit 1", status: "Completed" },
      { name: "Refinery Unit 2", status: "In Progress" },
      { name: "Refinery Unit 3", status: "Not Started" },
      { name: "Refinery Unit 4", status: "Completed" },
      { name: "Refinery Unit 5", status: "Completed" },
      { name: "Refinery Unit 6", status: "In Progress" },
      { name: "Refinery Unit 7", status: "Completed" }
    ];

    kilangStatuses.forEach(({ name, status }) => {
      const regionStatus: RegionStatus = {
        id: randomUUID(),
        type: "kilang",
        name,
        status
      };
      this.regionStatuses.set(regionStatus.id, regionStatus);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id, workTitle: insertUser.workTitle || "Work Title" };
    this.users.set(id, user);
    return user;
  }

  async getDashboardStatuses(): Promise<DashboardStatus[]> {
    return Array.from(this.dashboardStatuses.values());
  }

  async getRegionStatuses(): Promise<RegionStatus[]> {
    return Array.from(this.regionStatuses.values());
  }

  async createDashboardStatus(status: InsertDashboardStatus): Promise<DashboardStatus> {
    const id = randomUUID();
    const dashboardStatus: DashboardStatus = { 
      id,
      type: status.type,
      submissionCompleted: status.submissionCompleted ?? 0,
      submissionTotal: status.submissionTotal ?? 0,
      reviewStatus: status.reviewStatus ?? "Not Started",
      approvalStatus: status.approvalStatus ?? "Not Started"
    };
    this.dashboardStatuses.set(id, dashboardStatus);
    return dashboardStatus;
  }

  async createRegionStatus(status: InsertRegionStatus): Promise<RegionStatus> {
    const id = randomUUID();
    const regionStatus: RegionStatus = { 
      id,
      type: status.type,
      name: status.name,
      status: status.status ?? "Not Started"
    };
    this.regionStatuses.set(id, regionStatus);
    return regionStatus;
  }
}

export const storage = new MemStorage();