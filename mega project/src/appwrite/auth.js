import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  // Create a new account and log the user in
  async createAccount({ email, password, name }) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return this.login({ email, password });
    } catch (error) {
      if (error.code === 409) {
        throw new Error("Email already registered. Please login instead.");
      }
      throw error;
    }
  }

  // Login with email and password
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw new Error("Invalid email or password.");
    }
  }

  // Get current user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService :: getCurrentUser ::", error);
      return null;
    }
  }

  // Logout all sessions
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error("Logout failed.");
    }
  }
}

const authService = new AuthService();
export default authService;
